(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{520:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(122),c=t(118),l=t.n(c),i=t(55),s=t(5),m=t.n(s),p=t(519),u=t(123),f=t(547),h=t.n(f),b=t(147),d=t.n(b),y=t(546),g=t.n(y),E=t(281),v=t.n(E),N=t(545),k=t(514);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,a){return(w=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function O(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,a){return!a||"object"!==C(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function S(e){return(S=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var j=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return _(n,(t=n=_(this,(e=S(a)).call.apply(e,[this].concat(o))),n.state={anchorEl:null,user:""},n.handleClick=function(e){n.setState({anchorEl:e.currentTarget})},n.handleLogOut=function(){n.model.storage.removeStorage(),n.handleRedirectToAuth()},n.handleClose=function(){n.setState({anchorEl:null})},t))}var t,n,o;return t=a,(n=[{key:"componentDidMount",value:function(){this.setState({user:this.model.storage.getCurrentUser()})}},{key:"render",value:function(){var e=this.state,a=e.anchorEl,t=e.user;return r.a.createElement("ul",{className:"list-unstyled float-right"},r.a.createElement("li",{style:{marginRight:"10px"}},r.a.createElement(d.a,{className:"header-btn","aria-owns":a?"app-header-menu":null,"aria-haspopup":"true",onClick:this.handleClick},r.a.createElement(h.a,{alt:"avatar",src:"assets/images-demo/avatars/admin.png",style:{width:"100%"},className:"rounded-circle header-avatar"})),r.a.createElement(g.a,{id:"app-header-menu",className:"app-header-dropdown",anchorEl:a,open:Boolean(a),onClose:this.handleClose},r.a.createElement(v.a,{onClick:this.handleClose}," ",r.a.createElement("div",null,r.a.createElement("span",null,"Signed in as"),r.a.createElement("strong",null,t.name))," "),r.a.createElement("div",{className:"divider divider-solid my-1"}),r.a.createElement(v.a,{onClick:this.handleLogOut}," ",r.a.createElement("a",{href:"#"}," ",r.a.createElement("i",{className:"material-icons"},"forward")," ",r.a.createElement("span",null,"Log Out")," ")," "))))}}])&&O(t.prototype,n),o&&O(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");w(e.prototype,a&&a.prototype),a&&w(e,a)}(a,e),a}(k.a),x=Object(N.a)(j),P=t(207),T=t.n(P),z=t(516);function R(e){return(R="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,a){return(A=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function D(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,a){return!a||"object"!==R(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function L(e){return(L=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var M=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),q(this,L(a).apply(this,arguments))}var t,n,o;return t=a,(n=[{key:"componentDidMount",value:function(){this.checkPermissionAdmin();var e=this.sidebarBtn,a=T()(e),t=T()("#body");a.on("click",function(e){t.toggleClass("sidebar-mobile-open")})}},{key:"render",value:function(){var e=this,a=this.props.colorOption;return r.a.createElement("section",{className:"app-header"},r.a.createElement("div",{className:m()("app-header-inner",{"bg-color-light":["11","12","13","14","15","16","21"].indexOf(a)>=0,"bg-color-dark":"31"===a,"bg-color-primary":["22","32"].indexOf(a)>=0,"bg-color-success":["23","33"].indexOf(a)>=0,"bg-color-info":["24","34"].indexOf(a)>=0,"bg-color-warning":["25","35"].indexOf(a)>=0,"bg-color-danger":["26","36"].indexOf(a)>=0})},r.a.createElement("div",{className:"d-lg-none d-xl-none float-left"},r.a.createElement("a",{href:z.a.link,className:"header-icon toggle-sidebar-btn",ref:function(a){e.sidebarBtn=a}},r.a.createElement("i",{className:"material-icons"},"menu"))),r.a.createElement("div",{className:"brand d-none d-lg-inline-block d-xl-inline-block"},r.a.createElement("h2",null,r.a.createElement(p.a,{to:"/"},u.a.brand))),r.a.createElement("div",{className:"top-nav-left d-none d-lg-inline-block d-xl-inline-block"}),r.a.createElement("div",{className:"top-nav-right"},r.a.createElement(x,null))))}}])&&D(t.prototype,n),o&&D(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");A(e.prototype,a&&a.prototype),a&&A(e,a)}(a,e),a}(k.a),V=Object(i.connect)(function(e){return{colorOption:e.settings.colorOption}})(M),B=t(34);var U=t(544),G=t.n(U);t(518);function H(e){return(H="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,a){return(J=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function F(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,a){return!a||"object"!==H(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function W(e){return(W=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var K=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),I(this,W(a).apply(this,arguments))}var t,n,o;return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.props.history,a=this.nav,t=T()(a);t.slimscroll({height:"100%"}),t.find(".prepend-icon").prepend('<i class="material-icons">keyboard_arrow_right</i>');var n=t.find("ul").parent("li");n.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>'),n.children("a").on("click",function(e){return e.preventDefault()}),t.on("click",function(e){var a=e.target,n=T()(a).closest("li");if(n.length){var r=n.children("ul"),o=n.parents().length+1;t.find("ul").filter(function(){return T()(this).parents().length>=o&&this!==r.get(0)}).slideUp(250).closest("li").removeClass("open"),n.has("ul").length&&n.toggleClass("open"),r.stop().slideToggle(250)}});var r=t.find("a");function o(e){var a="#".concat(e);r.each(function(e,t){var n=T()(t),r=n.parent("li"),o=n.attr("href");r.hasClass("active")&&r.removeClass("active"),0===a.indexOf(o)&&r.addClass("active")})}o(e.location.pathname),e.listen(function(e){o(e.pathname)})}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"nav",ref:function(a){e.nav=a}},r.a.createElement("li",{className:"nav-header"},r.a.createElement("span",null,"Navigation")),r.a.createElement("li",null,r.a.createElement(G.a,{href:"#/app/table/user-table"},r.a.createElement("i",{className:"nav-icon material-icons"},"person_outline"),r.a.createElement("span",{className:"nav-text"},"Users"))),r.a.createElement("li",null,r.a.createElement(G.a,{href:"#/app/table/product-table"},r.a.createElement("i",{className:"nav-icon material-icons"},"shopping_cart"),r.a.createElement("span",{className:"nav-text"},"Products"))),r.a.createElement("li",null,r.a.createElement(G.a,{href:"#/app/table/order-table"},r.a.createElement("i",{className:"nav-icon material-icons"},"exit_to_app"),r.a.createElement("span",{className:"nav-text"},"Orders"))),r.a.createElement("li",null,r.a.createElement(G.a,{href:"#/app/table/color-table"},r.a.createElement("i",{className:"nav-icon material-icons"},"favorite"),r.a.createElement("span",{className:"nav-text"},"Colors"))),r.a.createElement("li",null,r.a.createElement(G.a,{href:"#/app/table/size-table"},r.a.createElement("i",{className:"nav-icon material-icons"},"shopping_basket"),r.a.createElement("span",{className:"nav-text"},"Sizes"))),r.a.createElement("li",null,r.a.createElement(G.a,{href:"#/app/table/group-table"},r.a.createElement("i",{className:"nav-icon material-icons"},"shopping_basket"),r.a.createElement("span",{className:"nav-text"},"Groups"))))}}])&&F(t.prototype,n),o&&F(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");J(e.prototype,a&&a.prototype),a&&J(e,a)}(a,e),a}(r.a.Component),Q=Object(N.a)(K);function X(e){return(X="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,a){return(Y=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function Z(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,a){return!a||"object"!==X(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function ee(e){return(ee=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ae=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return $(n,(t=n=$(this,(e=ee(a)).call.apply(e,[this].concat(o))),n.onToggleCollapsedNav=function(e){var a=!n.props.navCollapsed;(0,n.props.handleToggleCollapsedNav)(a)},t))}var t,n,o;return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.props.history,a=T()("#body");u.a.AutoCloseMobileNav&&e.listen(function(e){setTimeout(function(){a.removeClass("sidebar-mobile-open")},0)})}},{key:"render",value:function(){var e=this.props,a=e.navCollapsed,t=e.colorOption,n=null;return n=a?r.a.createElement("i",{className:"material-icons"},"radio_button_unchecked"):r.a.createElement("i",{className:"material-icons"},"radio_button_checked"),r.a.createElement("nav",{className:m()("app-sidebar",{"bg-color-light":["31","32","33","34","35","36"].indexOf(t)>=0,"bg-color-dark":["31","32","33","34","35","36"].indexOf(t)<0})},r.a.createElement("section",{className:m()("sidebar-header",{"bg-color-dark":["11","31"].indexOf(t)>=0,"bg-color-light":"21"===t,"bg-color-primary":["12","22","32"].indexOf(t)>=0,"bg-color-success":["13","23","33"].indexOf(t)>=0,"bg-color-info":["14","24","34"].indexOf(t)>=0,"bg-color-warning":["15","25","35"].indexOf(t)>=0,"bg-color-danger":["16","26","36"].indexOf(t)>=0})},r.a.createElement(p.a,{to:"/",className:"brand"},u.a.brand),r.a.createElement("a",{href:z.a.link,className:"collapsednav-toggler",onClick:this.onToggleCollapsedNav},n)),r.a.createElement("section",{className:"sidebar-content"},r.a.createElement(Q,null)),r.a.createElement("section",{className:"sidebar-footer"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:z.a.fb_support},r.a.createElement("i",{className:"nav-icon material-icons"},"help"),r.a.createElement("span",{className:"nav-text"},r.a.createElement("span",null,"Help")," & ",r.a.createElement("span",null,"Support")))))))}}])&&Z(t.prototype,n),o&&Z(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");Y(e.prototype,a&&a.prototype),a&&Y(e,a)}(a,e),a}(r.a.Component),te=Object(N.a)(Object(i.connect)(function(e){return{navCollapsed:e.settings.navCollapsed,colorOption:e.settings.colorOption}},function(e){return{handleToggleCollapsedNav:function(a){e(function(e){return{type:B.e,isNavCollapsed:e}}(a))}}})(ae));function ne(e){return(ne="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,a){return(re=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function oe(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ce(e,a){return!a||"object"!==ne(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function le(e){return(le=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ie=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),ce(this,le(a).apply(this,arguments))}var t,n,o;return t=a,(n=[{key:"render",value:function(){return r.a.createElement("section",{className:"app-footer"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("span",{className:"float-left"},r.a.createElement("span",null,"Copyright \xa9 ",r.a.createElement("a",{className:"brand",target:"_blank",href:z.a.productLink},u.a.brand)," ",u.a.year)),r.a.createElement("span",{className:"float-right"},r.a.createElement("span",null,"Built with Love ",r.a.createElement("i",{className:"material-icons"},"favorite_border")))))}}])&&oe(t.prototype,n),o&&oe(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");re(e.prototype,a&&a.prototype),a&&re(e,a)}(a,e),a}(r.a.Component),se=t(548);function me(e){return(me="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,a){return(pe=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function ue(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function fe(e,a){return!a||"object"!==me(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function he(e){return(he=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var be=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return fe(n,(t=n=fe(this,(e=he(a)).call.apply(e,[this].concat(o))),n.onColorChange=function(e){(0,n.props.handleChange)(e.target.value)},t))}var t,n,o;return t=a,(n=[{key:"render",value:function(){var e=this.props.colorOption;return r.a.createElement("section",null,r.a.createElement("h4",{className:"section-header"},"Color Options"),r.a.createElement("p",{className:"small m-0"},'Tip: Additionally, you can activate "Full Width Header" option above'),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"11",checked:"11"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-dark item-header"}),r.a.createElement("span",{className:"bg-white item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"12",checked:"12"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-primary item-header"}),r.a.createElement("span",{className:"bg-white item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"13",checked:"13"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-success item-header"}),r.a.createElement("span",{className:"bg-white item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"14",checked:"14"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-info item-header"}),r.a.createElement("span",{className:"bg-white item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"15",checked:"15"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-warning item-header"}),r.a.createElement("span",{className:"bg-white item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"16",checked:"16"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-danger item-header"}),r.a.createElement("span",{className:"bg-white item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"})))),r.a.createElement("div",{className:"col-4"},r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"21",checked:"21"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-white item-header"}),r.a.createElement("span",{className:"bg-white item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"22",checked:"22"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-primary item-header"}),r.a.createElement("span",{className:"bg-primary item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"23",checked:"23"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-success item-header"}),r.a.createElement("span",{className:"bg-success item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"24",checked:"24"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-info item-header"}),r.a.createElement("span",{className:"bg-info item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"25",checked:"25"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-warning item-header"}),r.a.createElement("span",{className:"bg-warning item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"26",checked:"26"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-danger item-header"}),r.a.createElement("span",{className:"bg-danger item-header"}),r.a.createElement("span",{className:"bg-dark"}),r.a.createElement("span",{className:"bg-page"})))),r.a.createElement("div",{className:"col-4"},r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"31",checked:"31"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-dark item-header"}),r.a.createElement("span",{className:"bg-dark item-header"}),r.a.createElement("span",{className:"bg-white"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"32",checked:"32"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-primary item-header"}),r.a.createElement("span",{className:"bg-primary item-header"}),r.a.createElement("span",{className:"bg-white"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"33",checked:"33"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-success item-header"}),r.a.createElement("span",{className:"bg-success item-header"}),r.a.createElement("span",{className:"bg-white"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"34",checked:"34"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-info item-header"}),r.a.createElement("span",{className:"bg-info item-header"}),r.a.createElement("span",{className:"bg-white"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"35",checked:"35"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-warning item-header"}),r.a.createElement("span",{className:"bg-warning item-header"}),r.a.createElement("span",{className:"bg-white"}),r.a.createElement("span",{className:"bg-page"}))),r.a.createElement("label",{className:"color-option-check"},r.a.createElement("input",{type:"radio",name:"color",value:"36",checked:"36"===e,onChange:this.onColorChange}),r.a.createElement("span",{className:"color-option-item bg-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement(se.a,{icon:"check"})),r.a.createElement("span",{className:"bg-danger item-header"}),r.a.createElement("span",{className:"bg-danger item-header"}),r.a.createElement("span",{className:"bg-white"}),r.a.createElement("span",{className:"bg-page"}))))))}}])&&ue(t.prototype,n),o&&ue(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");pe(e.prototype,a&&a.prototype),a&&pe(e,a)}(a,e),a}(r.a.Component),de=Object(i.connect)(function(e){return{colorOption:e.settings.colorOption}},function(e){return{handleChange:function(a){e(function(e){return{type:B.a,colorOption:e}}(a))}}})(be);function ye(e){return(ye="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ge(e,a){return(ge=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function Ee(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ve(e,a){return!a||"object"!==ye(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function Ne(e){return(Ne=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ke=function(e){function a(){var e,t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return ve(n,(t=n=ve(this,(e=Ne(a)).call.apply(e,[this].concat(o))),n.onChange=function(e){(0,n.props.handleChange)(e.target.value)},t))}var t,n,o;return t=a,(n=[{key:"render",value:function(){var e=this.props.theme;return r.a.createElement("section",null,r.a.createElement("h4",{className:"section-header"},"Theme Options"),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"row m-0 theme-options clearfix"},r.a.createElement("div",{className:"col-4"},r.a.createElement("label",{className:"theme-option-check"},r.a.createElement("input",{type:"radio",name:"theme",value:"dark",checked:"dark"===e,onChange:this.onChange}),r.a.createElement("span",{className:"theme-option-item bg-color-dark"},r.a.createElement("span",{className:"overlay"},r.a.createElement("span",{className:"material-icons"},"check")),r.a.createElement("span",null,"Dark")))),r.a.createElement("div",{className:"col-4"},r.a.createElement("label",{className:"theme-option-check"},r.a.createElement("input",{type:"radio",name:"theme",value:"gray",checked:"gray"===e,onChange:this.onChange}),r.a.createElement("span",{className:"theme-option-item bg-color-gray"},r.a.createElement("span",{className:"overlay"},r.a.createElement("span",{className:"material-icons"},"check")),r.a.createElement("span",null,"Gray")))),r.a.createElement("div",{className:"col-4"},r.a.createElement("label",{className:"theme-option-check"},r.a.createElement("input",{type:"radio",name:"theme",value:"light",checked:"light"===e,onChange:this.onChange}),r.a.createElement("span",{className:"theme-option-item bg-color-page"},r.a.createElement("span",{className:"overlay"},r.a.createElement("span",{className:"material-icons"},"check")),r.a.createElement("span",null,"Light"))))))}}])&&Ee(t.prototype,n),o&&Ee(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");ge(e.prototype,a&&a.prototype),a&&ge(e,a)}(a,e),a}(r.a.Component),Ce=Object(i.connect)(function(e){return{theme:e.settings.theme}},function(e){return{handleChange:function(a){e(function(e){return{type:B.c,theme:e}}(a))}}})(ke);function we(e){return(we="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oe(e,a){return(Oe=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function _e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Se(e,a){return!a||"object"!==we(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function je(e){return(je=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var xe=function(e){function a(){var e;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),(e=Se(this,je(a).call(this))).toggleCustomizer=function(a,t){a.preventDefault(),t?e.setState({isVisible:!1}):e.setState({isVisible:!e.state.isVisible})},e.state={isVisible:u.a.showCustomizer},e}var t,n,o;return t=a,(n=[{key:"componentDidMount",value:function(){var e=this.quickview;T()(e).slimscroll({height:"100%"})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{id:"quickview-customizer",className:m()("quickview-wrapper customizer d-none d-lg-block d-xl-block theme-light",{"quickview-open-customizer":this.state.isVisible})},r.a.createElement("a",{className:"customizer-close",href:z.a.link,onClick:function(a){return e.toggleCustomizer(a,!0)}},r.a.createElement("span",{className:"material-icons"},"close")),r.a.createElement("a",{className:"customizer-toggle",href:z.a.link,onClick:function(a){return e.toggleCustomizer(a)}},r.a.createElement("span",{className:"material-icons"},"settings")),r.a.createElement("div",{className:"quickview-inner",ref:function(a){e.quickview=a}},r.a.createElement("p",{className:"customizer-header"},"Customizer"),r.a.createElement("p",{className:"small m-0"},"Customize and preview in real time."),r.a.createElement("div",{className:"divider my-4 divider-solid"}),r.a.createElement(de,null),r.a.createElement("div",{className:"divider my-4 divider-solid"}),r.a.createElement(Ce,null),r.a.createElement("div",{className:"divider my-4 divider-solid"})))}}])&&_e(t.prototype,n),o&&_e(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");Oe(e.prototype,a&&a.prototype),a&&Oe(e,a)}(a,e),a}(r.a.Component),Pe=t(117);function Te(e){return(Te="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ze(e,a){return(ze=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function Re(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ae(e,a){return!a||"object"!==Te(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function De(e){return(De=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var qe=l()({loader:function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,522))},loading:Pe.a}),Le=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),Ae(this,De(a).apply(this,arguments))}var t,n,c;return t=a,(n=[{key:"render",value:function(){var e=this.props.match;return r.a.createElement("div",{className:"main-app-container"},r.a.createElement(te,this.props),r.a.createElement("section",{id:"page-container",className:"app-page-container"},r.a.createElement(V,this.props),r.a.createElement("div",{className:"app-content-wrapper"},r.a.createElement("div",{className:"app-content"},r.a.createElement("div",{className:"h-100"},r.a.createElement(o.a,{path:"".concat(e.url,"/table"),component:qe}))),r.a.createElement(ie,null))),r.a.createElement(xe,null))}}])&&Re(t.prototype,n),c&&Re(t,c),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");ze(e.prototype,a&&a.prototype),a&&ze(e,a)}(a,e),a}(r.a.Component);a.default=Le},548:function(e,a,t){"use strict";t.d(a,"a",function(){return f});var n=t(0),r=t.n(n),o=t(5),c=t.n(o);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function s(e,a){return(s=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function m(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,a){return!a||"object"!==l(a)&&"function"!==typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function u(e){return(u=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var f=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),p(this,u(a).apply(this,arguments))}var t,n,o;return t=a,(n=[{key:"render",value:function(){var e=this.props,a=e.icon,t=i(e,["icon"]);return r.a.createElement(h,Object.assign({icon:a},t))}}])&&m(t.prototype,n),o&&m(t,o),function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");s(e.prototype,a&&a.prototype),a&&s(e,a)}(a,e),a}(r.a.Component),h=function(e){var a=e.className,t=e.icon,n=i(e,["className","icon"]),o=c()("material-icons",a);return r.a.createElement("i",Object.assign({className:o},n),t)};f.defaultProps={icon:""},h.defaultProps={icon:"",className:""}}}]);
//# sourceMappingURL=2.d3770bd4.chunk.js.map