(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var o=t(1),l=t.n(o),n=t(6),r=t.n(n),c=(t(12),t(3));function s(e){return l.a.createElement("div",{className:"container my-4 py-3 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h1",null,"About"),l.a.createElement("div",{className:"accordion my-3",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item",style:{backgroundColor:"dark"===e.mode?"#020918":"white"}},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed text-".concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",style:{backgroundColor:"dark"===e.mode?"#020918":"white",border:"1px solid white"}},"Accordion Item #1")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:{border:"1px solid white"}},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item",style:{backgroundColor:"dark"===e.mode?"#020918":"white"}},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed text-".concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:{backgroundColor:"dark"===e.mode?"#020918":"white",border:"1px solid white"}},"Accordion Item #2")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:{border:"1px solid white"}},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item",style:{backgroundColor:"dark"===e.mode?"#020918":"white"}},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed text-".concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{backgroundColor:"dark"===e.mode?"#020918":"white",border:"1px solid white"}},"Accordion Item #3")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body",style:{border:"1px solid white"}},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}var i=t(4);function d(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(i.b,{className:"navbar-brand",to:"/FirstReactApp"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/FirstReactApp"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},e.about))),l.a.createElement("div",{className:"form-check form-switch"},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"light"===e.mode?"Enable":"Disable"," Dark Mode")))))}function m(e){var a,t=Object(o.useState)(""),n=Object(c.a)(t,2),r=n[0],s=n[1];return a=r.split(" ").filter(function(e,a){return""!==e}).length,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-4 container text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h1",null,e.heading),l.a.createElement("textarea",{className:"form-control my-4 text-".concat("light"===e.mode?"dark":"light"),style:{backgroundColor:"dark"===e.mode?"#020918":"white"},value:r,onChange:function(e){s(e.target.value)},id:"exampleFormControlTextarea1",rows:"8"}),l.a.createElement("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){if(0===r.length)e.showAlert("Please enter some text","warning");else{var a=r.toUpperCase();s(a),e.showAlert("convert to uppercase","success")}}},"Convert UpperCase"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var a=r.toLowerCase();s(a),e.showAlert("convert to lowercase","success")}},"Convert LowerCase"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){for(var a=r.split(" "),t=0;t<a.length;t++)""!==a[t]&&(a[t]=a[t].charAt(0).toUpperCase()+a[t].slice(1));var o=a.join(" ");s(o),e.showAlert("convert to capitalize","success")}},"Convert Capitalize"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){document.getElementById("exampleFormControlTextarea1").select(),document.execCommand("copy"),e.showAlert("copy clip board","success")}},"Copy Clipboard"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var a=r.split(/[ ]+/).filter(function(e,a){return""!==e});s(a.join(" ")),e.showAlert("remove extra space","success")}},"Extra Space Remove"),l.a.createElement("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){s("")}},"Clear Text")),l.a.createElement("div",{className:"container text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,a," word and ",r.length," characters"),l.a.createElement("p",null,.032*a," minutes read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the textbox above to preview it here")))}function h(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg)}d.defaultProps={title:"set title here",about:"about text here"};var u=t(0);var p=function(){var e=Object(o.useState)("light"),a=Object(c.a)(e,2),t=a[0],n=a[1],r=Object(o.useState)(null),p=Object(c.a)(r,2),b=p[0],g=p[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(d,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(n("dark"),document.body.style.backgroundColor="#020918",E("Dark Mode Enable","success")):(n("light"),document.body.style.backgroundColor="white",E("Dark Mode Disable","success"))},about:"About TextUtils"}),l.a.createElement(h,{alert:b}),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/about",element:l.a.createElement(s,{mode:t})}),l.a.createElement(u.a,{exact:!0,path:"/FirstReactApp",element:l.a.createElement(m,{showAlert:E,heading:"Enter the text to analyze below",mode:t})}))))},b=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,15)).then(function(a){var t=a.getCLS,o=a.getFID,l=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),o(e),l(e),n(e),r(e)})};r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null)),document.getElementById("root")),b()},7:function(e,a,t){e.exports=t(14)}},[[7,3,2]]]);
//# sourceMappingURL=main.c6fd5b18.chunk.js.map