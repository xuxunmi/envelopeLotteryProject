## 开发

```bash
# 配置
1. node 版本 16+
2. pnpm 版本 8.x

# 克隆项目
git clone http://101.227.82.60:8200/pt-group/pt-project-front.git

# 进入项目目录
cd envelopeLotteryProject

# 安装依赖
pnpm install || cnpm install

# 启动服务
pnpm dev || npm dev
```

## 预览

```bash
# 预览预发布环境
pnpm preview:stage

# 预览正式环境
pnpm preview:prod
```

## 多环境打包

```bash
# 构建预发布环境
pnpm build:stage

# 构建正式环境
pnpm build:prod
```

## 代码检查

```bash
# 代码格式化
pnpm lint

# 单元测试
pnpm test
```

## 目录结构

```bash
├─ .husky                # 用户提交代码时格式化代码
├─ .vscode               # vscode 配置和拓展
├─ public
│  ├─ favicon.ico
│  ├─ app-loading.css    # 首屏加载 loading
├─ src
│  ├─ api                # api 接口
│  ├─ assets             # 静态资源
│  ├─ components         # 全局组件
│  ├─ config             # 全局配置
│  ├─ constant           # 常量/枚举
│  ├─ directives         # 全局指令
│  ├─ hooks              # 全局 hook
│  ├─ icons              # svg icon
│  ├─ layout             # 布局
│  ├─ plugins            # 全局插件
│  ├─ router             # 路由
│  ├─ store              # pinia store
│  ├─ styles             # 全局样式
│  ├─ utils              # 全局公共方法
│  └─ views              # 所有页面
│  │   ├── dashboard         # 首页
│  │   ├── error-page        # 错误页面
│  │   ├── login             # 登录页面
│  │   ├── system            # 系统管理页面
│  │   │   ├── organization      # 组织管理页面
│  │   │   ├── flowpath          # 流程管理页面
│  │   │   └── permission        # 权限管理页面
│  │   ├── project           # 项目管理页面
│  │   ├── task              # 我的任务页面
│  │   ├── timeTable         # 时间表管理页面
│  │   └── monitor           # 项目监控页面
│  ├─ App.vue            # 入口页面
│  └─ main.ts            # 入口文件
├─ tests                 # 单元测试
├─ types                 # ts 声明
├─ .env.development      # 开发环境
├─ .env.production       # 正式环境
├─ .env.staging          # 预发布环境
├─ .eslintrc.js          # eslint 配置
├─ .prettier.config.js   # prettier 配置
├─ tsconfig.json         # ts 编译配置
├─ unocss.config.ts      # unocss 配置
└─ vite.config.ts        # vite 配置

```


② 本地 SVG 文件图标


> 1. 将 svg 图标文件放在 `src/icons/svg` 目录下
> 2. 在项目中直接使用 `<svg-icon name="svg图标文件命名" />` 即可

例如：
本项目 `src/icons/svg` 中放了个叫 `check-in.svg` 的图标文件，然后在组件 `name` 属性中填入文件的命名即可，So easy~


```Vue
<svg-icon name="check-in" />
```

> 项目中使用了 `unplugin-vue-components` 自动引入组件，所以 `main.ts` 中无需注册全局图标组件。



### - <span id="router">路由缓存 & 命名注意 ⚠</span>

组件默认开启缓存，如某个组件需关闭缓存，在对应路由 `meta` 内的 `noCache` 字段赋值为 `true` 即可。

```typescript
// src/router/routes.ts
const routes: Array<RouteRecordRaw> = [
    // ...
    {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
            title: "关于",
            noCache: true
        }
    }
];
```

 为了保证页面能被正确缓存，请确保**组件**的 `name` 值和对应路由的 `name` 命名完全相同。

```vue
<!-- src/views/about/index.vue -->
<script setup lang="ts">
// Vue3.3+ defineOptions 宏
defineOptions({
  name: "About"
});
</script>

<template>
  <div>about</div>
</template>
```



### - <span id="console">调试面板 eruda</span>

![](docs/assets/img/Snipaste_2023-05-04_21-58-28.png)

为了方便移动端查看 log 信息和调试，开发环境引入了 eruda 调试面板的 cdn。如果你的开发环境不需要的话请在 `.env.development` 中修改值

```html
# .env.development

# 开发环境启用 cdn eruda 调试工具。若不启用，将 true 修改为 false 或其他任意值即可
VITE_ENABLE_ERUDA = "true"
```



### - <span id="page-title">动态设置页面标题</span>

在路由全局前置守卫中：

```js
// src/router/index.ts
// ...
router.beforeEach((to: toRouteType, from, next) => {
  // ...
  // 页面 title
  setPageTitle(to.meta.title);
  next();
});
```


//
// Created by xxm on 2024/11/11.
//
// (一)本代码的质量保证期（简称“质保期”）为上线内 3 个月，质保期内乙方对所代码实行包修改服务。
// (二)本代码提供三包服务（包阅读、包编译、包运行）不包熟
// (三)本代码所有解释权归权归佛祖所有，禁止未开光盲目上线
// (四)请严格按照保养手册对代码进行保养，本代码特点：
// i. 运行在风电、水电的机器上
// ii. 机器机头朝东，比较喜欢太阳的照射
// iii. 集成此代码的人员，应拒绝黄赌毒，容易诱发本代码性能越来越弱
// 声明：未履行将视为自主放弃质保期，本人不承担对此产生的一切法律后果
// 如有问题，欢迎访问: https://github.com/xuxunmi/envelopeLotteryProject

/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑     永不宕机     永无BUG
 * 
 * 
 *            佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
 */


/*
 *                                |~~~~~~~|
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *     |~.\\\_\~~~~~~~~~~~~~~xx~~~         ~~~~~~~~~~~~~~~~~~~~~/_//;~|
 *     |  \  o \_         ,XXXXX),                         _..-~ o /  |
 *     |    ~~\  ~-.     XXXXX`)))),                 _.--~~   .-~~~   |
 *      ~~~~~~~`\   ~\~~~XXX' _/ ';))     |~~~~~~..-~     _.-~ ~~~~~~~
 *               `\   ~~--`_\~\, ;;;\)__.---.~~~      _.-~
 *                 ~-.       `:;;/;; \          _..-~~
 *                    ~-._      `''        /-~-~
 *                        `\              /  /
 *                          |         ,   | |
 *                           |  '        /  |
 *                            \/;          |
 *                             ;;          |
 *                             `;   .       |
 *                             |~~~-----.....|
 *                            | \             \
 *                           | /\~~--...__    |
 *                           (|  `\       __-\|
 *                           ||    \_   /~    |
 *                           |)     \~-'      |
 *                            |      | \      '
 *                            |      |  \    :
 *                             \     |  |    |
 *                              |    )  (    )
 *                               \  /;  /\  |
 *                               |    |/   |
 *                               |    |   |
 *                                \  .'  ||
 *                                |  |  | |
 *                                (  | |  |
 *                                |   \ \ |
 *                                || o `.)|
 *                                |`\\) |
 *                                |       |
 *                                |       |
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *                               耶稣 欢迎光临
 */
