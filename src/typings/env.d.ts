/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<object, object, any>;
  export default component;
}

declare interface ImportMetaEnv {
  readonly VITE_PORT: number;
  readonly VITE_BASE_API: string;
  readonly VITE_PUBLIC_PATH: string;
  readonly VITE_PROXY_DOMAIN: string;
  readonly VITE_PROXY_DOMAIN_REAL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
