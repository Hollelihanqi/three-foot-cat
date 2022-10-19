import { getCurrentInstance, h } from "vue"

const useMessage = () => {
  const internalInstance = getCurrentInstance()
  const $message = internalInstance?.appContext.config.globalProperties.$message
  const $msgbox = internalInstance?.appContext.config.globalProperties.$msgbox
  const open = (msg?: string) => {
    const _msg = msg || "功能正在开发中，尽情期待！"
    $message({
      customClass: "my-messagec",
      iconClass: "yto-icon-warning-outline",
      offset: 260,
      center: true,
      message: h("p", null, [h("span", null, _msg)])
    })
  }
  window._myMessage = open
  window._message = $message
  return {
    Message: $message,
    Msgbox: $msgbox,
    MyMessage: open
  }
}
export default useMessage
