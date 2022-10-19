import {} from "element-plus"

export interface OptionTypes {
  target?: string //Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点	object/string	—	document.body
  body?: boolean //同 v-loading 指令中的 body 修饰符	boolean	—	false
  fullscreen?: boolean //同 v-loading 指令中的 fullscreen 修饰符	boolean	—	true
  lock?: boolean //同 v-loading 指令中的 lock 修饰符	boolean	—	false
  text?: string //显示在加载图标下方的加载文案	string	—	—
  spinner?: any //自定义加载图标类名	string	—	—
  background?: any //遮罩背景色	string	—	—
  customClass?: string //	Loading 的自定义类名
}

class _Loading {
  // el: any
  // options?: OptionTypes
  // visible: boolean
  // constructor(options: OptionTypes) {
  //   this.options = options
  //   this.visible = false
  // }
  // show() {
  //   if (!this.visible) {
  //     this.el = Loading.service({ background: "rgba(0, 0, 0, 0.2)", ...this.options })
  //     this.visible = true
  //   }
  // }
  // close() {
  //   this.visible = false
  //   this.el.close()
  // }
}

export default _Loading
