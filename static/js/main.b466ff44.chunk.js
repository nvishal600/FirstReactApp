(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var l=t(1),o=t.n(l),n=t(6),r=t.n(n),c=(t(12),t(3));function s(e){return o.a.createElement("div",{className:"container my-4 py-3 text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("h1",null,"About"),o.a.createElement("div",{className:"accordion my-3",id:"accordionExample"},o.a.createElement("div",{className:"accordion-item",style:{backgroundColor:"dark"===e.mode?"#020918":"white"}},o.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},o.a.createElement("button",{className:"accordion-button collapsed text-".concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",style:{backgroundColor:"dark"===e.mode?"#020918":"white",border:"1px solid white"}},"Accordion Item #1")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:{border:"1px solid white"}},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item",style:{backgroundColor:"dark"===e.mode?"#020918":"white"}},o.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},o.a.createElement("button",{className:"accordion-button collapsed text-".concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:{backgroundColor:"dark"===e.mode?"#020918":"white",border:"1px solid white"}},"Accordion Item #2")),o.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:{border:"1px solid white"}},o.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),o.a.createElement("div",{className:"accordion-item",style:{backgroundColor:"dark"===e.mode?"#020918":"white"}},o.a.createElement("h2",{className:"accordion-header",id:"headingThree"},o.a.createElement("button",{className:"accordion-button collapsed text-".concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{backgroundColor:"dark"===e.mode?"#020918":"white",border:"1px solid white"}},"Accordion Item #3")),o.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:{border:"1px solid white"}},o.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",o.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}var i=t(4);function d(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(i.b,{className:"navbar-brand",to:"/FirstReactApp"},e.title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/FirstReactApp"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.b,{className:"nav-link",to:"/about"},e.about))),o.a.createElement("div",{className:"form-check form-switch"},o.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"light"===e.mode?"Enable":"Disable"," Dark Mode")))))}function m(e){var a,t=Object(l.useState)(""),n=Object(c.a)(t,2),r=n[0],s=n[1];return a=r.split(" ").filter(function(e,a){return""!==e}).length,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"my-4 container text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("h1",null,e.heading),o.a.createElement("textarea",{className:"form-control my-4 text-".concat("light"===e.mode?"dark":"light"),style:{backgroundColor:"dark"===e.mode?"#020918":"white"},value:r,onChange:function(e){s(e.target.value)},id:"exampleFormControlTextarea1",rows:"8"}),o.a.createElement("button",{disabled:0===a,className:"btn btn-primary mx-1 my-2",onClick:function(){if(0===r.length)e.showAlert("Please Enter Some Text","warning");else{var a=r.toUpperCase();s(a),e.showAlert("Convert to Uppercase","success")}}},"Convert UpperCase"),o.a.createElement("button",{disabled:0===a,className:"btn btn-primary mx-1 my-2",onClick:function(){var a=r.toLowerCase();s(a),e.showAlert("Convert to Lowercase","success")}},"Convert LowerCase"),o.a.createElement("button",{disabled:0===a,className:"btn btn-primary mx-1 my-2",onClick:function(){for(var a=r.split(" "),t=0;t<a.length;t++)""!==a[t]&&(a[t]=a[t].charAt(0).toUpperCase()+a[t].slice(1));var l=a.join(" ");s(l),e.showAlert("Convert to Capitalize","success")}},"Convert Capitalize"),o.a.createElement("button",{disabled:0===a,className:"btn btn-primary mx-1 my-2",onClick:function(){document.getElementById("exampleFormControlTextarea1").select(),document.execCommand("copy"),e.showAlert("Copy Clipboard","success")}},"Copy Clipboard"),o.a.createElement("button",{disabled:0===a,className:"btn btn-primary mx-1 my-2",onClick:function(){var a=r.split(/[ ]+/).filter(function(e,a){return""!==e});s(a.join(" ")),e.showAlert("Remove Extra Space","success")}},"Extra Space Remove"),o.a.createElement("button",{disabled:0===a,className:"btn btn-primary mx-1 my-2",onClick:function(){s(""),e.showAlert("Clear All Text","success")}},"Clear Text")),o.a.createElement("div",{className:"container text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("h1",null,"Your Text Summary"),o.a.createElement("p",null,a," word and ",r.length," characters"),o.a.createElement("p",null,.032*a," minutes read"),o.a.createElement("h2",null,"Preview"),o.a.createElement("p",null,r.length>0?r:"Nothing to Preview")))}function u(e){return e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg)}d.defaultProps={title:"set title here",about:"about text here"};var h=t(0);var b=function(){var e=Object(l.useState)("light"),a=Object(c.a)(e,2),t=a[0],n=a[1],r=Object(l.useState)(null),b=Object(c.a)(r,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(d,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(n("dark"),document.body.style.backgroundColor="#020918",E("Dark Mode Enable","success")):(n("light"),document.body.style.backgroundColor="white",E("Dark Mode Disable","success"))},about:"About TextUtils"}),o.a.createElement(u,{alert:p}),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/about",element:o.a.createElement(s,{mode:t})}),o.a.createElement(h.a,{exact:!0,path:"/FirstReactApp",element:o.a.createElement(m,{showAlert:E,heading:"Try TextUtils - Word , Character Counter",mode:t})}))))},p=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,15)).then(function(a){var t=a.getCLS,l=a.getFID,o=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),l(e),o(e),n(e),r(e)})};r.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null)),document.getElementById("root")),p()},7:function(e,a,t){e.exports=t(14)}},[[7,3,2]]]);
//# sourceMappingURL=main.b466ff44.chunk.js.map