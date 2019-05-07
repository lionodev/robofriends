(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(32)},30:function(e,n,t){},31:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(4),i=t.n(a),c=t(2),s=t(9),l=t(18),u=t(19),h=(t(29),t(6)),d=t(7),f=t(10),b=t(8),g=t(11),p=function(){return function(e){var n;e({type:"REQUEST_ROBOTS_PENDING"}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then(function(e){return e.json()})).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})}},E=function(e){var n=e.name,t=e.email,o=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,t)))},m=function(e){var n=e.robots;return r.a.createElement("div",null,n.map(function(e,t){return r.a.createElement(E,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},v=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},w=function(e){return r.a.createElement("div",{style:{overflow:"auto",border:"5px solid black",height:"72vh"}},e.children)},O=function(e){function n(e){var t;return Object(h.a)(this,n),(t=Object(f.a)(this,Object(b.a)(n).call(this,e))).state={hasError:!1},t}return Object(g.a)(n,e),Object(d.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),n}(o.Component),y=(t(30),function(e){function n(){return Object(h.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(g.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,o=e.onSearchChange,a=e.isPending,i=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(v,{searchChange:o}),r.a.createElement(w,null,a?r.a.createElement("h1",null,"Loading"):r.a.createElement(O,null,r.a.createElement(m,{robots:i}))))}}]),n}(o.Component)),R=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCHFIELD",payload:n.target.value})},onRequestRobots:function(){return e(p())}}})(y),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C={searchField:""},k={robots:[],isPending:!0},T=(t(31),Object(u.createLogger)()),_=Object(c.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:n.payload});default:return e}}}),N=Object(c.d)(_,Object(c.a)(l.a,T));i.a.render(r.a.createElement(s.a,{store:N},r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/robofriends","/service-worker.js");S?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(n,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.baa4bd37.chunk.js.map