import{a as E,q as j,j as e,r as B,d as _,k as A,T as h,i as P,u as F}from"./index-p62f0BHD.js";const f={url:"https://github.com/magic-akari/lrc-maker",wiki:"https://github.com/magic-akari/lrc-maker/wiki",issues:"https://github.com/magic-akari/lrc-maker/issues"};async function L(){const t="akari-lrc-maker";"serviceWorker"in navigator&&(await caches.keys().then(async l=>Promise.all(l.filter(a=>a.startsWith(t)).map(async a=>caches.delete(a)))),await navigator.serviceWorker.getRegistration().then(l=>{l&&l.unregister().then(()=>{location.reload()})}))}var W=[["en-US","English"],["ja","日本語"],["ko-KR","한국어"],["pt-BR","Português"],["zh-CN","简体中文"],["zh-HK","繁體中文(香港)"],["zh-TW","繁體中文"]],u={hash:"6f66787",updateTime:"2024-01-23T11:27:12+08:00",version:"5.6.10"};const q={type:"number",step:1},g=(t,l)=>{const a=React.useRef(null);React.useEffect(()=>{const n=a.current;if(n){const c=()=>{n.value=t.toString()};return n.addEventListener("change",c),()=>n.removeEventListener("change",c)}},[t]);const o=React.useCallback(n=>{n.target.validity.valid&&l(n)},[l]);return{...q,ref:a,onChange:o,defaultValue:t}},z=W,G=()=>{const{prefState:t,prefDispatch:l,lang:a}=React.useContext(E,j.lang||j.prefState),o=React.useCallback(s=>{l({type:"themeColor",payload:s.target.value})},[l]),n=React.useRef(null),c=React.useCallback(s=>{let r=s.value;if(!s.validity.valid){s.value=s.defaultValue;return}r.length===3&&(r=[].map.call(r,i=>i+i).join("")),r.length<6&&(r=r.padEnd(6,"0")),l({type:"themeColor",payload:"#"+r})},[l]),b=React.useCallback(s=>c(s.target),[c]),C=React.useCallback(s=>{s.preventDefault();const i=s.target.elements.namedItem("user-color-input-text");return c(i)},[c]);React.useEffect(()=>{n.current.value=t.themeColor.slice(1)},[t.themeColor]);const d=React.useCallback(s=>{l({type:s.target.name,payload:s.target.value})},[l]),k=React.useCallback(()=>{L()},[]),N=React.useMemo(()=>{const s=new Date(u.updateTime),r={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short",hour12:!1};return new Intl.DateTimeFormat(t.lang,r).format(s)},[t.lang]),v=React.useCallback(s=>{l({type:"lang",payload:s.target.value})},[l]),y=React.useCallback(()=>l({type:"builtInAudio",payload:s=>!s.builtInAudio}),[l]),R=React.useCallback(()=>l({type:"screenButton",payload:s=>!s.screenButton}),[l]),T=React.useCallback(s=>{l({type:"themeMode",payload:Number.parseInt(s.target.value,10)})},[l]),I=React.useCallback(s=>{l({type:"fixed",payload:Number.parseInt(s.target.value,10)})},[l]),M=React.useMemo(()=>z.map(([s,r])=>e.jsx("option",{value:s,children:r},s)),[]),S=React.useMemo(()=>Object.values(B).map(s=>{const r=s===t.themeColor,i=["color-picker","ripple"];return r&&i.push("checked"),e.jsx("label",{className:i.join(_.space),style:{backgroundColor:s},children:e.jsx("input",{hidden:!0,type:"radio",name:"theme-color",value:s,checked:r,onChange:o})},s)}),[o,t.themeColor]),p=React.useMemo(()=>({backgroundColor:t.themeColor}),[t.themeColor]),w=React.useMemo(()=>A("   hello   世界～   ",t.spaceStart,t.spaceEnd),[t.spaceStart,t.spaceEnd]),m=React.useRef(null),x=React.useRef(null);return React.useEffect(()=>{x.current.type==="color"&&m.current.removeAttribute("for")},[]),e.jsxs("div",{className:"preferences",children:[e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.version}),e.jsx("span",{className:"select-all",children:u.version})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.commitHash}),e.jsx("span",{className:"select-all",children:u.hash})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.updateTime}),e.jsx("span",{children:N})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.repo}),e.jsx("a",{className:"link",href:f.url,target:"_blank",rel:"noopener noreferrer",children:"Github"})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.help}),e.jsx("a",{className:"link",href:f.wiki,target:"_blank",rel:"noopener noreferrer",children:"Github Wiki"})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.language}),e.jsx("div",{className:"option-select",children:e.jsx("select",{value:t.lang,onChange:v,"aria-label":a.preferences.language,children:M})})]})}),e.jsx("li",{children:e.jsxs("label",{className:"list-item",children:[e.jsx("span",{children:a.preferences.builtInAudio}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:t.builtInAudio,onChange:y,"aria-label":a.preferences.builtInAudio}),e.jsx("span",{className:"toggle-switch-label"})]})]})}),e.jsx("li",{children:e.jsxs("label",{className:"list-item",children:[e.jsx("span",{children:a.preferences.spaceButton}),e.jsxs("label",{className:"toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:t.screenButton,onChange:R,"aria-label":a.preferences.spaceButton}),e.jsx("span",{className:"toggle-switch-label"})]})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.themeMode.label}),e.jsx("div",{className:"option-select",children:e.jsxs("select",{name:"theme-mode",value:t.themeMode,onChange:T,"aria-label":a.preferences.themeMode.label,children:[e.jsx("option",{value:h.auto,children:a.preferences.themeMode.auto}),e.jsx("option",{value:h.light,children:a.preferences.themeMode.light}),e.jsx("option",{value:h.dark,children:a.preferences.themeMode.dark})]})})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.themeColor}),e.jsxs("details",{className:"dropdown",children:[e.jsxs("summary",{children:[e.jsx("span",{className:"color-picker ripple hash",style:p,children:"#"}),e.jsx("span",{className:"current-theme-color",children:t.themeColor.slice(1)})]}),e.jsxs("form",{className:"dropdown-body color-wall",onSubmit:C,children:[S,e.jsxs("label",{className:"color-picker ripple user-color-label hash",htmlFor:"user-color-input-text",style:p,ref:m,children:["#",e.jsx("input",{type:"color",className:"color-picker pseudo-hidden",value:t.themeColor,onChange:o,ref:x})]}),e.jsx("input",{ref:n,id:"user-color-input-text",name:"user-color-input-text",className:"user-color-input-text",type:"text",pattern:"[\\da-f]{3,6}",required:!0,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",spellCheck:!1,defaultValue:t.themeColor.slice(1),onBlur:b})]})]})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.lrcFormat}),e.jsxs("span",{children:[e.jsx("time",{className:"format-example-time",children:P(83.456,t.fixed)}),e.jsx("span",{className:"format-example-text",children:w})]})]})}),e.jsx("li",{children:e.jsxs("section",{className:"list-item",children:[e.jsx("span",{children:a.preferences.fixed}),e.jsx("div",{className:"option-select",children:e.jsxs("select",{name:"fixed",value:t.fixed,onChange:I,"aria-label":a.preferences.lrcFormat,children:[e.jsx("option",{value:0,children:"0"}),e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"})]})})]})}),e.jsx("li",{children:e.jsxs("label",{className:"list-item",children:[e.jsx("label",{htmlFor:"space-start",children:a.preferences.leftSpace}),e.jsx("input",{name:"spaceStart",id:"space-start",required:!0,min:-1,...g(t.spaceStart,d)})]})}),e.jsx("li",{children:e.jsxs("label",{className:"list-item",children:[e.jsx("label",{htmlFor:"space-end",children:a.preferences.rightSpace}),e.jsx("input",{name:"spaceEnd",id:"space-end",required:!0,min:-1,...g(t.spaceEnd,d)})]})}),e.jsx("li",{className:"ripple",onTransitionEnd:k,children:e.jsx("section",{className:"list-item",children:a.preferences.clearCache})})]}),e.jsx(F,{})]})};export{G as Preferences};
