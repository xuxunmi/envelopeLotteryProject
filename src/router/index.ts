import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteLocationNormalized
} from "vue-router";
import routes from "./routes";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { start, done } from "@/utils/progress";
import setPageTitle from "@/utils/set-page-title";

console.log("import.meta.env: ", import.meta.env)

const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === "hash"
      ? createWebHashHistory(import.meta.env.BASE_URL)
      : createWebHistory(import.meta.env.VITE_PUBLIC_PATH), // hash模型
  // 滚动行为
  scrollBehavior: (to, from, savePosition) => {
    console.log("savePosition： ", savePosition);
    if (savePosition) {
      return savePosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
  routes
});

export interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string;
    noCache?: boolean;
  };
}

router.beforeEach((to: toRouteType, from, next) => {
  console.log("from: ", to, from);
  window.scrollTo(0, 0);
  // start();
  // 路由缓存
  useCachedViewStoreHook().addCachedView(to);
  // 页面 title
  setPageTitle(to.meta.title);
  next();
});

router.afterEach(() => {
  // done();
});

export default router;
