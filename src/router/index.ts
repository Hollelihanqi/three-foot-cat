import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
const Layout = () => import("@/layout/index.vue")

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "开单",
          icon: "dashboard",
          affix: true
        }
      }
    ]
  },
  {
    path: "/order",
    component: Layout,
    name: "Order",
    meta: {
      title: "订单管理",
      icon: "menu"
    },
    children: [
      {
        path: "storeOrder",
        component: () => import("@/views/order/store/List.vue"),
        name: "StoreOrder",
        meta: {
          title: "店内订单",
          icon: "menu"
        }
      },
      {
        path: "wappOrder",
        component: () => import("@/views/order/wapp/List.vue"),
        name: "WappOrder",
        meta: {
          title: "小程序订单",
          icon: "menu"
        }
      },
      {
        path: "wappActiveOrder",
        component: () => import("@/views/order/wappActive/List.vue"),
        name: "WappActiveOrder",
        meta: {
          title: "小程序活动订单",
          icon: "menu"
        }
      },
      {
        path: "payOrder",
        component: () => import("@/views/order/pay/List.vue"),
        name: "PayOrder",
        meta: {
          title: "扫码枪支付列表",
          icon: "menu"
        }
      },
      {
        path: "reserveOrder",
        component: () => import("@/views/order/reserve/List.vue"),
        name: "ReserveOrder",
        meta: {
          title: "小程序预约定金",
          icon: "menu"
        }
      }
    ]
  }
]

/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    name: "Permission",
    meta: {
      title: "权限管理",
      icon: "lock",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true // 将始终显示根菜单
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面权限",
          roles: ["admin"] // 或者在子导航中设置角色
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive.vue"),
        name: "DirectivePermission",
        meta: {
          title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*", // 必须将 'ErrorPage' 路由放在最后, Must put the 'ErrorPage' route at the end
    component: Layout,
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      title: "错误页面",
      icon: "404",
      hidden: true
    },
    children: [
      {
        path: "403",
        component: () => import("@/views/error-page/403.vue"),
        name: "403",
        meta: {
          title: "403"
        }
      },
      {
        path: "404",
        component: () => import("@/views/error-page/404.vue"),
        name: "404",
        meta: {
          title: "404"
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}

export default router
