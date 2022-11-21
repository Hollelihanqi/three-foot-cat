import{B as e}from"./BaseTable.10ddcea8.js";import{d as a,a as t,a3 as l,o as s,b as o,e as r,u as i,_ as n,Z as c,r as p,k as m,g as u,w as d,f as y,y as b,i as g}from"./index.a082be67.js";import{B as f}from"./BaseFilterBox.c57d6a05.js";import{B as _}from"./BaseFormItem.38f65bc2.js";const P={pageNum:1,pageSize:20},h=a("useWapp",{state:()=>({list:[],listTotal:0,action:"view",moduleDetails:{},queryParams:{...P}}),getters:{},actions:{async getListAction(e={}){},setQueryParamsAction(e){const{action:a="view",...t}=e;this.action=a,this.queryParams="view"===a?{...this.queryParams,...t}:{...P,...t},this.getListAction()}}}),q={class:"table-box"},v=n(t({__name:"Tables",setup(a){const t=h(),n=async(e,a)=>{"page"===e&&t.setQueryParamsAction({pageNum:a}),"size"===e&&t.setQueryParamsAction({pageNum:1,pageSize:a})};l((()=>{t.getListAction()}));const c=[{label:"ID",prop:"id",width:60},{label:"客户",prop:"systemName"},{label:"人数",prop:"systemCode"},{label:"到店时间",prop:"name"},{label:"技术",prop:"code"},{label:"房间",prop:"url"},{label:"服务项目",prop:"category"},{label:"折后价",className:"caller-cell",slot:"callerCount"},{label:"门市价",prop:"actionCount",className:"service-api-cell",slot:"actionCount"},{label:"支付类型",className:"host-cell",slot:"hostCount"},{label:"类型",prop:"category"},{label:"状态",prop:"category"}];return(a,l)=>(s(),o("div",q,[r(e,{columns:c,"table-data":i(t).list,total:i(t).listTotal,"current-page":i(t).queryParams.pageNum,"page-size":i(t).queryParams.pageSize,"handle-change":n},null,8,["table-data","total","current-page","page-size"])]))}}),[["__scopeId","data-v-f5531ce1"]]),w={class:"action-btn"},C=b("重置"),A=b("查询"),N=n(t({__name:"Filter",setup(e){const a=h(),t=c({applicationCode:""}),l=p(null),o=()=>{a.getListAction()},n=()=>{a.setQueryParamsAction({action:"reset"})};return m((()=>a.queryParams.applicationCode),(e=>{a.queryParams.moduleCode="",t.applicationCode=e})),(e,t)=>{const c=g("el-date-picker"),p=g("el-form"),m=g("el-button");return s(),u(f,null,{default:d((()=>[r(p,{class:"filter-form",ref_key:"formInstance",ref:l,inline:"",model:i(a).queryParams,"label-width":"80px","inline-message":""},{default:d((()=>[r(_,{w:"120px",modelValue:i(a).queryParams.keyword,"onUpdate:modelValue":t[0]||(t[0]=e=>i(a).queryParams.keyword=e),placeholder:"技师编号/包厢号"},null,8,["modelValue"]),r(_,null,{default:d((()=>[r(c,{modelValue:i(a).queryParams.dateTime,"onUpdate:modelValue":t[1]||(t[1]=e=>i(a).queryParams.dateTime=e),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),y("div",w,[r(m,{onClick:n},{default:d((()=>[C])),_:1}),r(m,{type:"primary",onClick:o},{default:d((()=>[A])),_:1})])])),_:1})}}}),[["__scopeId","data-v-59d09e1a"]]),k={class:"view-w"},B=n(t({__name:"List",setup:e=>(e,a)=>(s(),o("div",k,[r(N),r(v,{class:"my-table"})]))}),[["__scopeId","data-v-b449caef"]]);export{B as default};