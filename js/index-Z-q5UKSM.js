import{g as a,k as e,l as t,w as A,h as l,i,m as r,n as p,j as s,u as o,o as d}from"./.pnpm-79h0qVAE.js";import{l as c}from"./index-CcLY5nUa.js";import{_ as g}from"./index-XULkqXqj.js";const n=""+new URL("../webp/bg-image1-BSYo47_r.webp",import.meta.url).href,m=""+new URL("../webp/open-Bwvjgf-m.webp",import.meta.url).href,v=""+new URL("../webp/finger-click-pXqcjgvl.webp",import.meta.url).href,B={class:"app-container"},b=g(a({name:"highestSmokeRedEnvelope",__name:"index",setup(a){const g=s(),b=o(),u=b.query.channel_key,w=b.query.qcjParamStr?b.query.qcjParamStr:"",f=b.query.a_old?b.query.a_old:"",k=e({channel_key:"",channel_number:"",uuid:""});b.query,localStorage.setItem("qcjParamsStr",w),localStorage.setItem("a_old",f);(async()=>{try{const a={channel_key:u},{data:e}=await c(a);Object.assign(k,e),G()}catch(a){}})();const Q=t(),Y=t(!1),E=()=>{Y.value=!0,clearTimeout(Q.value)},C=()=>{Y.value=!1,G()},h=()=>{window.open("https://tuia.qiyukf.com/client?k=895e029b6bd533c9e14a2706b28bd3be&wp=1&robotShuntSwitch=1&robotId=127637&gid=397581826","_self")},y=()=>{const a=document.querySelector(".finger-click");console.dir(a),a&&(a.style.transform="rotate(-15deg)",a.style.transition="transform 0.3s linear",setTimeout((()=>{g.push({path:"/watchdramaSmokeRedEnvelope",query:{uuid:k.uuid,channel_key:k.channel_key,a_old:f}})}),500))};clearTimeout(Q.value);const G=()=>{Q.value&&clearTimeout(Q.value),Q.value=setTimeout((()=>{const a=document.querySelector(".finger-click");console.dir(a),a&&(a.style.transform="rotate(-15deg)",a.style.transition="transform 0.3s linear",setTimeout((()=>{g.push({path:"/watchdramaSmokeRedEnvelope",query:{uuid:k.uuid,channel_key:k.channel_key,a_old:f}})}),500))}),100)};return A((()=>b.path),(a=>{"/smokeRedEnvelope"===a&&clearTimeout(Q.value)}),{immediate:!0}),(a,e)=>(d(),l("div",B,[i("div",{class:"app-container__bg relative"},[e[1]||(e[1]=i("img",{class:"red-envelope relative",src:n,alt:""},null,-1)),i("div",{class:"open-wrapper",onClick:y},e[0]||(e[0]=[i("img",{src:m,alt:""},null,-1)])),e[2]||(e[2]=i("div",{class:"finger-wrapper"},[i("img",{class:"finger-click",src:v,alt:""})],-1))]),i("div",{class:"right-fixed1-chunk",onClick:E},e[3]||(e[3]=[i("img",{class:"rule",src:"data:image/webp;base64,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",alt:""},null,-1)])),i("div",{class:"right-fixed2-chunk",onClick:h},e[4]||(e[4]=[i("img",{class:"customer-service",src:"data:image/webp;base64,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",alt:""},null,-1)])),e[6]||(e[6]=i("div",{class:"record-description-wrapper"},[i("div",{class:"record1"},"沈阳达信网络科技有限公司"),i("div",{class:"record2"}),i("div",{class:"record3"},"辽ICP备2023010590号")],-1)),Y.value?(d(),l("div",{key:0,class:"rule-description-wrapper",onClick:C},e[5]||(e[5]=[r('<div class="rule-content-wrapper" data-v-3e9b3faa><p data-v-3e9b3faa>一、活动时间</p><p data-v-3e9b3faa>即日起至 2024 年 12 月 31 日。</p><p data-v-3e9b3faa>二、活动说明</p><p data-v-3e9b3faa>1、凡在本公司H5网站中，付费购买微短剧的用户，均可在付费后的结果页上观看9部微短剧剧集；</p><p data-v-3e9b3faa> 2、凡在本公司H5网站中，付费购买微短剧的用户，均限时免费赠送一次幸运大转盘活动的参加机会，用户可自主自愿选择参加或不参加； </p><p data-v-3e9b3faa> 3、若用户选择参加本次幸运大转盘活动，则用户需赞同本次活动规则，否则视为无效参加，即视为用户未参加本次活动，无法获得任意惊喜（奖品）； </p><p data-v-3e9b3faa>4、用户参加幸运大转盘活动的入口在购买微短剧后的结果页网站中。</p><p data-v-3e9b3faa>三、活动规则</p><p data-v-3e9b3faa>1. 如用户自愿免费参加一次幸运大转盘的活动，有机会获得以下奖品：</p><p data-v-3e9b3faa>【奖品及中奖概率说明】</p><p data-v-3e9b3faa>惊喜一：88元至2888元不等的现金红包,整场活动的中奖概率不低于1/99999；</p><p data-v-3e9b3faa> 惊喜二：0.01元至80元不等的拼多多购物抵扣券，用户可在购买拼多多平台的部分商品时进行抵扣使用，可抵扣的商品及金额由拼多多平台自行决定，与本公司无关。整场活动的中奖概率接近99998/99999； </p><p data-v-3e9b3faa> 2. 用户参加幸运大转盘活动后，抽中现金红包的用户可在直接弹出的页面进行领取（特别说明：抽中现金红包的用户，需自主填写正确的手机号码或联系客服人员进行领取）。用户提交后，由本公司统一核验真实性，本公司将在核验真实性后的12个月内，为属实抽中惊喜一的用户，完成奖品发放。抽中惊喜二（拼多多购物抵扣券）的用户，可在页面直接跳转，领取拼多多购物抵扣券，进入拼多多平台中使用。 </p><p data-v-3e9b3faa> 3. 本次活动为用户自愿参与，用户在幸运大转盘活动中获得奖品后，如退出活动页面，可能导致奖品丢失，无法领取，因此请在获得奖品后及时进行领取，避免损失。若因用户自主退出等原因，导致奖品丢失或无法领取等情况的发生，与本公司无关； </p><p data-v-3e9b3faa> 四、参加活动用户的使用设备不同，参与步骤可能存在不同，参与活动的具体操作步骤，请以进入活动页面时的页面实时展示为准。 </p><p data-v-3e9b3faa>五、本次活动在活动期限内真实有效。</p><p data-v-3e9b3faa> 六、本次幸运大转盘活动为概率性事件，秉持公正公开的原则，禁止任何作弊行为，本次活动的最终解释权归本公司所有。 </p></div><div class="rule-record-wrapper" data-v-3e9b3faa>辽ICP备2023010590号</div>',2)]))):p("",!0)]))}}),[["__scopeId","data-v-3e9b3faa"]]);export{b as default};
