var i=Object.defineProperty;var f=(a,e,r)=>e in a?i(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var n=(a,e,r)=>(f(a,typeof e!="symbol"?e+"":e,r),r);import{m as _,C as p,R as u,e as v}from"./index-6f2994c0.js";import{C as I}from"./camera-b367b9fe.js";var h=Object.defineProperty,C=Object.getOwnPropertyDescriptor,o=(a,e,r,s)=>{for(var t=s>1?void 0:s?C(e,r):e,c=a.length-1,l;c>=0;c--)(l=a[c])&&(t=(s?l(e,r,t):l(t))||t);return s&&t&&h(e,r,t),t};let m=class extends _(I){constructor(){super(...arguments);n(this,"cameraIframe");n(this,"cameraIFrameSource","")}startPlayback(){const r=this.buildAbsoluteUrl(this.camera.urlStream||"").toString();this.cameraIFrameSource=r,this.$emit("raw-camera-url",r)}stopPlayback(){this.cameraIFrameSource="",this.cameraIframe.src=""}};o([u("streamingElement")],m.prototype,"cameraIframe",2);m=o([p({})],m);var S=function(){var e=this,r=e._self._c;return e._self._setupProxy,r("iframe",{ref:"streamingElement",staticStyle:{border:"none",width:"100%"},style:{"aspect-ratio":(e.camera.aspectRatio||"16:9").replace(":","/"),...e.cameraStyle},attrs:{src:e.cameraIFrameSource}})},b=[],y=v(m,S,b,!1,null,null,null,null);const w=y.exports;export{w as default};
