(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{21:function(e,n,t){},22:function(e,n,t){},42:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(2),a=t.n(c),r=t(14),s=t.n(r),i=(t(21),t(22),t(4)),u=t.n(i),o=t(15),l=t(5),d=t(16),j=t.n(d),v=(t(42),t(0));var b=function(e){var n=e.count,t=e.handleCountChanged,c=e.savingInprogress;return Object(v.jsxs)("div",{className:"artBoard",children:[Object(v.jsx)("div",{className:"loaderWrapper",children:function(){if(c)return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"spinner"}),Object(v.jsx)("div",{id:"loader",className:"loader",children:"Saving Counter value"})]})}()}),Object(v.jsxs)("div",{className:"rectangle",children:[Object(v.jsx)("div",{className:"minus",onClick:function(){t(n-1)},children:" - "}),Object(v.jsx)("input",{type:"text",className:"count",value:n,onChange:function(e){var n=e.target.value;t(n)}}),Object(v.jsx)("div",{className:"plus",onClick:function(){t(n+1)},children:" + "})]})]})};t(44);var f=function(e){var n=e.count;return Object(v.jsx)("div",{className:"counterValueWrapper",children:Object(v.jsxs)("div",{className:"label",children:["Counter Value : ",n]})})},h=(t(45),null);var p=function(e){var n=this,t=e.maxCount,a=void 0===t?1e3:t,r=e.minCount,s=void 0===r?1:r,i=Object(c.useState)(s),d=Object(l.a)(i,2),p=d[0],m=d[1],O=Object(c.useState)(!1),x=Object(l.a)(O,2),g=x[0],C=x[1],N=function(){var e=Object(o.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return clearTimeout(h),t={counter:n},e.next=4,j.a.post("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",t);case 4:C(!1);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"wrapperDiv",children:[Object(v.jsx)(b,{handleCountChanged:function(e){e>=s&&e<=a?(m(1*e),h&&clearTimeout(h),C(!0),h=setTimeout(N.bind(n,e),1e3)):m(p)},count:p,savingInprogress:g}),Object(v.jsx)(f,{count:p})]})};var m=function(){return Object(v.jsx)(p,{})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.f54576f6.chunk.js.map