import{a as t,a5 as e,S as l,_ as a,i as s,o as p,g as o,w as i,Y as r,B as u,a6 as n,b as d,l as y,F as c,H as f}from"./index.a082be67.js";const h=t({props:{label:{type:String,default:""},name:{type:String,default:""},formModel:{type:Object,default:()=>{}},type:{type:String,default:"input"},prop:{type:String,default:""},h:{type:String,default:""},w:{type:String,default:"220px"},options:{type:Array,default:()=>[]}},setup:(t,l)=>({slotDefault:!!e().default}),data:()=>({styles:{height:"32px",width:"220px"}}),created(){this.h&&(this.styles.height=this.h),this.w&&(this.styles.width=this.w)}}),b=()=>{l((t=>({"4b09cc1b":t.styles.width,"073e851c":t.styles.height})))},g=h.setup;h.setup=g?(t,e)=>(b(),g(t,e)):b;const m=a(h,[["render",function(t,e,l,a,h,b){const g=s("el-input"),m=s("el-option"),w=s("el-select"),v=s("el-switch"),x=s("el-form-item");return p(),o(x,r({label:t.label,class:"my-form-item",prop:t.prop},t.$attrs),{default:i((()=>["input"!==t.type||t.slotDefault?u("",!0):(p(),o(g,r({key:0,placeholder:"请输入内容",clearable:""},t.$attrs),null,16)),"select"!==t.type||t.slotDefault?u("",!0):(p(),o(w,n(r({key:1},t.$attrs)),{default:i((()=>[(p(!0),d(c,null,y(t.options,((t,e)=>(p(),o(m,{key:e,label:t.label,value:t.value},null,8,["label","value"])))),128))])),_:1},16)),"textarea"!==t.type||t.slotDefault?u("",!0):(p(),o(g,r({key:2,type:"textarea",resize:"none",placeholder:"请输入"},t.$attrs),null,16)),"switch"!==t.type||t.slotDefault?u("",!0):(p(),o(v,r({key:3,"active-color":"#2c3cd8"},t.$attrs),null,16)),f(t.$slots,"autocomplete",{},void 0,!0),f(t.$slots,"default",{},void 0,!0)])),_:3},16,["label","prop"])}],["__scopeId","data-v-4cc04f52"]]);export{m as B};
