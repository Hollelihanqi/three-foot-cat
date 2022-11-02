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
        component: () => import("@/views/order/wappActivity/List.vue"),
        name: "wappActivityOrder",
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
  },
  {
    path: "/member",
    component: Layout,
    name: "Member",
    meta: {
      title: "会员管理",
      icon: "menu"
    },
    children: [
      {
        path: "memberList",
        component: () => import("@/views/memberManagement/memberList/List.vue"),
        name: "MemberList",
        meta: {
          title: "会员列表",
          icon: "menu"
        }
      },
      {
        path: "memberConsum",
        component: () => import("@/views/memberManagement/memberConsum/List.vue"),
        name: "MemberConsum",
        meta: {
          title: "会员消费",
          icon: "menu"
        }
      },
      {
        path: "memberPayCardRecords",
        component: () => import("@/views/memberManagement/memberPayCardRecords/List.vue"),
        name: "MemberPayCardRecords",
        meta: {
          title: "会员购卡记录",
          icon: "menu"
        }
      },
      {
        path: "memberCardHandleRecords",
        component: () => import("@/views/memberManagement/memberCardHandleRecords/List.vue"),
        name: "memberCardHandleRecords",
        meta: {
          title: "会员卡操作记录",
          icon: "menu"
        }
      },
      {
        path: "memberCardManagement",
        component: () => import("@/views/memberManagement/memberCardManagement/List.vue"),
        name: "memberCardManagement",
        meta: {
          title: "会员卡管理",
          icon: "menu"
        }
      },
      {
        path: "memberCardSettingOtherStore",
        component: () => import("@/views/memberManagement/memberCardSettingOtherStore/List.vue"),
        name: "memberCardSettingOtherStore",
        meta: {
          title: "跨店会员卡配置",
          icon: "menu"
        }
      }
    ]
  },
  {
    path: "/staff",
    component: Layout,
    name: "Staff",
    meta: {
      title: "员工管理",
      icon: "menu"
    },
    children: [
      {
        path: "staffList",
        component: () => import("@/views/staffManagement/staffList/List.vue"),
        name: "StaffList",
        meta: {
          title: "员工列表",
          icon: "menu"
        }
      },
      {
        path: "jishiSort",
        component: () => import("@/views/staffManagement/jishiSort/index.vue"),
        name: "JishiSort",
        meta: {
          title: "技师排序",
          icon: "menu"
        }
      },
      {
        path: "jishiGroupingManagement",
        component: () => import("@/views/staffManagement/jishiGroupingManagement/List.vue"),
        name: "JishiGroupingManagement",
        meta: {
          title: "技师分组管理",
          icon: "menu"
        }
      },
      {
        path: "jishiClassList",
        component: () => import("@/views/staffManagement/jishiClassList/List.vue"),
        name: "JishiClassList",
        meta: {
          title: "技师分班管理",
          icon: "menu"
        }
      },
      {
        path: "attendanceManagement",
        component: () => import("@/views/staffManagement/attendanceManagement/List.vue"),
        name: "AttendanceManagement",
        meta: {
          title: "考勤管理",
          icon: "menu"
        }
      },
      {
        path: "jishitichengPlan",
        component: () => import("@/views/staffManagement/jishitichengPlan/List.vue"),
        name: "JishitichengPlan",
        meta: {
          title: "技师提成方案",
          icon: "menu"
        }
      },
      {
        path: "holidayManagement",
        component: () => import("@/views/staffManagement/holidayManagement/index.vue"),
        name: "HolidayManagement",
        meta: {
          title: "请假管理",
          icon: "menu"
        }
      },
      {
        path: "staffPermission",
        component: () => import("@/views/staffManagement/staffPermission/List.vue"),
        name: "StaffPermission",
        meta: {
          title: "员工权限",
          icon: "menu"
        }
      },
      {
        path: "secondarySortClass",
        component: () => import("@/views/staffManagement/secondarySortClass/List.vue"),
        name: "SecondarySortClass",
        meta: {
          title: "二次排班记录",
          icon: "menu"
        }
      }
    ]
  },
  {
    path: "/viewData",
    component: Layout,
    name: "ViewData",
    meta: {
      title: "查看数据",
      icon: "menu"
    },
    children: [
      {
        path: "clientManagement",
        component: () => import("@/views/viewData/clientManagement/List.vue"),
        name: "ClientManagement",
        meta: {
          title: "客户管理",
          icon: "menu"
        }
      },
      {
        path: "commoentManagement",
        component: () => import("@/views/viewData/commoentManagement/List.vue"),
        name: "CommoentManagement",
        meta: {
          title: "评论管理",
          icon: "menu"
        }
      },
      {
        path: "operateLog",
        component: () => import("@/views/viewData/operateLog/List.vue"),
        name: "OperateLog",
        meta: {
          title: "操作日志",
          icon: "menu"
        }
      },
      {
        path: "monitor",
        component: () => import("@/views/viewData/monitor/List.vue"),
        name: "Monitor",
        meta: {
          title: "技师上钟监控",
          icon: "menu"
        }
      }
    ]
  },
  {
    path: "/reportManagement",
    component: Layout,
    name: "ReportManagement",
    meta: {
      title: "报表管理",
      icon: "menu"
    },
    children: [
      {
        path: "shiftRecord",
        component: () => import("@/views/reportManagement/shiftRecord/List.vue"),
        name: "ShiftRecord",
        meta: {
          title: "交接班记录",
          icon: "menu"
        }
      },
      {
        path: "shift",
        component: () => import("@/views/reportManagement/shift/List.vue"),
        name: "Shift",
        meta: {
          title: "交接班",
          icon: "menu"
        }
      },
      {
        path: "businessSummaryStatement",
        component: () => import("@/views/reportManagement/businessSummaryStatement/List.vue"),
        name: "BusinessSummaryStatement",
        meta: {
          title: "营业汇总报表",
          icon: "menu"
        }
      },
      {
        path: "businessDetailStatement",
        component: () => import("@/views/reportManagement/businessDetailStatement/List.vue"),
        name: "BusinessDetailStatement",
        meta: {
          title: "营业明细报表",
          icon: "menu"
        }
      },
      {
        path: "businessItemStatistics",
        component: () => import("@/views/reportManagement/businessItemStatistics/List.vue"),
        name: "BusinessItemStatistics",
        meta: {
          title: "营业项目统计",
          icon: "menu"
        }
      },
      {
        path: "businessMembershipCardResetStatistics",
        component: () => import("@/views/reportManagement/businessMembershipCardResetStatistics/List.vue"),
        name: "BusinessMembershipCardResetStatistics",
        meta: {
          title: "营业会员卡充值统计",
          icon: "menu"
        }
      },
      {
        path: "membershipCommissionSummary",
        component: () => import("@/views/reportManagement/membershipCommissionSummary/List.vue"),
        name: "MembershipCommissionSummary",
        meta: {
          title: "会员卡提成汇总",
          icon: "menu"
        }
      },
      {
        path: "technicianPerformanceSummary",
        component: () => import("@/views/reportManagement/technicianPerformanceSummary/index.vue"),
        name: "TechnicianPerformanceSummary",
        meta: {
          title: "技师业绩汇总表",
          icon: "menu"
        }
      },
      {
        path: "technicianPerformanceDetail",
        component: () => import("@/views/reportManagement/technicianPerformanceDetail/List.vue"),
        name: "TechnicianPerformanceDetail",
        meta: {
          title: "技师业绩明细表",
          icon: "menu"
        }
      },
      {
        path: "boxCleaningStatistics",
        component: () => import("@/views/reportManagement/boxCleaningStatistics/List.vue"),
        name: "BoxCleaningStatistics",
        meta: {
          title: "包厢清理统计",
          icon: "menu"
        }
      },
      {
        path: "projectCommissionSummaryReport",
        component: () => import("@/views/reportManagement/projectCommissionSummaryReport/List.vue"),
        name: "ProjectCommissionSummaryReport",
        meta: {
          title: "项目提成汇总表",
          icon: "menu"
        }
      },
      {
        path: "projectCommissionCheckReport",
        component: () => import("@/views/reportManagement/projectCommissionCheckReport/List.vue"),
        name: "ProjectCommissionCheckReport",
        meta: {
          title: "项目提成核对报表",
          icon: "menu"
        }
      },
      {
        path: "salaryStatistics",
        component: () => import("@/views/reportManagement/salaryStatistics/List.vue"),
        name: "SalaryStatistics",
        meta: {
          title: "工资统计",
          icon: "menu"
        }
      },
      {
        path: "businessChart",
        component: () => import("@/views/reportManagement/businessChart/index.vue"),
        name: "BusinessChart",
        meta: {
          title: "业务图表",
          icon: "menu"
        }
      },
      {
        path: "miniProgramReport",
        component: () => import("@/views/reportManagement/miniProgramReport/index.vue"),
        name: "MiniProgramReport",
        meta: {
          title: "小程序报表",
          icon: "menu"
        }
      },
      {
        path: "membershipCardSettlementReport",
        component: () => import("@/views/reportManagement/membershipCardSettlementReport/index.vue"),
        name: "MembershipCardSettlementReport",
        meta: {
          title: "他店会员卡结算表",
          icon: "menu"
        }
      },
      {
        path: "membershipCardDetailReport",
        component: () => import("@/views/reportManagement/membershipCardDetailReport/List.vue"),
        name: "MembershipCardDetailReport",
        meta: {
          title: "他店会员卡明细",
          icon: "menu"
        }
      }
    ]
  },
  {
    path: "/storeConfiguration",
    component: Layout,
    name: "StoreConfiguration",
    meta: {
      title: "店面配置",
      icon: "menu"
    },
    children: [
      {
        path: "departmentManagement",
        component: () => import("@/views/storeConfiguration/departmentManagement/List.vue"),
        name: "DepartmentManagement",
        meta: {
          title: "部门管理",
          icon: "menu"
        }
      },
      {
        path: "boxManagement",
        component: () => import("@/views/storeConfiguration/boxManagement/List.vue"),
        name: "BoxManagement",
        meta: {
          title: "包厢管理",
          icon: "menu"
        }
      },
      {
        path: "paymentPlan",
        component: () => import("@/views/storeConfiguration/paymentPlan/List.vue"),
        name: "PaymentPlan",
        meta: {
          title: "支付折扣方案",
          icon: "menu"
        }
      },
      {
        path: "paymentMethod",
        component: () => import("@/views/storeConfiguration/paymentMethod/List.vue"),
        name: "PaymentMethod",
        meta: {
          title: "支付方式",
          icon: "menu"
        }
      },
      {
        path: "goodsTypeManagement",
        component: () => import("@/views/storeConfiguration/goodsTypeManagement/List.vue"),
        name: "GoodsTypeManagement",
        meta: {
          title: "商品类型管理",
          icon: "menu"
        }
      },
      {
        path: "goodsManagement",
        component: () => import("@/views/storeConfiguration/goodsManagement/List.vue"),
        name: "goodsManagement",
        meta: {
          title: "商品管理",
          icon: "menu"
        }
      },
      {
        path: "serviceTypeManagement",
        component: () => import("@/views/storeConfiguration/serviceTypeManagement/List.vue"),
        name: "ServiceTypeManagement",
        meta: {
          title: "服务类型管理",
          icon: "menu"
        }
      },
      {
        path: "projectManagement",
        component: () => import("@/views/storeConfiguration/projectManagement/List.vue"),
        name: "ProjectManagement",
        meta: {
          title: "项目管理",
          icon: "menu"
        }
      },
      {
        path: "handManagement",
        component: () => import("@/views/storeConfiguration/handManagement/List.vue"),
        name: "HandManagement",
        meta: {
          title: "手牌管理",
          icon: "menu"
        }
      },
      {
        path: "SMSRecharge",
        component: () => import("@/views/storeConfiguration/SMSRecharge/index.vue"),
        name: "SMSRecharge",
        meta: {
          title: "短信充值",
          icon: "menu"
        }
      },
      {
        path: "kitchenPlan",
        component: () => import("@/views/storeConfiguration/kitchenPlan/List.vue"),
        name: "KitchenPlan",
        meta: {
          title: "厨打方案",
          icon: "menu"
        }
      },
      {
        path: "chessRules",
        component: () => import("@/views/storeConfiguration/chessRules/List.vue"),
        name: "ChessRules",
        meta: {
          title: "棋牌计费规则",
          icon: "menu"
        }
      },
      {
        path: "clearData",
        component: () => import("@/views/storeConfiguration/clearData/index.vue"),
        name: "ClearData",
        meta: {
          title: "清除数据",
          icon: "menu"
        }
      },
      {
        path: "packageManagement",
        component: () => import("@/views/storeConfiguration/packageManagement/List.vue"),
        name: "PackageManagement",
        meta: {
          title: "套餐管理",
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
