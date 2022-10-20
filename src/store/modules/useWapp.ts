import { defineStore } from "pinia"
import {} from "@/api"
// import { requestPromise } from "@/utils/request";
// import { MODULE_TYPES } from "@/common/constants";
interface ParamsType {
  [propName: string]: any
}
const defaultParams: ParamsType = {
  pageNum: 1,
  pageSize: 20
}
const _messageObj: any = {
  delete: "删除成功！",
  put: "修改成功！",
  post: "新增成功！"
}
export const useWappStore = defineStore("useWapp", {
  state: () => {
    return {
      list: [],
      listTotal: 0,
      action: "view",
      moduleDetails: {},
      queryParams: {
        ...defaultParams
      }
    }
  },
  getters: {},
  actions: {
    async getListAction(params = {}) {},
    setQueryParamsAction(params: any) {
      const { action = "view", ...others } = params
      this.action = action
      if (action === "view") {
        // 携带新参数进行查询
        this.queryParams = {
          ...this.queryParams,
          ...others
        }
      } else {
        // 点击重置默认参数
        this.queryParams = {
          ...defaultParams,
          ...others
        }
      }
      this.getListAction()
    }
  }
})
