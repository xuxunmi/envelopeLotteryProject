import{d as e,j as a,r as s,n as t,k as l,l as o,q as n,M as r,v as p,N as u,m as c,o as d,O as i,I as m}from"./.pnpm-DkWEpwye.js";import{_ as v}from"./_plugin-vue_export-helper-BCo6x5W8.js";const h={class:"app-container"},_={class:"report-container"},f={class:"tips-wrapper"},V={class:"footer"},y=v(e({name:"monthlyCollarActivityReport",__name:"report",setup(e){const v=a(),y=c(),b=v.query.userPhone;v.query,s(!1);const g=s(),k=/^1[34578]\d{9}$/,q=t({phoneValue:b,content:""}),x=e=>{},j=()=>{y.go(-1)};return(e,a)=>{const s=r,t=m,c=i,v=u;return d(),l("div",h,[o("div",_,[o("div",f,[a[3]||(a[3]=o("div",{class:"tips-txt"},[o("span",null,"请注意留下可联系号码，方便我们联系")],-1)),o("div",{class:"icon",onClick:j},[n(s,{name:"cross"})])]),n(v,{ref_key:"reportFrom",ref:g,onFailed:x},{default:p((()=>[n(c,{inset:""},{default:p((()=>[n(t,{modelValue:q.phoneValue,"onUpdate:modelValue":a[0]||(a[0]=e=>q.phoneValue=e),name:"patternPhone",placeholder:"请填写手机号",rules:[{pattern:k,message:"手机号格式不正确！"}],label:"联系号码："},null,8,["modelValue","rules"]),n(t,{name:"content",rules:[{required:!0,message:"请填写投诉内容！"}],label:"投诉内容："},{input:p((()=>[n(t,{modelValue:q.content,"onUpdate:modelValue":a[1]||(a[1]=e=>q.content=e),class:"custom-field",name:"content",rows:"3",autosize:"",type:"textarea",border:"",placeholder:"请填写投诉内容"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},512),o("div",V,[o("div",{class:"sumbit-btn",onClick:a[2]||(a[2]=e=>{g.value.validate().then((()=>{})).catch((()=>{}))})},"提交")])])])}}}),[["__scopeId","data-v-2e558406"]]);export{y as default};
