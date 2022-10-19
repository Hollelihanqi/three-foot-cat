import { reactive } from "vue"
import { useRouter } from "vue-router"

const useRouteQuery = () => {
  const router = useRouter()
  const routeQuery: any = reactive({})
  const route: any = router.currentRoute.value
  const updateQuery = () => {
    let query: any = window.sessionStorage.getItem(route.meta.key)
    query = JSON.parse(query)
    Object.assign(routeQuery, query)
  }
  updateQuery()
  return {
    routeQuery,
    route,
    updateQuery,
    router
  }
}

export default useRouteQuery
