const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DhVkkq1M.js","./DyoQ9Z0p.js","./entry.DASzWfKt.css"])))=>i.map(i=>d[i]);
import{k as Vn,l as B,r as X,s as qn,m as Wn,n as on,p as un,q as Kn,v as Yn,i as R,x as yn,y as Xn,z as Qn,f as rn,A as cn,B as vn,C as E,D as Gn,E as bn,F as Z,T as F,G as Zn,H as Jn,I as ne,h as J,J as ee,o as H,K as te,L as Cn,M as le,N as oe,g as re,O as ae,P as ie,Q as se,w as pn,j as ue,d as dn,c as ce,t as fn,a as gn,b as pe,e as de}from"./DyoQ9Z0p.js";const fe=n=>n==="defer"||n===!1;function ge(...n){var _;const t=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(t);let[e,r,l={}]=n;if(typeof e!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const o=Vn(),i=r,u=()=>B.value,p=()=>o.isHydrating?o.payload.data[e]:o.static.data[e];l.server??(l.server=!0),l.default??(l.default=u),l.getCachedData??(l.getCachedData=p),l.lazy??(l.lazy=!1),l.immediate??(l.immediate=!0),l.deep??(l.deep=B.deep),l.dedupe??(l.dedupe="cancel");const c=l.getCachedData(e,o),g=c!=null;if(!o._asyncData[e]||!l.immediate){(_=o.payload._errors)[e]??(_[e]=B.errorValue);const h=l.deep?X:qn;o._asyncData[e]={data:h(g?c:l.default()),pending:X(!g),error:Wn(o.payload._errors,e),status:X("idle"),_default:l.default}}const s={...o._asyncData[e]};delete s._default,s.refresh=s.execute=(h={})=>{if(o._asyncDataPromises[e]){if(fe(h.dedupe??l.dedupe))return o._asyncDataPromises[e];o._asyncDataPromises[e].cancelled=!0}if(h._initial||o.isHydrating&&h._initial!==!1){const b=h._initial?c:l.getCachedData(e,o);if(b!=null)return Promise.resolve(b)}s.pending.value=!0,s.status.value="pending";const D=new Promise((b,m)=>{try{b(i(o))}catch(d){m(d)}}).then(async b=>{if(D.cancelled)return o._asyncDataPromises[e];let m=b;l.transform&&(m=await l.transform(b)),l.pick&&(m=me(m,l.pick)),o.payload.data[e]=m,s.data.value=m,s.error.value=B.errorValue,s.status.value="success"}).catch(b=>{if(D.cancelled)return o._asyncDataPromises[e];s.error.value=Yn(b),s.data.value=R(l.default()),s.status.value="error"}).finally(()=>{D.cancelled||(s.pending.value=!1,delete o._asyncDataPromises[e])});return o._asyncDataPromises[e]=D,o._asyncDataPromises[e]},s.clear=()=>he(o,e);const C=()=>s.refresh({_initial:!0}),O=l.server!==!1&&o.payload.serverRendered;{const h=yn();if(h&&O&&l.immediate&&!h.sp&&(h.sp=[]),h&&!h._nuxtOnBeforeMountCbs){h._nuxtOnBeforeMountCbs=[];const m=h._nuxtOnBeforeMountCbs;Xn(()=>{m.forEach(d=>{d()}),m.splice(0,m.length)}),Qn(()=>m.splice(0,m.length))}O&&o.isHydrating&&(s.error.value||c!=null)?(s.pending.value=!1,s.status.value=s.error.value?"error":"success"):h&&(o.payload.serverRendered&&o.isHydrating||l.lazy)&&l.immediate?h._nuxtOnBeforeMountCbs.push(C):l.immediate&&C();const D=Kn();if(l.watch){const m=on(l.watch,()=>s.refresh());D&&un(m)}const b=o.hook("app:data:refresh",async m=>{(!m||m.includes(e))&&await s.refresh()});D&&un(b)}const k=Promise.resolve(o._asyncDataPromises[e]).then(()=>s);return Object.assign(k,s),k}function he(n,t){t in n.payload.data&&(n.payload.data[t]=void 0),t in n.payload._errors&&(n.payload._errors[t]=B.errorValue),n._asyncData[t]&&(n._asyncData[t].data.value=R(n._asyncData[t]._default()),n._asyncData[t].error.value=B.errorValue,n._asyncData[t].pending.value=!1,n._asyncData[t].status.value="idle"),t in n._asyncDataPromises&&(n._asyncDataPromises[t]&&(n._asyncDataPromises[t].cancelled=!0),n._asyncDataPromises[t]=void 0)}function me(n,t){const e={};for(const r of t)e[r]=n[r];return e}const ye=/\d/,ve=["-","_","/","."];function be(n=""){if(!ye.test(n))return n!==n.toLowerCase()}function Sn(n,t){const e=ve,r=[];if(!n||typeof n!="string")return r;let l="",o,i;for(const u of n){const p=e.includes(u);if(p===!0){r.push(l),l="",o=void 0;continue}const c=be(u);if(i===!1){if(o===!1&&c===!0){r.push(l),l=u,o=c;continue}if(o===!0&&c===!1&&l.length>1){const g=l.at(-1);r.push(l.slice(0,Math.max(0,l.length-1))),l=g+u,o=c;continue}}l+=u,o=c,i=p}return r.push(l),r}function Ce(n){return n?n[0].toUpperCase()+n.slice(1):""}function j(n,t){return n?(Array.isArray(n)?n:Sn(n)).map(e=>Ce(e)).join(""):""}function Pn(n,t){return n?(Array.isArray(n)?n:Sn(n)).map(e=>e.toLowerCase()).join("-"):""}const $=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class z{constructor(t,e,r){this.normal=e,this.property=t,r&&(this.space=r)}}z.prototype.normal={};z.prototype.property={};z.prototype.space=void 0;function _n(n,t){const e={},r={};for(const l of n)Object.assign(e,l.property),Object.assign(r,l.normal);return new z(e,r,t)}function nn(n){return n.toLowerCase()}class w{constructor(t,e){this.attribute=e,this.property=t}}w.prototype.attribute="";w.prototype.booleanish=!1;w.prototype.boolean=!1;w.prototype.commaOrSpaceSeparated=!1;w.prototype.commaSeparated=!1;w.prototype.defined=!1;w.prototype.mustUseProperty=!1;w.prototype.number=!1;w.prototype.overloadedBoolean=!1;w.prototype.property="";w.prototype.spaceSeparated=!1;w.prototype.space=void 0;let Se=0;const f=A(),S=A(),Dn=A(),a=A(),y=A(),U=A(),x=A();function A(){return 2**++Se}const en=Object.freeze(Object.defineProperty({__proto__:null,boolean:f,booleanish:S,commaOrSpaceSeparated:x,commaSeparated:U,number:a,overloadedBoolean:Dn,spaceSeparated:y},Symbol.toStringTag,{value:"Module"})),Q=Object.keys(en);class an extends w{constructor(t,e,r,l){let o=-1;if(super(t,e),hn(this,"space",l),typeof r=="number")for(;++o<Q.length;){const i=Q[o];hn(this,Q[o],(r&en[i])===en[i])}}}an.prototype.defined=!0;function hn(n,t,e){e&&(n[t]=e)}function I(n){const t={},e={};for(const[r,l]of Object.entries(n.properties)){const o=new an(r,n.transform(n.attributes||{},r),l,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,e[nn(r)]=r,e[nn(o.attribute)]=r}return new z(t,e,n.space)}const wn=I({properties:{ariaActiveDescendant:null,ariaAtomic:S,ariaAutoComplete:null,ariaBusy:S,ariaChecked:S,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:y,ariaCurrent:null,ariaDescribedBy:y,ariaDetails:null,ariaDisabled:S,ariaDropEffect:y,ariaErrorMessage:null,ariaExpanded:S,ariaFlowTo:y,ariaGrabbed:S,ariaHasPopup:null,ariaHidden:S,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:y,ariaLevel:a,ariaLive:null,ariaModal:S,ariaMultiLine:S,ariaMultiSelectable:S,ariaOrientation:null,ariaOwns:y,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:S,ariaReadOnly:S,ariaRelevant:null,ariaRequired:S,ariaRoleDescription:y,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:S,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null},transform(n,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function kn(n,t){return t in n?n[t]:t}function xn(n,t){return kn(n,t.toLowerCase())}const Pe=I({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:U,acceptCharset:y,accessKey:y,action:null,allow:null,allowFullScreen:f,allowPaymentRequest:f,allowUserMedia:f,alt:null,as:null,async:f,autoCapitalize:null,autoComplete:y,autoFocus:f,autoPlay:f,blocking:y,capture:null,charSet:null,checked:f,cite:null,className:y,cols:a,colSpan:null,content:null,contentEditable:S,controls:f,controlsList:y,coords:a|U,crossOrigin:null,data:null,dateTime:null,decoding:null,default:f,defer:f,dir:null,dirName:null,disabled:f,download:Dn,draggable:S,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:f,formTarget:null,headers:y,height:a,hidden:f,high:a,href:null,hrefLang:null,htmlFor:y,httpEquiv:y,id:null,imageSizes:null,imageSrcSet:null,inert:f,inputMode:null,integrity:null,is:null,isMap:f,itemId:null,itemProp:y,itemRef:y,itemScope:f,itemType:y,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:f,low:a,manifest:null,max:null,maxLength:a,media:null,method:null,min:null,minLength:a,multiple:f,muted:f,name:null,nonce:null,noModule:f,noValidate:f,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:f,optimum:a,pattern:null,ping:y,placeholder:null,playsInline:f,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:f,referrerPolicy:null,rel:y,required:f,reversed:f,rows:a,rowSpan:a,sandbox:y,scope:null,scoped:f,seamless:f,selected:f,shadowRootClonable:f,shadowRootDelegatesFocus:f,shadowRootMode:null,shape:null,size:a,sizes:null,slot:null,span:a,spellCheck:S,src:null,srcDoc:null,srcLang:null,srcSet:null,start:a,step:null,style:null,tabIndex:a,target:null,title:null,translate:null,type:null,typeMustMatch:f,useMap:null,value:S,width:a,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:y,axis:null,background:null,bgColor:null,border:a,borderColor:null,bottomMargin:a,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:f,declare:f,event:null,face:null,frame:null,frameBorder:null,hSpace:a,leftMargin:a,link:null,longDesc:null,lowSrc:null,marginHeight:a,marginWidth:a,noResize:f,noHref:f,noShade:f,noWrap:f,object:null,profile:null,prompt:null,rev:null,rightMargin:a,rules:null,scheme:null,scrolling:S,standby:null,summary:null,text:null,topMargin:a,valueType:null,version:null,vAlign:null,vLink:null,vSpace:a,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:f,disableRemotePlayback:f,prefix:null,property:null,results:a,security:null,unselectable:null},space:"html",transform:xn}),_e=I({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:x,accentHeight:a,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:a,amplitude:a,arabicForm:null,ascent:a,attributeName:null,attributeType:null,azimuth:a,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:a,by:null,calcMode:null,capHeight:a,className:y,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:a,diffuseConstant:a,direction:null,display:null,dur:null,divisor:a,dominantBaseline:null,download:f,dx:null,dy:null,edgeMode:null,editable:null,elevation:a,enableBackground:null,end:null,event:null,exponent:a,externalResourcesRequired:null,fill:null,fillOpacity:a,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:U,g2:U,glyphName:U,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:a,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:a,horizOriginX:a,horizOriginY:a,id:null,ideographic:a,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:a,k:a,k1:a,k2:a,k3:a,k4:a,kernelMatrix:x,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:a,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:a,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:a,overlineThickness:a,paintOrder:null,panose1:null,path:null,pathLength:a,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:y,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:a,pointsAtY:a,pointsAtZ:a,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:x,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:x,rev:x,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:x,requiredFeatures:x,requiredFonts:x,requiredFormats:x,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:a,specularExponent:a,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:a,strikethroughThickness:a,string:null,stroke:null,strokeDashArray:x,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:a,strokeOpacity:a,strokeWidth:null,style:null,surfaceScale:a,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:x,tabIndex:a,tableValues:null,target:null,targetX:a,targetY:a,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:x,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:a,underlineThickness:a,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:a,values:null,vAlphabetic:a,vMathematical:a,vectorEffect:null,vHanging:a,vIdeographic:a,version:null,vertAdvY:a,vertOriginX:a,vertOriginY:a,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:a,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:kn}),On=I({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,t){return"xlink:"+t.slice(5).toLowerCase()}}),Tn=I({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:xn}),Mn=I({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,t){return"xml:"+t.slice(3).toLowerCase()}}),De=/[A-Z]/g,mn=/-[a-z]/g,we=/^data[-\w.:]+$/i;function ke(n,t){const e=nn(t);let r=t,l=w;if(e in n.normal)return n.property[n.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&we.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(mn,Oe);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!mn.test(o)){let i=o.replace(De,xe);i.charAt(0)!=="-"&&(i="-"+i),t="data"+i}}l=an}return new l(r,t)}function xe(n){return"-"+n.toLowerCase()}function Oe(n){return n.charAt(1).toUpperCase()}const Te=_n([wn,Pe,On,Tn,Mn],"html");_n([wn,_e,On,Tn,Mn],"svg");const Me=["p","h1","h2","h3","h4","h5","h6","li"];function V(n,t){return n.type===t||typeof n.type=="object"&&n.type.tag===t||n.tag===t}function sn(n){return V(n,"text")||V(n,Symbol.for("v-txt"))}function Ln(n){var t;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((t=n.children)==null?void 0:t.default)=="function"?n.children.default():[]}function q(n){if(!n)return"";if(Array.isArray(n))return n.map(q).join("");if(sn(n))return n.value||n.children||"";const t=Ln(n);return Array.isArray(t)?t.map(q).filter(Boolean).join(""):""}function Rn(n,t=[]){if(Array.isArray(n))return n.flatMap(r=>Rn(r,t));let e=n;return t.some(r=>r==="*"||V(n,r))&&(e=Ln(n)||n,!Array.isArray(e)&&Me.some(r=>V(n,r))&&(e=[e])),e}function En(n,t=[]){return n=Array.isArray(n)?n:[n],t.length?n.flatMap(e=>En(Rn(e,[t[0]]),t.slice(1))).filter(e=>!(sn(e)&&q(e).trim()==="")):n}function An(n,t=[]){return typeof t=="string"&&(t=t.split(/[,\s]/).map(e=>e.trim()).filter(Boolean)),t.length?En(n,t).reduce((e,r)=>(sn(r)?typeof e[e.length-1]=="string"?e[e.length-1]+=r.children:e.push(r.children):e.push(r),e),[]):n}function Le(n,t){return t.reduce((e,r)=>{const l=Re(n,r);return l!==void 0&&(e[r]=l),e},{})}function Re(n,t){return t.split(".").reduce((e,r)=>e&&e[r],n)}const tn="default",Bn=/^@|^v-on:/,jn=/^:|^v-bind:/,Ee=/^v-model/,Ae=["select","textarea","input"],Be=["math","svg"],je=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),Ue=rn({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var c,g,s,C,O,k,_;const t=(g=(c=yn())==null?void 0:c.appContext)==null?void 0:g.app,e=t==null?void 0:t.$nuxt,r=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:l}=((s=e==null?void 0:e.$config)==null?void 0:s.public)||{},o={...(C=l==null?void 0:l.components)!=null&&C.prose&&n.prose!==!1?je:{},...((O=l==null?void 0:l.components)==null?void 0:O.map)||{},...vn(((_=(k=n.data)==null?void 0:k.mdc)==null?void 0:_.components)||{}),...n.components},i=E(()=>{var D;const h=(((D=n.body)==null?void 0:D.children)||[]).map(b=>b.tag||b.type).filter(b=>!$.includes(b));return Array.from(new Set(h)).sort().join(".")}),u=Gn({...n.data});on(()=>n.data,h=>{Object.assign(u,h)}),await Ye(n.body,{tags:o});function p(h,D){const b=h.split(".").length-1;return h.split(".").reduce((m,d,v)=>v==b&&m?(m[d]=D,m[d]):typeof m=="object"?m[d]:void 0,u)}return{tags:o,contentKey:i,route:r,runtimeData:u,updateRuntimeData:p}},render(n){var O,k;const{tags:t,tag:e,body:r,data:l,contentKey:o,route:i,unwrap:u,runtimeData:p,updateRuntimeData:c}=n;if(!r)return null;const g={...l,tags:t,$route:i,runtimeData:p,updateRuntimeData:c},s=e!==!1?ln(e||((O=g.component)==null?void 0:O.name)||g.component||"div"):void 0;return s?cn(s,{...(k=g.component)==null?void 0:k.props,class:n.class,...this.$attrs,key:o},{default:C}):C==null?void 0:C();function C(){const _=Un(r,cn,{documentMeta:g,parentScope:g,resolveComponent:ln});return _!=null&&_.default?u?An(_.default(),typeof u=="string"?u.split(" "):["*"]):_.default():null}}});function Ie(n,t,e){const{documentMeta:r,parentScope:l,resolveComponent:o}=e;if(n.type==="text")return t(F,n.value);if(n.type==="comment")return t(Zn,null,n.value);const i=n.tag,u=Nn(n,r.tags);if(n.tag==="binding")return Ne(n,t,r,l);const p=In(u)?s=>s:o;if(u==="script")return t("pre",{class:"script-to-pre"},`<script>
`+q(n)+`
<\/script>`);const c=p(u);typeof c=="object"&&(c.tag=i);const g=$e(n,r);return t(c,g,Un(n,t,{documentMeta:r,parentScope:{...l,...g},resolveComponent:p}))}function Un(n,t,e){const{documentMeta:r,parentScope:l,resolveComponent:o}=e,u=(n.children||[]).reduce((c,g)=>{if(!We(g))return c[tn].children.push(g),c;const s=qe(g);return c[s]=c[s]||{props:{},children:[]},g.type==="element"&&(c[s].props=g.props,c[s].children.push(...g.children||[])),c},{[tn]:{props:{},children:[]}});return Object.entries(u).reduce((c,[g,{props:s,children:C}])=>(C.length&&(c[g]=(O={})=>{const k=Le(O,Object.keys(s||{}));let _=C.map(h=>Ie(h,t,{documentMeta:r,parentScope:{...l,...k},resolveComponent:o}));return s!=null&&s.unwrap&&(_=An(_,s.unwrap)),Ke(_)}),c),{})}function Ne(n,t,e,r={}){var c,g;const l={...e.runtimeData,...r,$document:e,$doc:e},o=/\.|\[(\d+)\]/,u=((c=n.props)==null?void 0:c.value.trim().split(o).filter(Boolean)).reduce((s,C)=>{if(s&&C in s)return typeof s[C]=="function"?s[C]():s[C]},l),p=(g=n.props)==null?void 0:g.defaultValue;return t(F,u??p??"")}function $e(n,t){const{tag:e="",props:r={}}=n;return Object.keys(r).reduce(function(l,o){if(o==="__ignoreMap")return l;const i=r[o];if(Ee.test(o))return ze(o,i,l,t,{native:Ae.includes(e)});if(o==="v-bind")return He(o,i,l,t);if(Bn.test(o))return Fe(o,i,l,t);if(jn.test(o))return Ve(o,i,l,t);const{attribute:u}=ke(Te,o);return Array.isArray(i)&&i.every(p=>typeof p=="string")?(l[u]=i.join(" "),l):(l[u]=i,l)},{})}function ze(n,t,e,r,{native:l}){var p;const o=((p=n.match(/^v-model:([^=]+)/))==null?void 0:p[1])||"modelValue",i=l?"value":o,u=l?"onInput":`onUpdate:${o}`;return e[i]=Y(t,r.runtimeData),e[u]=c=>{var g;r.updateRuntimeData(t,l?(g=c.target)==null?void 0:g.value:c)},e}function He(n,t,e,r){const l=Y(t,r);return e=Object.assign(e,l),e}function Fe(n,t,e,r){return n=n.replace(Bn,""),e.on=e.on||{},e.on[n]=()=>Y(t,r),e}function Ve(n,t,e,r){return n=n.replace(jn,""),e[n]=Y(t,r),e}const ln=n=>{if(typeof n=="string"){if($.includes(n))return n;const t=bn(j(n),!1);return!n||(t==null?void 0:t.name)==="AsyncComponentWrapper"||typeof t=="string"?t:"setup"in t?Z(()=>new Promise(e=>e(t))):t}return n};function Y(n,t){const e=n.split(".").reduce((r,l)=>typeof r=="object"?r[l]:void 0,t);return typeof e>"u"?Jn(n):e}function qe(n){let t="";for(const e of Object.keys(n.props||{}))if(!(!e.startsWith("#")&&!e.startsWith("v-slot:"))){t=e.split(/[:#]/,2)[1];break}return t||tn}function We(n){return n.tag==="template"}function In(n){return Be.includes(n)}function Ke(n){const t=[];for(const e of n){const r=t[t.length-1];e.type===F&&(r==null?void 0:r.type)===F?r.children=r.children+e.children:t.push(e)}return t}async function Ye(n,t){if(!n)return;const e=Array.from(new Set(r(n,t)));await Promise.all(e.map(async l=>{if(l!=null&&l.render||l!=null&&l.ssrRender||l!=null&&l.__ssrInlineRender)return;const o=ln(l);o!=null&&o.__asyncLoader&&!o.__asyncResolved&&await o.__asyncLoader()}));function r(l,o){const i=l.tag;if(l.type==="text"||i==="binding"||l.type==="comment")return[];const u=Nn(l,o.tags);if(In(u))return[];const p=[];l.type!=="root"&&!$.includes(u)&&p.push(u);for(const c of l.children||[])p.push(...r(c,o));return p}}function Nn(n,t){var r;const e=n.tag;return!e||typeof((r=n.props)==null?void 0:r.__ignoreMap)<"u"?e:t[e]||t[j(e)]||t[Pn(n.tag)]||e}const Xe=Object.assign(Ue,{__name:"MDCRenderer"});function Qe(n){return{type:"root",children:n.value.map($n)}}function $n(n){if(typeof n=="string")return{type:"text",value:n};const[t,e,...r]=n;return{type:"element",tag:t,props:e,children:r.map($n)}}const zn=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","Icon"],Hn=[],Ge=Object.freeze(Object.defineProperty({__proto__:null,globalComponents:zn,localComponents:Hn},Symbol.toStringTag,{value:"Module"})),Ze=rn({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var h,D,b,m;const t=["render","ssrRender","__ssrInlineRender"],e=n,r=!1,l=E(()=>{let d=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(d=e.value.excerpt),d.type==="minimal"?Qe(d):d}),o=E(()=>{var d,v;return!((v=(d=l.value)==null?void 0:d.children)!=null&&v.length)}),i=E(()=>{const{body:d,excerpt:v,...P}=e.value;return{...P,...e.data}}),u=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(d=>[d,`prose-${d}`])),{mdc:p}=ne().public||{},c={...(h=p==null?void 0:p.components)!=null&&h.prose&&e.prose!==!1?u:{},...((D=p==null?void 0:p.components)==null?void 0:D.map)||{},...vn(((m=(b=e.data)==null?void 0:b.mdc)==null?void 0:m.components)||{}),...e.components},g=E(()=>{}),s=E(()=>l.value?O(l.value,{tags:c}):{});function C(d){let v=d;if(typeof d=="string"){if($.includes(d))return d;if(zn.includes(j(d))?v=bn(d,!1):Hn.includes(j(d))&&(v=Z(()=>Cn(()=>Promise.resolve().then(()=>Ge),void 0,import.meta.url).then(M=>{const L=M[j(d)];return L?L():void 0}))),typeof v=="string")return v}if(!v)return v;const P=v;return"__asyncLoader"in P?P:"setup"in P?Z(()=>Promise.resolve(P)):P}function O(d,v){if(!d)return;const P=Array.from(new Set(k(d,v))),T={};for(const[M,L]of P)if(!T[M]){if(typeof L=="object"&&t.some(Fn=>Object.hasOwnProperty.call(L,Fn))){T[M]=L;continue}T[M]=C(L)}return T}function k(d,v){const P=d.tag;if(d.type==="text"||P==="binding"||d.type==="comment")return[];const T=_(d,v.tags),M=[];d.type!=="root"&&!$.includes(T)&&M.push([P,T]);for(const L of d.children||[])M.push(...k(L,v));return M}function _(d,v){var T;const P=d.tag;return!P||typeof((T=d.props)==null?void 0:T.__ignoreMap)<"u"?P:v[P]||v[j(P)]||v[Pn(d.tag)]||P}return(d,v)=>o.value?ee(d.$slots,"empty",{key:1,body:l.value,data:i.value,dataContentId:R(r)?n.value.id:void 0}):(H(),J(Xe,{key:g.value,body:l.value,data:i.value,class:te(e.class),tag:e.tag,prose:e.prose,unwrap:e.unwrap,components:s.value,"data-content-id":R(r)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),Je=Object.assign(Ze,{__name:"ContentRenderer"}),it={content:"v3.3.0--U8EM6BOp_kkhMh2YnKleoaT8ez2LM7Vj6WxrdYn5gB0"},nt={content:"_content_content",info:"_content_info"},st={content:{type:"page",fields:{id:"string",stem:"string",extension:"string",meta:"json",path:"string",title:"string",description:"string",seo:"json",body:"json",navigation:"json"}},info:{type:"data",fields:{}}},W=(n,t)=>{const e=n._conditions;return e.length>0?`(${e.join(` ${t} `)})`:""},K=n=>{const t=[],e={_conditions:t,where(r,l,o){let i;switch(l.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(o)){const u=o.map(p=>N(p)).join(", ");i=`"${String(r)}" ${l.toUpperCase()} (${u})`}else throw new TypeError(`Value for ${l} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(o)&&o.length===2)i=`"${String(r)}" ${l.toUpperCase()} ${N(o[0])} AND ${N(o[1])}`;else throw new Error(`Value for ${l} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":i=`"${String(r)}" ${l.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":i=`"${String(r)}" ${l.toUpperCase()} ${N(o)}`;break;default:i=`"${String(r)}" ${l} ${N(typeof o=="boolean"?Number(o):o)}`}return t.push(`${i}`),e},andWhere(r){const l=r(K());return t.push(W(l,"AND")),e},orWhere(r){const l=r(K());return t.push(W(l,"OR")),e}};return e},et=(n,t)=>{const e={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},r={__params:e,andWhere(o){const i=o(K());return e.conditions.push(W(i,"AND")),r},orWhere(o){const i=o(K());return e.conditions.push(W(i,"OR")),r},path(o){return r.where("path","=",le(o))},skip(o){return e.offset=o,r},where(o,i,u){return r.andWhere(p=>p.where(String(o),i,u)),r},limit(o){return e.limit=o,r},select(...o){return o.length&&e.selectedFields.push(...o),r},order(o,i){return e.orderBy.push(`"${String(o)}" ${i}`),r},async all(){return t(n,l()).then(o=>o||[])},async first(){return t(n,l({limit:1})).then(o=>o[0]||null)},async count(o="*",i=!1){return t(n,l({count:{field:String(o),distinct:i}})).then(u=>u[0].count)}};function l(o={}){let i="SELECT ";if(o!=null&&o.count)i+=`COUNT(${o.count.distinct?"DISTINCT ":""}${o.count.field}) as count`;else{const p=Array.from(new Set(e.selectedFields));i+=p.length>0?p.map(c=>`"${String(c)}"`).join(", "):"*"}i+=` FROM ${nt[String(n)]}`,e.conditions.length>0&&(i+=` WHERE ${e.conditions.join(" AND ")}`),e.orderBy.length>0?i+=` ORDER BY ${e.orderBy.join(", ")}`:i+=" ORDER BY stem ASC";const u=(o==null?void 0:o.limit)||e.limit;return u>0&&(e.offset>0?i+=` LIMIT ${u} OFFSET ${e.offset}`:i+=` LIMIT ${u}`),i}return r};function N(n){return`'${String(n).replace(/'/g,"''")}'`}const G=n=>{var e,r;const t=(r=(e=oe())==null?void 0:e.ssrContext)==null?void 0:r.event;return et(n,(l,o)=>tt(t,l,o))};async function tt(n,t,e){return lt(t,e)}async function lt(n,t){return await Cn(()=>import("./DhVkkq1M.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(r=>r.loadDatabaseAdapter(n)).then(r=>r.all(t))}const ot={key:1,class:"empty-page"},rt=rn({__name:"index",async setup(n){let t,e;const{t:r}=re(),l=ae(),o=E(()=>l("/")),{data:i}=([t,e]=ie(()=>ge(()=>G("content").path(o.value).first(),"$QD8d9NkvSp")),t=await t,e(),t);return se(async()=>{i.value=await G("content").path(o.value).first()}),on(o,async()=>{i.value=await G("content").path(o.value).first()}),(u,p)=>{const c=Je,g=de,s=ue;return H(),J(s,{class:"my-3 border-t p-4 border-gray-200 dark:border-gray-800 rounded-xl"},{default:pn(()=>[dn(fn(R(r)("LBL_HELLO"))+" "+fn(R(o))+" ",1),R(i)?(H(),J(c,{key:0,value:R(i)},null,8,["value"])):(H(),ce("div",ot,[p[1]||(p[1]=gn("h1",null,"Page Not Found",-1)),p[2]||(p[2]=gn("p",null,"Oops! The content you're looking for doesn't exist.",-1)),pe(g,{to:"/"},{default:pn(()=>p[0]||(p[0]=[dn("Go back home")])),_:1})]))]),_:1})}}}),ut=Object.freeze(Object.defineProperty({__proto__:null,default:rt},Symbol.toStringTag,{value:"Module"}));export{st as a,it as c,ut as i,nt as t};
