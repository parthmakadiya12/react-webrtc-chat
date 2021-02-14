(this["webpackJsonpreact-webrtc"]=this["webpackJsonpreact-webrtc"]||[]).push([[0],{106:function(e,n,t){},107:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=107},124:function(e,n,t){"use strict";t.r(n);var c,i,r,o,a=t(0),s=t.n(a),d=t(19),l=t.n(d),u=(t(106),t(14)),h=t(66),j=t(79),b=t(80),x=t(101),f=t(98),O=t(81),p=t.n(O),g=t(128),v=t(15),m=t(6);function y(e){var n=e.chat;return Object(m.jsx)(T,{children:n.map((function(e){return Object(m.jsxs)(k,{children:[Object(m.jsx)(_,{self:e.self,children:e.user})," : ",Object(m.jsx)(D,{children:e.text})]},e.id)}))})}var w,C,T=v.b.div(c||(c=Object(u.a)(["\n  overflow: auto;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"]))),k=v.b.div(i||(i=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),_=v.b.div(r||(r=Object(u.a)(["\n  font-weight: bold;\n  color: ",";\n"])),(function(e){return e.self?"#7b3c3c":"#515e75"})),D=v.b.div(o||(o=Object(u.a)(["\n  margin-left: 10px;\n  flex: 1;\n"]))),F=t(97),S=t(129);function M(e){var n=e.onChangeText,t=e.sendMessgae,c=e.currentText;return Object(m.jsxs)(E,{children:[Object(m.jsx)(L,{type:"text",onChange:n,onKeyDown:function(e){return"Enter"===e.key&&t()},value:c}),Object(m.jsx)(F.a,{onClick:t,children:"send"})]})}var R,L=Object(v.b)(S.a)(w||(w=Object(u.a)(["\n  width: 90%;\n  &:focus {\n    box-shadow: none;\n  }\n"]))),E=v.b.div(C||(C=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px;\n"]))),P=t(127);function U(){return Object(m.jsx)(V,{children:Object(m.jsx)(P.a,{})})}var z,I,V=v.b.div(R||(R=Object(u.a)(["\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 4px;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n"]))),B=t(17);var J,N,H,K,W,q,A,G=v.b.div(z||(z=Object(u.a)(["\n  color: rebeccapurple;\n  font-family: helvetica;\n  text-decoration: none;\n  :hover {\n    text-decoration: underline;\n  }\n"]))),Q=Object(v.b)(F.a)(I||(I=Object(u.a)(["\n  width: max-content;\n"]))),X=Object(B.f)((function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Q,{onClick:function(){return e.history.push("/")},children:"Home"}),"Please send this url to a friend to start chatting.",Object(m.jsxs)(G,{children:[" ",window.location.href]})]})})),Y=t(130),Z=function(e,n,t,c){var i=n.connect(e);console.log("Connection is ",i),t({conn:i,currentText:"",peer_id:e},(function(){i.on("open",(function(){t({connected:!0})})),i.on("data",c)}))},$={xlarge:1200,large:992,medium:768,small:576},ee=Object.keys($).reduce((function(e,n){var t=$[n]/16;return e[n]=function(){return Object(v.a)(J||(J=Object(u.a)(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "])),t,v.a.apply(void 0,arguments))},e}),{}),ne=v.b.div(N||(N=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),te=v.b.div(H||(H=Object(u.a)(["\n  border: 1px solid #f0f0f0;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  min-width: 40%;\n  border-radius: 4px;\n  padding: 20px;\n\n  ",";\n"])),ee.small(K||(K=Object(u.a)(["\n  min-width: 90%;\n  width:90%;\n            height: 90%;\n          "])))),ce=g.a.Title,ie=function(e){Object(x.a)(t,e);var n=Object(f.a)(t);function t(e){var c;return Object(j.a)(this,t),(c=n.call(this,e)).setValue=function(e,n){c.setState(e,n)},c.onChangeText=function(e){c.setState({currentText:e.target.value})},c.onReceiveData=function(e){c.setState({chat:[].concat(Object(h.a)(c.state.chat),[{text:e.text,id:e.id,user:e.user}])})},c.handleTextChange=function(e){c.setState({peer_id:e.target.value})},c.state={peer:new p.a,my_id:"",peer_id:"",initialized:!1,connected:!1,chat:[],currentText:""},c}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var e,n,t,c;e=this.state.peer,n=this.setValue,t=this.onReceiveData,c=this,e.on("open",(function(i){console.log("My peer ID is: ",i),n({my_id:i=i,initialized:!0});var r=c.props.location.search,o=new URLSearchParams(r).get("id");console.log("Remote user ",o),null!=o?Z(o,e,n,t):c.props.history.push("/chat?id=".concat(i))})),e.on("connection",(function(e){console.log("someone connected"),console.log(e),n({conn:e},(function(){c.state.conn.on("open",(function(){n({connected:!0,peer_id:e.peer})})),c.state.conn.on("data",t)}))})),e.on("error",(function(){c.props.history.push("/")}))}},{key:"render",value:function(){var e=this,n=this.state,t=n.my_id,c=n.initialized,i=n.connected,r=n.currentText,o=n.conn,a=n.chat;return c?Object(m.jsx)(re,{children:Object(m.jsxs)(oe,{children:[Object(m.jsx)(ce,{level:3,children:"Chat WebRTC"}),Object(m.jsxs)("p",{children:["Talking to User ",Object(m.jsx)("b",{children:this.state.peer_id})]}),i?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{chat:a}),Object(m.jsx)(M,{onChangeText:this.onChangeText,sendMessgae:function(){return function(e,n,t,c,i){if(e){var r={text:e,id:Object(Y.a)(),user:n,self:!0};t.send(r),i({chat:[].concat(Object(h.a)(c),[r]),currentText:""})}}(r,t,o,a,e.setValue)},currentText:r})]}):Object(m.jsx)(X,{})]})}):Object(m.jsx)(U,{})}}]),t}(a.Component),re=Object(v.b)(ne)(W||(W=Object(u.a)(["\n  justify-content: flex-start;\n  height: 100%;\n  width: inherit;\n"]))),oe=Object(v.b)(te)(q||(q=Object(u.a)(["\n  width: 60%;\n  height: 80%;\n  margin: 30px;\n  display: flex;\n  flex-direction: column;\n  ",";\n"])),ee.small(A||(A=Object(u.a)(["\n  min-width: 90%;\n  width:90%;\n            height: 90%;\n          "])))),ae=g.a.Title;var se=Object(B.f)((function(e){return Object(m.jsx)(ne,{children:Object(m.jsxs)(te,{children:[Object(m.jsx)(ae,{level:3,children:"Let's Chat"}),Object(m.jsx)(F.a,{type:"primary",onClick:function(){return e.history.push("/chat")},children:"Create Room"})]})})})),de=t(56);var le=function(){return Object(m.jsx)(de.a,{children:Object(m.jsxs)(B.c,{children:[Object(m.jsx)(B.a,{path:"/chat",component:ie}),Object(m.jsx)(B.a,{path:"/",component:se})]})})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,131)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),i(e),r(e),o(e)}))};t(123);l.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(le,{})}),document.getElementById("root")),ue()}},[[124,1,2]]]);
//# sourceMappingURL=main.849a6dad.chunk.js.map