import{B as e}from"./BaseTable.10ddcea8.js";import{_ as l}from"./BaseDialog.vue_vue_type_style_index_0_lang.3abd6421.js";import{d as a,a as o,r as t,Z as d,a3 as u,o as s,b as n,f as m,e as r,w as i,u as p,F as c,y as f,i as b,D as _,G as v,_ as V}from"./index.a082be67.js";const y={pageNum:1,pageSize:20},g=a("useGoodsManagement",{state:()=>({list:[],listTotal:0,formModel:{},queryParams:{...y}}),getters:{},actions:{async getListAction(e={}){this.queryParams={...this.queryParams,...e}},async createAction(e={}){}}}),h=e=>(_("data-v-c341a33e"),e=e(),v(),e),M={class:"table-box"},k={class:"table-top-box"},w=f("新增"),C=f("查看"),x=h((()=>m("i",{class:"el-icon-minus vhi"},null,-1))),U=f("修改"),z=h((()=>m("i",{class:"el-icon-minus vhi"},null,-1))),q=f("删除"),A=f("选择"),j=V(o({__name:"Tables",setup(a){const o=t(),f=d({dname:[{required:!0,message:"请输入部门名称",trigger:"blur"}],dcode:[{required:!0,message:"请输入部门编码",trigger:"blur"}]}),_=g(),v=t(!1),V=t(!1);t(!1);const y=t(!1),h=t(!1),j=t(!1),L=t(!1),N=t(!1),P=t("0"),Z=async(e,l)=>{"page"===e&&_.getListAction({pageNum:l}),"size"===e&&_.getListAction({pageNum:1,pageSize:l})},F=e=>{switch(e){case 0:v.value=!0;break;case 1:case 2:V.value=!0;break;case 3:y.value=!0;break;case 4:h.value=!0;break;case 5:j.value=!0;break;case 6:L.value=!0;break;case 7:N.value=!0}};u((()=>{_.getListAction()}));const T=[{label:"序号",slot:"number"},{label:"商品名称",prop:"systemName"},{label:"所属部门",prop:"systemCode"},{label:"项目类别",prop:"systemCode"},{label:"门市价（元）",prop:"systemCode"},{label:"可否使用会员卡购买",prop:"systemCode"},{label:"提成（元）",prop:"systemCode"},{label:"顺序",prop:"systemCode"},{label:"操作",slot:"action"}];return(a,t)=>{const d=b("el-button"),u=b("el-input"),y=b("el-form-item"),g=b("el-col"),h=b("el-option"),j=b("el-select"),L=b("el-switch"),N=b("el-row"),B=b("el-form"),O=b("el-tab-pane"),S=b("el-tabs");return s(),n(c,null,[m("div",M,[m("div",k,[r(d,{type:"primary",onClick:t[0]||(t[0]=e=>F(0))},{default:i((()=>[w])),_:1})]),r(e,{columns:T,"table-data":p(_).list,total:p(_).listTotal,"current-page":p(_).queryParams.pageNum,"page-size":p(_).queryParams.pageSize,"handle-change":Z},{action:i((e=>[r(d,{style:{color:"#2c3cd8"},type:"text",onClick:l=>{e.row}},{default:i((()=>[C])),_:2},1032,["onClick"]),x,r(d,{style:{color:"#2c3cd8"},type:"text",onClick:l=>{e.row}},{default:i((()=>[U])),_:2},1032,["onClick"]),z,r(d,{style:{color:"#2c3cd8"},type:"text",onClick:l=>{e.row}},{default:i((()=>[q])),_:2},1032,["onClick"])])),_:1},8,["table-data","total","current-page","page-size"])]),r(l,{modelValue:v.value,"onUpdate:modelValue":t[11]||(t[11]=e=>v.value=e),w:"50%",title:"添加支付方式",onOnCancel:t[12]||(t[12]=e=>{var l;(l=o.value)&&(l.resetFields(),l.clearValidate(),_.formModel={})}),onOnOk:t[13]||(t[13]=e=>{var l;(l=o.value)&&l.validate(((e,l)=>{e&&_.createAction()}))})},{default:i((()=>[r(B,{ref_key:"ruleFormRef",ref:o,model:p(_).formModel,rules:f,"label-width":"120px"},{default:i((()=>[r(N,{gutter:16},{default:i((()=>[r(g,{span:24},{default:i((()=>[r(y,{label:"商品名称"},{default:i((()=>[r(u,{modelValue:p(_).formModel.name,"onUpdate:modelValue":t[1]||(t[1]=e=>p(_).formModel.name=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1})])),_:1}),r(g,{span:24},{default:i((()=>[r(y,{label:"顺序号"},{default:i((()=>[r(u,{modelValue:p(_).formModel.name,"onUpdate:modelValue":t[2]||(t[2]=e=>p(_).formModel.name=e),placeholder:""},null,8,["modelValue"])])),_:1})])),_:1}),r(g,{span:24},{default:i((()=>[r(y,{label:"商品所属部门"},{default:i((()=>[r(j,{style:{width:"100%"},modelValue:p(_).formModel.name,"onUpdate:modelValue":t[3]||(t[3]=e=>p(_).formModel.name=e),placeholder:"请选择"},{default:i((()=>[r(h,{label:"Zone one",value:"shanghai"}),r(h,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),r(g,{span:24},{default:i((()=>[r(y,{label:"商品类型"},{default:i((()=>[r(j,{style:{width:"100%"},modelValue:p(_).formModel.name,"onUpdate:modelValue":t[4]||(t[4]=e=>p(_).formModel.name=e),placeholder:"请选择"},{default:i((()=>[r(h,{label:"Zone one",value:"shanghai"}),r(h,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),r(g,{span:24},{default:i((()=>[r(y,{label:"商品简介"},{default:i((()=>[r(u,{type:"textarea",modelValue:p(_).formModel.name,"onUpdate:modelValue":t[5]||(t[5]=e=>p(_).formModel.name=e),placeholder:""},null,8,["modelValue"])])),_:1})])),_:1}),r(g,{span:24},{default:i((()=>[r(y,{label:"门市价（元）"},{default:i((()=>[r(u,{type:"number",modelValue:p(_).formModel.name,"onUpdate:modelValue":t[6]||(t[6]=e=>p(_).formModel.name=e),placeholder:""},null,8,["modelValue"])])),_:1})])),_:1}),r(g,{span:24},{default:i((()=>[r(y,{label:"提成（元）"},{default:i((()=>[r(u,{type:"number",modelValue:p(_).formModel.name,"onUpdate:modelValue":t[7]||(t[7]=e=>p(_).formModel.name=e),placeholder:""},null,8,["modelValue"])])),_:1})])),_:1}),r(g,{span:24},{default:i((()=>[r(y,{label:"图片选择"},{default:i((()=>[r(d,{type:"primary",onClick:t[8]||(t[8]=e=>F(1))},{default:i((()=>[A])),_:1})])),_:1})])),_:1}),r(g,{span:12},{default:i((()=>[r(y,null,{default:i((()=>[r(L,{modelValue:p(_).formModel.value,"onUpdate:modelValue":t[9]||(t[9]=e=>p(_).formModel.value=e),size:"large","inactive-text":"能否使用会员卡"},null,8,["modelValue"])])),_:1})])),_:1}),r(g,{span:12},{default:i((()=>[r(y,null,{default:i((()=>[r(L,{modelValue:p(_).formModel.value,"onUpdate:modelValue":t[10]||(t[10]=e=>p(_).formModel.value=e),size:"large","inactive-text":"是否在小程序显示"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"]),r(l,{modelValue:V.value,"onUpdate:modelValue":t[15]||(t[15]=e=>V.value=e),w:"50%",title:"图片选择",hideFooter:""},{default:i((()=>[r(N,null,{default:i((()=>[r(g,{span:24},{default:i((()=>[r(S,{modelValue:P.value,"onUpdate:modelValue":t[14]||(t[14]=e=>P.value=e)},{default:i((()=>[r(O,{label:"茶水",name:"0"}),r(O,{label:"饮料",name:"1"}),r(O,{label:"小吃",name:"2"}),r(O,{label:"小项",name:"3"}),r(O,{label:"药水",name:"4"}),r(O,{label:"其它",name:"5"})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-c341a33e"]]),L={class:"view-w"},N=V(o({__name:"List",setup:e=>(e,l)=>(s(),n("div",L,[r(j,{class:"my-table"})]))}),[["__scopeId","data-v-d8d2f9cf"]]);export{N as default};