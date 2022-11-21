import{B as e}from"./BaseTable.10ddcea8.js";import{_ as a}from"./BaseDialog.vue_vue_type_style_index_0_lang.3abd6421.js";import{d as l,a as t,r as o,Z as s,a3 as d,o as r,b as u,f as n,e as m,w as i,u as c,F as p,y as b,i as f,_ as g}from"./index.a082be67.js";const _={pageNum:1,pageSize:20},v=l("packageManagement",{state:()=>({list:[],listTotal:0,formModel:{},queryParams:{..._}}),getters:{},actions:{async getListAction(e={}){this.queryParams={...this.queryParams,...e}},async createAction(e={}){}}}),y={class:"table-box"},h={class:"table-top-box"},V=b("新增"),k=b("收银或充卡时隐藏"),w=g(t({__name:"Tables",setup(l){const t=o(),b=s({dname:[{required:!0,message:"请输入部门名称",trigger:"blur"}],dcode:[{required:!0,message:"请输入部门编码",trigger:"blur"}]}),g=v(),_=o(!1),w=o(!1);o(!1);const M=o(!1),q=o(!1),x=o(!1),z=o(!1),A=o(!1),j=async(e,a)=>{"page"===e&&g.getListAction({pageNum:a}),"size"===e&&g.getListAction({pageNum:1,pageSize:a})};d((()=>{g.getListAction()}));const C=[{label:"序号",slot:"number"},{label:"套餐名称",prop:"systemName"},{label:"套餐内项目和商品",prop:"systemCode"},{label:"价格",prop:"name"},{label:"操作",slot:"action"}];return(l,o)=>{const s=f("el-button"),d=f("el-input"),v=f("el-form-item"),L=f("el-col"),N=f("el-option"),P=f("el-select"),U=f("el-row"),Z=f("el-form");return r(),u(p,null,[n("div",y,[n("div",h,[m(s,{type:"primary",onClick:o[0]||(o[0]=e=>(e=>{switch(e){case 0:_.value=!0;break;case 1:case 2:w.value=!0;break;case 3:M.value=!0;break;case 4:q.value=!0;break;case 5:x.value=!0;break;case 6:z.value=!0;break;case 7:A.value=!0}})(0))},{default:i((()=>[V])),_:1})]),m(e,{columns:C,"table-data":c(g).list,total:c(g).listTotal,"current-page":c(g).queryParams.pageNum,"page-size":c(g).queryParams.pageSize,"handle-change":j},{action:i((e=>[m(s,{style:{color:"#2c3cd8"},type:"text",onClick:a=>{e.row}},{default:i((()=>[k])),_:2},1032,["onClick"])])),_:1},8,["table-data","total","current-page","page-size"])]),m(a,{modelValue:_.value,"onUpdate:modelValue":o[5]||(o[5]=e=>_.value=e),w:"50%",title:"新增",onOnCancel:o[6]||(o[6]=e=>{var a;(a=t.value)&&(a.resetFields(),a.clearValidate(),g.formModel={})}),onOnOk:o[7]||(o[7]=e=>{var a;(a=t.value)&&a.validate(((e,a)=>{e&&g.createAction()}))})},{default:i((()=>[m(Z,{ref_key:"ruleFormRef",ref:t,model:c(g).formModel,rules:b,"label-width":"100px"},{default:i((()=>[m(U,{gutter:16},{default:i((()=>[m(L,{span:24},{default:i((()=>[m(v,{label:"套餐总价"},{default:i((()=>[m(d,{modelValue:c(g).formModel.name,"onUpdate:modelValue":o[1]||(o[1]=e=>c(g).formModel.name=e),placeholder:"请输入名称"},null,8,["modelValue"])])),_:1})])),_:1}),m(L,{span:24},{default:i((()=>[m(v,{label:"套餐名称"},{default:i((()=>[m(d,{modelValue:c(g).formModel.name,"onUpdate:modelValue":o[2]||(o[2]=e=>c(g).formModel.name=e),placeholder:""},null,8,["modelValue"])])),_:1})])),_:1}),m(L,{span:24},{default:i((()=>[m(v,{label:"套餐主项目"},{default:i((()=>[m(P,{style:{width:"100%"},modelValue:c(g).formModel.name,"onUpdate:modelValue":o[3]||(o[3]=e=>c(g).formModel.name=e),placeholder:"请选择"},{default:i((()=>[m(N,{label:"Zone one",value:"shanghai"}),m(N,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),m(L,{span:24},{default:i((()=>[m(v,{label:"选择套餐商品"},{default:i((()=>[m(P,{style:{width:"100%"},modelValue:c(g).formModel.name,"onUpdate:modelValue":o[4]||(o[4]=e=>c(g).formModel.name=e),placeholder:"请选择"},{default:i((()=>[m(N,{label:"Zone one",value:"shanghai"}),m(N,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-6611ece6"]]),M={class:"view-w"},q=g(t({__name:"List",setup:e=>(e,a)=>(r(),u("div",M,[m(w,{class:"my-table"})]))}),[["__scopeId","data-v-df5ef6b7"]]);export{q as default};