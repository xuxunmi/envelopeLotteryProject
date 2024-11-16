import { fileURLToPath, URL } from 'node:url'
import { loadEnv, type ConfigEnv, type UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// Vant按需引入
import Components from 'unplugin-vue-components/vite'
// API自动导入插件,如 ref reactive等api不需要手动引入
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'
import path from 'path'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'
//Gzip文件压缩
// import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from 'vite-plugin-html'
import { enableCDN } from './build/cdn'
// 为打包后的文件提供传统浏览器兼容性支持
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// 当前工作目录路径
const root: string = process.cwd()

// https://vitejs.dev/config/
export default (configEnv: ConfigEnv): UserConfigExport => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv
  console.log('viteEnv: ', viteEnv)
  const { VITE_PUBLIC_PATH, VITE_ENABLE_ERUDA, VITE_CDN_DEPS } = viteEnv
  return {
    /** 打包时根据实际情况修改 base */
    base: VITE_PUBLIC_PATH,
    plugins: [
      vue(),
      vueJsx(),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
      vueSetupExtend(),
      mockDevServerPlugin(),
      // vant 组件自动按需引入
      Components({
        dts: 'src/typings/components.d.ts',
        resolvers: [VantResolver()]
      }),
      AutoImport({
        imports: ['vue', 'vue-router'],
        dts: 'src/typings/components.d.ts',
        resolvers: [VantResolver()]
      }),
      /** 将 SVG 静态图转化为 Vue 组件 */
      svgLoader({ defaultImport: 'url' }),
      // svg icon
      createSvgIconsPlugin({
        // 指定图标文件夹
        iconDirs: [path.resolve(root, 'src/icons/svg')],
        // 指定 symbolId 格式
        symbolId: 'icon-[dir]-[name]'
      }),
      //开启Gzip压缩
      // viteCompression({
      //   verbose: true, // 是否在控制台中输出压缩结果
      //   disable: false,
      //   threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
      //   algorithm: "gzip", // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
      //   ext: ".gz",
      //   deleteOriginFile: true // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
      // }),
      // 注入模板数据
      createHtmlPlugin({
        inject: {
          data: {
            ENABLE_ERUDA: VITE_ENABLE_ERUDA || 'false'
          }
        }
      }),
      // 生产环境默认不启用 CDN 加速
      enableCDN(VITE_CDN_DEPS)
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      // 引入文件时忽略的文件后缀
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    },
    css: {
      // 引入全局变量 less
      preprocessorOptions: {
        less: {
          additionalData: `@import '@/styles/variables-color.less';`
        }
      }
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      host: '0.0.0.0',
      // 服务器端口号
      port: 9527,
      // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      // 是否自动打开浏览器
      open: true,
      // 是否开启 https, Vite 5.x 中的 https 配置要求提供object,建议移除或替换为 {} 来禁用 https
      // https: {
      //   // key: fs.readFileSync(path.resolve(__dirname, 'path-to-your-private-key.pem')),
      //   // cert: fs.readFileSync(path.resolve(__dirname, 'path-to-your-certificate.pem')),
      //   // ca: fs.readFileSync(path.resolve(__dirname, 'path-to-your-ca.pem')) // 可选， 如果使用 CA 证书
      // },
      // 自定义代理规则
      proxy: {
        '/api': {
          target: 'http://api.sydaxin.top',
          ws: true,
          // 跨域
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        },
        '/pay': {
          target: 'http://pay.sjdxkj.top',
          ws: true,
          // 跨域
          changeOrigin: true,
          rewrite: path => path.replace(/^\/pay/, '')
        }
      }
    },
    build: {
      // 指定输出路径，默认'dist'
      outDir: 'dist',
      // 指定生成静态资源的存放路径(相对于build.outDir)
      assetsDir: 'static',
      // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
      assetsInlineLimit: 4096,
      // 规定触发警告的 chunk 大小。（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
      cssCodeSplit: true,
      // 构建后是否生成source map文件，默认false
      sourcemap: false,
      // 为true时，会生成manifest.json文件，用于后端集成
      manifest: false,
      // 生产环境时移除console,debugger,Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true,
          pure_funcs: ['console.log']
        },
        format: {
          /** 删除注释 */
          comments: false
        }
      },
      rollupOptions: {
        // 不同类型文件分包
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
          // 最小化拆分包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      }
    }
  }
}
