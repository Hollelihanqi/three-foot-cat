import { defineStore } from "pinia"
import { methods } from "@/api"
import { service } from "@/utils/service"
interface ParamsType {
  [propName: string]: any
}
const defaultParams: ParamsType = {
  pageNum: 1,
  pageSize: 10
}
export const useReserveManagementStore = defineStore("useReserveManagement", {
  state: () => {
    return {
      list: [],
      listTotal: 0,
      details: {},
      action: "view",
      queryParams: {
        ...defaultParams
      }
    }
  },
  getters: {},
  actions: {
    async getListAction(params = {}) {},
    async getDetailsAction(params = {}) {},
    async handleMenuAction(params = {}, data = {}, methodType: methods) {},
    setQueryParamsAction(params: any) {
      const { action = "view", ...others } = params
      this.action = action
      if (action === "view") {
        this.queryParams = {
          ...this.queryParams,
          ...others
        }
      } else {
        this.queryParams = {
          ...defaultParams,
          ...others
        }
      }
      this.getListAction()
    }
  }
})
