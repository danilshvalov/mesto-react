(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),o=a.n(s),c=a(15),i=a.n(c),r=(a(25),a(2)),l=a(9),u=a(3),d=a(16),b=a(17),j=new(function(){function e(t){var a=t.baseUrl,n=t.headers,s=t.errorHandler;Object(d.a)(this,e),this._baseUrl=a,this._headers=n,this._errorHandler=s}return Object(b.a)(e,[{key:"sendRequest",value:function(e){var t=e.path,a=e.method,n=void 0===a?"GET":a,s=e.body,o=e.errorMessage;return fetch(new URL(t,this._baseUrl),{method:n,headers:this._headers,body:s}).then((function(e){return e.ok?e.json():Promise.reject("".concat(o,". \u041a\u043e\u0434 \u043e\u0448\u0438\u0431\u043a\u0438: ").concat(e.status))}))}},{key:"getInitialCards",value:function(){return this.sendRequest({path:"cards",errorMessage:"\u041f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})}},{key:"addPlace",value:function(e){var t=e.name,a=e.link;return this.sendRequest({path:"cards",method:"POST",body:JSON.stringify({name:t,link:a}),errorMessage:"\u041f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})}},{key:"deleteCard",value:function(e){return this.sendRequest({path:"cards/".concat(e),method:"DELETE",errorMessage:"\u041f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})}},{key:"setLike",value:function(e){return this.sendRequest({path:"cards/likes/".concat(e),method:"PUT",errorMessage:"\u041f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c like \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})}},{key:"removeLike",value:function(e){return this.sendRequest({path:"cards/likes/".concat(e),method:"DELETE",errorMessage:"\u041f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0443\u0431\u0440\u0430\u0442\u044c like \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.setLike(e):this.removeLike(e)}},{key:"getUserInfo",value:function(){return this.sendRequest({path:"users/me",errorMessage:"\u041f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})}},{key:"setUserInfo",value:function(e){var t=e.name,a=e.about;return this.sendRequest({path:"users/me",method:"PATCH",body:JSON.stringify({name:t,about:a}),errorMessage:"\u041f\u0440\u0438 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})}},{key:"changeAvatar",value:function(e){return this.sendRequest({path:"users/me/avatar",method:"PATCH",body:JSON.stringify({avatar:e}),errorMessage:"\u041f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0430\u0432\u0430\u0442\u0430\u0440\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"})}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19/",headers:{authorization:"68d238d8-54dd-4a8c-9a47-e308386a3ea7","Content-Type":"application/json; charset=utf-8"}});var m=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 \u2014 2021 Mesto Russia"})})},p=a.p+"static/media/header-logo.c2821b38.svg";var f=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{className:"header__logo",src:p,alt:"\u041c\u0435\u0441\u0442\u0430 \u0420\u043e\u0441\u0441\u0438\u0438"})})};var O=function(e){var t=e.name,a=e.link,s=e.isOpen,o=e.onClose;return Object(n.jsx)("div",{className:"popup popup_type_image ".concat(s&&"popup_opened"),children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("button",{className:"button button_type_close popup__close-button",type:"button",onClick:o}),Object(n.jsxs)("div",{className:"popup__picture picture",children:[Object(n.jsx)("img",{className:"picture__image",src:a,alt:t}),Object(n.jsx)("p",{className:"picture__description",children:t})]})]})})},h=a.p+"static/media/avatar.c2fc30b5.svg",_=o.a.createContext();var v=function(e){var t=e.card,a=e.onCardClick,s=e.onCardLike,c=e.onCardDelete,i=o.a.useContext(_),r=t.owner._id===i._id,l=t.likes.some((function(e){return e._id===i._id})),u="button button_type_delete element__delete-button ".concat(r?"button_visible":"button_hidden"),d="button button_type_like element__like-button ".concat(l?"button_like-active":"");return Object(n.jsxs)("article",{className:"element",children:[Object(n.jsx)("img",{className:"element__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),Object(n.jsxs)("div",{className:"element__sidebar",children:[Object(n.jsx)("h3",{className:"element__title",children:t.name}),Object(n.jsxs)("div",{className:"element__like-container",children:[Object(n.jsx)("button",{className:d,onClick:function(){s(t)},type:"button"}),Object(n.jsx)("span",{className:"element__like-count",children:t.likes.length})]}),Object(n.jsx)("button",{className:u,onClick:function(){c(t)},type:"button"})]})]})};var x=function(e){var t=e.cards,a=e.onEditAvatar,s=e.onAddPlace,c=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,l=e.onEditProfile,u=o.a.useContext(_);return Object(n.jsxs)("main",{className:"content",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsxs)("div",{className:"profile__image-container",children:[Object(n.jsx)("img",{className:"profile__avatar",src:u.avatar||h,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(n.jsx)("button",{className:"button profile__edit-avatar-button",onClick:a})]}),Object(n.jsxs)("div",{className:"profile__text",children:[Object(n.jsxs)("div",{className:"profile__name-container",children:[Object(n.jsx)("h1",{className:"profile__name",children:u.name}),Object(n.jsx)("button",{className:"button button_type_edit profile__edit-button",onClick:l,type:"button"})]}),Object(n.jsx)("p",{className:"profile__about",children:u.about})]}),Object(n.jsx)("button",{className:"button button_type_add profile__add-button",onClick:s,type:"button"})]}),Object(n.jsx)("section",{className:"elements",children:t.map((function(e){return Object(n.jsx)(v,{card:e,onCardLike:i,onCardClick:c,onCardDelete:r},e._id)}))})]})};var g=function(e){var t=e.message,a=e.isOpen,s=e.onClose;return Object(n.jsx)("div",{className:"popup popup_type_message ".concat(a&&"popup_opened"),children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("div",{className:"popup__message-box message-box",children:Object(n.jsx)("span",{className:"message-box__text",children:t})}),Object(n.jsx)("button",{className:"popup__close-button popup__close-button_indent button button_type_close button_small-size button_inverted-color",type:"button",onClick:s})]})})};var y=function(e){var t=e.name,a=e.title,s=e.children,c=e.onClose,i=e.isOpen,r=e.onSubmit,l=e.submitButton,u=o.a.useRef(),d=o.a.useRef(),b=o.a.useRef(),j=function e(t){"Escape"===t.key&&(c(),document.removeEventListener("keydown",e))};return o.a.useEffect((function(){i&&document.addEventListener("keydown",j)}),[i]),Object(n.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(i&&"popup_opened"),ref:u,onClick:function(e){e.target!==u.current&&e.target!==b.current&&e.target!==d.current||c()},children:Object(n.jsxs)("div",{className:"popup__container",ref:d,children:[Object(n.jsxs)("form",{className:"form popup__".concat(t,"-form"),method:"POST",action:"/",name:t,noValidate:!0,onSubmit:r,children:[Object(n.jsx)("h2",{className:"form__title",children:a}),s,l]}),Object(n.jsx)("button",{className:"button button_type_close popup__close-button",type:"button",ref:b})]})})},C=a(7),N=["abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang","htmlFor","httpEquiv","icon","id","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","readOnly","rel","required","role","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","style","tabIndex","target","title","translate","type","typeMustMatch","useMap","value","width","wmode","wrap","onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"],k=function(e){return Object.assign.apply(Object,Object(l.a)(Object.keys(e).filter((function(e){return N.some((function(t){return t===e}))})).map((function(t){return Object(C.a)({},t,e[t])}))))},S=function(e){var t=o.a.useState(!1),a=Object(u.a)(t,2),s=a[0],c=a[1],i=o.a.useState(e.defaultValue),l=Object(u.a)(i,2),d=l[0],b=l[1],j=o.a.useState(""),m=Object(u.a)(j,2),p=m[0],f=m[1],O=o.a.useState(!1),h=Object(u.a)(O,2),_=h[0],v=h[1],x=o.a.useRef();o.a.useEffect((function(){e.isVisible&&(x.current.value=e.defaultValue,b(x.current.value),c(x.current.validity.valid),f(x.current.validationMessage),v(!1))}),[e.isVisible]),o.a.useEffect((function(){e.onInput({value:d,isValid:s})}),[d,s]);return Object(n.jsxs)("div",{className:"field fieldset__field",children:[Object(n.jsx)("input",Object(r.a)(Object(r.a)({},k(e)),{},{className:"field__input ".concat(_?"field__input_error":""),id:"".concat(e.name,"-input"),name:"".concat(e.name,"Input"),onInput:function(e){var t=e.target;b(t.value),c(t.validity.valid),v(!t.validity.valid),f(t.validationMessage)},defaultValue:d,ref:x})),Object(n.jsx)("span",{className:"field__error-message ".concat(_?"field__error-message_visible":""),id:"".concat(e.name,"-input-error"),children:p})]})};var T=function(e){return Object(n.jsx)("button",Object(r.a)(Object(r.a)({},k(e)),{},{className:"button button_type_submit ".concat(e.className," ").concat(e.isEnabled||void 0===e.isEnabled?"":"button_type_submit-disabled"),type:"submit",children:e.text}))},E={name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"},M={defaultText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",loadingText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",className:"form__submit-button"},L={name:"name",type:"text",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0},V={name:"job",type:"text",placeholder:"\u0414\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",required:!0,minLength:"2",maxLength:"200"};var D=function(e){var t=e.onClose,a=e.isOpen,s=e.onUpdateUser,c=o.a.useContext(_),i=o.a.useState({value:c.name,isValid:!1}),l=Object(u.a)(i,2),d=l[0],b=l[1],j=o.a.useState({value:c.value,isValid:!1}),m=Object(u.a)(j,2),p=m[0],f=m[1],O=o.a.useState(!1),h=Object(u.a)(O,2),v=h[0],x=h[1],g=o.a.useState(M.defaultText),C=Object(u.a)(g,2),N=C[0],k=C[1];return o.a.useEffect((function(){x([d,p].every((function(e){return e.isValid})))}),[d,p]),Object(n.jsx)(y,Object(r.a)(Object(r.a)({onClose:t,isOpen:a,onSubmit:function(e){e.preventDefault(),v&&(k(M.loadingText),s({name:d.value,about:p.value}).finally((function(){k(M.defaultText)})))}},E),{},{submitButton:Object(n.jsx)(T,Object(r.a)(Object(r.a)({},M),{},{isEnabled:v,text:N})),children:Object(n.jsxs)("fieldset",{className:"fieldset form__edit-profile-fieldset",children:[Object(n.jsx)("div",{className:"field fieldset__field",children:Object(n.jsx)(S,Object(r.a)(Object(r.a)({},L),{},{onInput:b,isVisible:a,defaultValue:c.name}))}),Object(n.jsx)("div",{className:"field fieldset__field",children:Object(n.jsx)(S,Object(r.a)(Object(r.a)({},V),{},{onInput:f,isVisible:a,defaultValue:c.about}))})]})}))},P={name:"add-element",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"},I={defaultText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",loadingText:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c...",className:"form__submit-button"},U={name:"title",type:"text",defaultValue:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0},w={name:"link",type:"url",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0};var q=function(e){var t=e.onClose,a=e.isOpen,s=e.onAddPlace,c=o.a.useState({value:"",isValid:!1}),i=Object(u.a)(c,2),l=i[0],d=i[1],b=o.a.useState({value:"",isValid:!1}),j=Object(u.a)(b,2),m=j[0],p=j[1],f=o.a.useState(!1),O=Object(u.a)(f,2),h=O[0],_=O[1],v=o.a.useState(I.defaultText),x=Object(u.a)(v,2),g=x[0],C=x[1];return o.a.useEffect((function(){_([l,m].every((function(e){return e.isValid})))}),[l,m]),Object(n.jsx)(y,Object(r.a)(Object(r.a)({onClose:t,isOpen:a,onSubmit:function(e){e.preventDefault(),h&&(C(I.loadingText),s({name:l.value,link:m.value}).finally((function(){C(I.defaultText)})))}},P),{},{submitButton:Object(n.jsx)(T,Object(r.a)(Object(r.a)({},I),{},{isEnabled:h,text:g})),children:Object(n.jsxs)("fieldset",{className:"fieldset form__add-element-fieldset",children:[Object(n.jsx)("div",{className:"field fieldset__field",children:Object(n.jsx)(S,Object(r.a)(Object(r.a)({},U),{},{onInput:d,isVisible:a}))}),Object(n.jsx)("div",{className:"field fieldset__field",children:Object(n.jsx)(S,Object(r.a)(Object(r.a)({},w),{},{onInput:p,isVisible:a}))})]})}))},A={name:"change-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440"},R={defaultText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",loadingText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",className:"form__submit-button"},B={name:"avatar",type:"url",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0};var F=function(e){var t=e.onClose,a=e.isOpen,s=e.onUpdateAvatar,c=o.a.useState({value:"",isValid:!1}),i=Object(u.a)(c,2),l=i[0],d=i[1],b=o.a.useState(!1),j=Object(u.a)(b,2),m=j[0],p=j[1],f=o.a.useState(R.defaultText),O=Object(u.a)(f,2),h=O[0],_=O[1];return o.a.useEffect((function(){p(l.isValid)}),[l]),Object(n.jsx)(y,Object(r.a)(Object(r.a)({onClose:t,isOpen:a,onSubmit:function(e){e.preventDefault(),m&&(_(R.loadingText),s({avatar:l.value}).finally((function(){_(R.defaultText)})))}},A),{},{submitButton:Object(n.jsx)(T,Object(r.a)(Object(r.a)({},R),{},{isEnabled:m,text:h})),children:Object(n.jsx)("fieldset",{className:"fieldset form__change-avatar-fieldset",children:Object(n.jsx)("div",{className:"field fieldset__field",children:Object(n.jsx)(S,Object(r.a)(Object(r.a)({},B),{},{onInput:d,isVisible:a}))})})}))};var z=function(){return Object(n.jsx)("div",{className:"loading-spinner"})},J={name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"},H={className:"form__submit-button",defaultText:"\u0414\u0430",loadingText:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."};var K=function(e){var t=e.onClose,a=e.isOpen,s=e.onCardDelete,c=e.card,i=o.a.useState(H.defaultText),l=Object(u.a)(i,2),d=l[0],b=l[1];return Object(n.jsx)(y,Object(r.a)(Object(r.a)({isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),b(H.loadingText),s(c).finally((function(){b(H.defaultText)}))}},J),{},{submitButton:Object(n.jsx)(T,Object(r.a)(Object(r.a)({},H),{},{text:d}))}))};var G=function(){var e=o.a.useState(!0),t=Object(u.a)(e,2),a=t[0],s=t[1],c=o.a.useState(!1),i=Object(u.a)(c,2),d=i[0],b=i[1],p=o.a.useState(!1),h=Object(u.a)(p,2),v=h[0],y=h[1],C=o.a.useState(!1),N=Object(u.a)(C,2),k=N[0],S=N[1],T=o.a.useState(!1),E=Object(u.a)(T,2),M=E[0],L=E[1],V=o.a.useState(!1),P=Object(u.a)(V,2),I=P[0],U=P[1],w=o.a.useState(!1),A=Object(u.a)(w,2),R=A[0],B=A[1],J=o.a.useState(),H=Object(u.a)(J,2),G=H[0],W=H[1],Q=o.a.useState(),X=Object(u.a)(Q,2),Y=X[0],Z=X[1],$=o.a.useState({name:"",about:"",avatar:"",_id:""}),ee=Object(u.a)($,2),te=ee[0],ae=ee[1],ne=o.a.useState([]),se=Object(u.a)(ne,2),oe=se[0],ce=se[1],ie=o.a.useState(),re=Object(u.a)(ie,2),le=re[0],ue=re[1];o.a.useEffect((function(){de(Promise.all([j.getUserInfo(),j.getInitialCards()]),(function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];ae(a),ce(n),s(!1)}))}),[]);var de=function(e,t){return e.then((function(e){return t(e)})).catch((function(e){e instanceof TypeError?Z("\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"):Z("string"===typeof e?e:"\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435"),U(!0)}))},be=function(){S(!1),b(!1),y(!1),L(!1),B(!1)};return Object(n.jsx)("div",{className:"page",children:Object(n.jsxs)(_.Provider,{value:te,children:[Object(n.jsx)(f,{}),a?Object(n.jsx)(z,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{cards:oe,onEditProfile:function(){b(!0)},onAddPlace:function(){y(!0)},onEditAvatar:function(){S(!0)},onCardClick:function(e){W(e),B(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===te._id}));de(j.changeLikeCardStatus(e._id,!t),(function(t){ce(oe.map((function(a){return a._id===e._id?t:a})))}))},onCardDelete:function(e){ue(e),L(!0)}}),Object(n.jsx)(D,{isOpen:d,onClose:be,onUpdateUser:function(e){return de(j.setUserInfo(e),(function(e){ae(e),b(!1)}))}}),Object(n.jsx)(q,{isOpen:v,onClose:be,onAddPlace:function(e){return de(j.addPlace(e),(function(e){ce([e].concat(Object(l.a)(oe))),y(!1)}))}}),Object(n.jsx)(F,{isOpen:k,onClose:be,onUpdateAvatar:function(e){return de(j.changeAvatar(e.avatar),(function(e){var t=e.avatar;te.avatar=t,S(!1)}))}}),Object(n.jsx)(O,Object(r.a)(Object(r.a)({},G),{},{isOpen:R,onClose:be})),Object(n.jsx)(g,{isOpen:I,onClose:function(){U(!1)},message:Y}),Object(n.jsx)(K,{card:le,onCardDelete:function(e){return de(j.deleteCard(e._id),(function(){ce(oe.filter((function(t){return t._id!==e._id}))),L(!1)}))},isOpen:M,onClose:be})]}),Object(n.jsx)(m,{})]})})},W=a(19),Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),o(e),c(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(W.a,{children:Object(n.jsx)(G,{})})}),document.getElementById("root")),Q()}},[[31,1,2]]]);
//# sourceMappingURL=main.5fa74cc1.chunk.js.map