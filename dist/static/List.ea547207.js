import{B as a}from"./BaseTable.10ddcea8.js";import{u as e}from"./useMemberList.593f9597.js";import{a as l,a3 as s,o as t,b as o,f as r,e as n,w as m,u as d,y as p,i as u,D as b,G as i,_ as c,Z as y,r as f,k as _,g as C}from"./index.a082be67.js";import{B as v}from"./BaseFilterBox.c57d6a05.js";import{B}from"./BaseFormItem.38f65bc2.js";const g=a=>(b("data-v-50b06379"),a=a(),i(),a),k={class:"table-box"},x={class:"table-top-box"},P=p("交接并打印"),j=g((()=>r("div",null,[r("span",null,"开始时间："),r("span",null,"2022-10-26 00:00"),r("span",null,"结束时间："),r("span",null,"2022-10-26 00:00"),r("span",null,"操作人员："),r("span",null,"15990311521")],-1))),q=c(l({__name:"Tables",setup(l){const p=e(),b=()=>{};s((()=>{p.getListAction()}));const i=[{label:"结账笔数",slot:"number"},{label:"项目钟数",prop:"systemName"},{label:"总计",prop:"systemCode"},{label:"营业额",prop:"name"},{label:"资金收入",prop:"code"},{label:"待收金额",prop:"url"}],c=[{label:"服务",slot:"number"},{label:"数量",prop:"systemName"},{label:"金额¥",prop:"systemCode"}],y=[{label:"商品",slot:"number"},{label:"数量",prop:"systemName"},{label:"金额¥",prop:"systemCode"}],f=[{label:"收款方式",slot:"number"},{label:"金额¥",prop:"systemName"},{label:"占比",prop:"systemCode"}],_=[{label:"充卡信息",slot:"number"},{label:"金额",prop:"systemName"}];return(e,l)=>{const s=u("el-button");return t(),o("div",k,[r("div",x,[n(s,{type:"primary",onClick:b},{default:m((()=>[P])),_:1})]),n(a,{columns:i,"table-data":d(p).list},{header:m((()=>[j])),_:1},8,["table-data"]),n(a,{columns:c,"table-data":d(p).list},null,8,["table-data"]),n(a,{columns:y,"table-data":d(p).list},null,8,["table-data"]),n(a,{columns:f,"table-data":d(p).list},null,8,["table-data"]),n(a,{columns:_,"table-data":d(p).list},null,8,["table-data"])])}}}),[["__scopeId","data-v-50b06379"]]),I={class:"action-btn"},N=p("重置"),h=p("查询"),w=c(l({__name:"Filter",setup(a){const l=e(),s=y({applicationCode:""}),o=f(null),p=()=>{l.getListAction()},b=()=>{l.setQueryParamsAction({action:"reset"})};return _((()=>l.queryParams.applicationCode),(a=>{l.queryParams.moduleCode="",s.applicationCode=a})),(a,e)=>{const s=u("el-date-picker"),i=u("el-form"),c=u("el-button");return t(),C(v,null,{default:m((()=>[n(i,{class:"filter-form",ref_key:"formInstance",ref:o,inline:"",model:d(l).queryParams,"label-width":"80px","inline-message":""},{default:m((()=>[n(B,{label:"日期选择"},{default:m((()=>[n(s,{modelValue:d(l).queryParams.dateTime,"onUpdate:modelValue":e[0]||(e[0]=a=>d(l).queryParams.dateTime=a),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"]),r("div",I,[n(c,{onClick:b},{default:m((()=>[N])),_:1}),n(c,{type:"primary",onClick:p},{default:m((()=>[h])),_:1})])])),_:1})}}}),[["__scopeId","data-v-3dbf476d"]]),L={class:"view-w"},T=c(l({__name:"List",setup:a=>(a,e)=>(t(),o("div",L,[n(w),n(q,{class:"my-table"})]))}),[["__scopeId","data-v-52c61ebe"]]);export{T as default};
