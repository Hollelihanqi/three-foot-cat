import{a as e,_ as a,o as t,b as n,e as l,w as o,F as i,l as d,Y as s,g as r,J as p,B as u,i as g,H as h}from"./index.a082be67.js";const y=a(e({directives:{loading:{mounted(e){e.querySelector(".el-table__empty-text")}},hoverTip:{mounted(e){}}},props:{data:{type:Array,default:()=>[],required:!0},columns:{type:Array,default:()=>[],required:!0},paginationHide:{type:Boolean,default:!1},paginationFixed:{type:Boolean,default:!1},total:{type:Number,default:0},pageSizes:{type:Array,default:()=>[10,20,50,100]},pageSize:{type:Number,default:20},currentPage:{type:Number,default:1},handleChange:{type:Function,default:null}},setup:e=>({handleTableChange:a=>{e.handleChange&&"function"==typeof e.handleChange&&e.handleChange("page",a)},handleSizeChange:a=>{e.handleChange&&"function"==typeof e.handleChange&&e.handleChange("size",a)}})}),[["render",function(e,a,y,c,f,C){const b=g("el-table-column"),m=g("el-table"),x=g("el-pagination");return t(),n("div",{class:p(["table-w",e.paginationFixed?"table-bt60":""])},[l(m,s({data:e.data,style:{width:"100%"},class:"my-table","header-cell-class-name":"my-header-cell"},e.$attrs),{default:o((()=>[(t(!0),n(i,null,d(e.columns,((a,l)=>(t(),n(i,{key:l},[a.slot||a.hideCell?u("",!0):(t(),r(b,s({key:0,"show-overflow-tooltip":""},a),null,16)),a.slot&&!a.hideCell?(t(),r(b,s({key:1,"show-overflow-tooltip":""},a),{default:o((t=>[h(e.$slots,a.slot,{index:t.$index,row:t.row},void 0,!0)])),_:2},1040)):u("",!0)],64)))),128))])),_:3},16,["data"]),e.paginationHide?u("",!0):(t(),r(x,{key:0,class:p(["my-pagination",e.paginationFixed?"pagination-box-fixed":""]),layout:"total, sizes, prev, pager, next, jumper",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onSizeChange:e.handleSizeChange,onCurrentChange:e.handleTableChange},null,8,["class","total","page-size","current-page","onSizeChange","onCurrentChange"]))],2)}],["__scopeId","data-v-c2594dbb"]]);export{y as B};