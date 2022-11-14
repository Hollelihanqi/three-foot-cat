import { defineStore } from "pinia"
import {} from "@/api"
interface ParamsType {
  [propName: string]: any
}
const defaultParams: ParamsType = {
  pageNum: 1,
  pageSize: 20
}

export const useActivitiyManagementStore = defineStore("useActivitiyManagement", {
  state: () => {
    return {
      list: [],
      listTotal: 0,
      formModel: {} as ParamsType,
      queryParams: {
        ...defaultParams
      }
    }
  },
  getters: {},
  actions: {
    async getListAction(params = {}) {
      this.queryParams = {
        ...this.queryParams,
        ...params
      }
    },
    async createAction(params = {}) {}
  }
})
