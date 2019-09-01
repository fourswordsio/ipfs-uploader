(window["webpackJsonpipfs-uploader"]=window["webpackJsonpipfs-uploader"]||[]).push([[0],{105:function(e,t){},114:function(e,t){},128:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"initIPFS",function(){return k});var i=a(0),r=a.n(i),s=a(9),c=a(6),o=a(20),l=a(68),u=Object(o.c)({ipfs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_IPFS":return t.payload;default:return e}}}),h=a(13),d=a(14),p=a(17),m=a(15),f=a(16),g=a(134),b=a(133),j=a(38),v=(a(85),a(69)),E=a.n(v),O=a(4),w=a.n(O),y=a(71),S=a.n(y);function k(e){return{type:"INIT_IPFS",payload:new S.a({host:"ipfs.infura.io",port:5001,protocol:"https"})}}var I=a(135),F=a(23),U=a.n(F),C=a(72),P=a.n(C),N=a(50),z=a.n(N),R=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{align:"center"},r.a.createElement(U.a,{align:"center"},"IPFS Image Uploader"),r.a.createElement(P.a,null,r.a.createElement(z.a,{title:"See"},r.a.createElement(I.a,{to:"/see"})),r.a.createElement(z.a,{title:"Upload"},r.a.createElement(I.a,{to:"/upload"}))))}}]),t}(i.Component);var L=Object(c.b)(function(e){return{}},n)(R),D=a(73),A=a.n(D);var G=Object(c.b)(function(e){return{}})(function(){return r.a.createElement(w.a,{align:"center"},r.a.createElement(A.a,null,"\xa9 2018, ",r.a.createElement("a",{href:"https://talaiikis.com"},"Talaikis Ltd.")))});var _=Object(c.b)(function(e){return{ipfs:e.ipfs}})(function(e){return r.a.createElement("div",null,e.ipfs?null:r.a.createElement("div",null,r.a.createElement("strong",null,"Warning!")," IPFS isn't initiated by some reason."))}),J=a(24),T=a.n(J),x=a(34),W=a(35),B=a(18),H=a(36),M=a.n(H),Y=a(21),Q=a.n(Y),V=a(37),q=a.n(V),Z=a(12),K=a.n(Z),X=a(74),$=a.n(X),ee=a(75),te=a.n(ee),ae=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={success:"",failure:"",modalOpen:!1,hash:"",data:"",loading:!1},a.handleChange=a.handleChange.bind(Object(B.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(B.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value?e.target.value:"";this.setState(Object(W.a)({},e.target.name,t))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),""!==this.state.hash?this.props.ipfs.catJSON(this.state.hash,function(){var e=Object(x.a)(T.a.mark(function e(a,n){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a?t.setState({modalOpen:!0,failure:"Error occured: ".concat(a.message)}):t.setState({data:n});case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()):this.setState({modalOpen:!0,failure:"You need to enter IPFS hash."}),this.setState({loading:!1})}},{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement(w.a,{align:"center"},r.a.createElement(U.a,{align:"center"},"Load data from IPFS"),r.a.createElement(q.a,{onSubmit:this.handleSubmit},r.a.createElement(w.a,{pad:"small",align:"center"},r.a.createElement(Q.a,{labelFor:"hash"},"Enter IPFS hash:")),r.a.createElement(w.a,{pad:"small",align:"center"},r.a.createElement($.a,{id:"hash",type:"text",name:"hash",onDOMChange:this.handleChange,value:this.state.hash,placeHolder:"E.g. QmfWyGyMYHqqzEFUmfoUJyPQ6EzGnoB18v9CNbPjczXGgH"})),r.a.createElement(w.a,{pad:"small",align:"center"},this.state.loading?"Loading...":r.a.createElement(K.a,{primary:!0,type:"submit",label:"Get it"})),r.a.createElement(w.a,{pad:"small",align:"center"},r.a.createElement(Q.a,{align:"cenyer"},this.state.hash?"Hash: ".concat(this.state.hash):""))),this.state.data?r.a.createElement(te.a,{src:this.state.data,size:"large",align:"center"}):"",r.a.createElement(w.a,{align:"center"},r.a.createElement(Q.a,{align:"center"},"If you want to add this image as your image source, use this url:"),r.a.createElement("pre",null,"https://ipfs.infura.io:5001/api/v0/cat/",this.state.hash))),this.state.modalOpen&&r.a.createElement(M.a,{status:this.state.success?"ok":"critical"},r.a.createElement("p",null,this.state.success?this.state.success:null),r.a.createElement("p",null,this.state.failure?this.state.failure:null)))}}]),t}(i.Component);var ne=Object(c.b)(function(e){return{ipfs:e.ipfs}})(ae),ie=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={hash:"",success:"",failure:"",modalOpen:!1,document:"",loading:!1},a.handleUploadFile=a.handleUploadFile.bind(Object(B.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(B.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleUploadFile",value:function(e){var t=e.target.files[0],a=e.target.name;if(t.type.match("image/*")){var n=new FileReader;n.onload=function(e){return function(e){this.setState(Object(W.a)({},a,e.target.result))}.bind(this)}.bind(this)(t),n.readAsDataURL(t)}else this.setState({modalOpen:!0,failure:"We can accept only image files."})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({loading:!0}),""!==this.state.document?this.props.ipfs.addJSON(this.state.document,function(){var e=Object(x.a)(T.a.mark(function e(a,n){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a?t.setState({failure:"Error occured: ".concat(a.message)}):t.setState({modalOpen:!0,hash:n,success:"Success! Your hash: ".concat(n)});case 1:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()):this.setState({modalOpen:!0,failure:"You need an image."}),this.setState({loading:!1})}},{key:"render",value:function(){return r.a.createElement(w.a,{align:"center"},r.a.createElement(U.a,{align:"center"},"Upload image to Interplanetary File System (IPFS)"),r.a.createElement(w.a,{align:"center"},r.a.createElement(q.a,{onSubmit:this.handleSubmit},r.a.createElement(w.a,{pad:"small",align:"center"},r.a.createElement(Q.a,null,"Please attach your image:"),r.a.createElement("input",{id:"file",name:"document",type:"file",onChange:this.handleUploadFile})),r.a.createElement(w.a,{pad:"small",align:"center"},this.state.loading?"Loading...":r.a.createElement(K.a,{primary:!0,type:"submit",label:"Upload"}))),""!==this.state.hash?"Note your hash: ".concat(this.state.hash):""),this.state.modalOpen&&r.a.createElement(M.a,{status:this.state.success?"ok":"critical"},r.a.createElement("p",null,this.state.success?this.state.success:null),r.a.createElement("p",null,this.state.failure?this.state.failure:null)))}}]),t}(i.Component);var re=Object(c.b)(function(e){return{ipfs:e.ipfs}})(ie),se=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"initGA",value:function(){j.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:""}).GA_TRACKING_ID)}},{key:"logPageView",value:function(){j.a.set({page:window.location.pathname}),j.a.pageview(window.location.pathname)}},{key:"componentDidMount",value:function(){this.props.initIPFS(),window.GA_INITIALIZED||(this.initGA(),window.GA_INITIALIZED=!0),this.logPageView()}},{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement("div",null,r.a.createElement(w.a,{align:"center",responsive:!0,pad:"large"},r.a.createElement(_,Object.assign({ipfs:this.props.ipfs},this.props)),r.a.createElement(w.a,{align:"center",responsive:!0,pad:"medium"},r.a.createElement(L,null)),r.a.createElement(b.a,{exact:!0,path:"/upload",component:re}),r.a.createElement(b.a,{exact:!0,path:"/see",component:ne})),r.a.createElement(G,null)))))}}]),t}(i.Component);var ce=Object(c.b)(function(e){return{ipfs:e.ipfs}},n)(se),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ue=Object(o.a)(l.a)(o.d);s.render(r.a.createElement(c.a,{store:ue(u)},r.a.createElement(ce,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");oe?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):le(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):le(e)})}}()},70:function(e,t){},76:function(e,t,a){e.exports=a(128)},89:function(e,t,a){var n={"./en":52,"./en-US":39,"./en-US.js":39,"./en.js":52,"./fr":53,"./fr-FR":40,"./fr-FR.js":40,"./fr.js":53,"./he":54,"./he.js":54,"./icons/en":55,"./icons/en-US":11,"./icons/en-US.js":11,"./icons/en.js":55,"./icons/fr":56,"./icons/fr-FR":31,"./icons/fr-FR.js":31,"./icons/fr.js":56,"./icons/ja":57,"./icons/ja-JP":41,"./icons/ja-JP.js":41,"./icons/ja.js":57,"./icons/nl":42,"./icons/nl.js":42,"./icons/zh":58,"./icons/zh-CN":43,"./icons/zh-CN.js":43,"./icons/zh.js":58,"./ja":59,"./ja-JP":44,"./ja-JP.js":44,"./ja.js":59,"./nl":60,"./nl.js":60,"./pt":61,"./pt-BR":45,"./pt-BR.js":45,"./pt.js":61,"./ru":62,"./ru-RU":46,"./ru-RU.js":46,"./ru.js":62,"./zh":63,"./zh-CN":47,"./zh-CN.js":47,"./zh.js":63};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=89},99:function(e,t){}},[[76,1,2]]]);
//# sourceMappingURL=main.e6cbee90.chunk.js.map