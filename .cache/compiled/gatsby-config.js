!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof i[o]&&i[o],a=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,n){if(!a[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(s)return s(t,!0);if(l&&"string"==typeof t)return l(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},c.cache={};var p=a[t]=new u.Module(t);e[t][0].call(p.exports,c,p,p.exports,this)}return a[t].exports;function c(e){var t=c.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=s,u.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return i[o]}}),i[o]=u;for(var f=0;f<t.length;f++)u(t[f]);if(n){var p=u(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof define&&define.amd&&define((function(){return p}))}}({itce5:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);const o={siteMetadata:{title:"AlvbarrosDevBlog",siteUrl:"https://www.alvbarros.dev"},graphqlTypegen:!0,plugins:["gatsby-plugin-emotion","gatsby-plugin-image","gatsby-plugin-sitemap",{resolve:"gatsby-plugin-manifest",options:{icon:"src/images/icon.png"}},"gatsby-transformer-sharp",{resolve:"gatsby-plugin-sharp",options:{defaults:{},failOn:"warning"}},{resolve:"gatsby-source-filesystem",options:{name:"images",path:`${e("b5a055af15b92493").resolve(__dirname,"../..")}/src/images/`},__key:"images"},"gatsby-plugin-sass",{resolve:"gatsby-plugin-react-svg",options:{rule:{include:"/src/images/"}}},{resolve:"gatsby-plugin-google-fonts",options:{fonts:["Raleway","Red Hat Display"],display:"swap"}}]};n.default=o},{b5a055af15b92493:"path",path:"path","@parcel/transformer-js/src/esmodule-helpers.js":"kmjAC"}],kmjAC:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["itce5"],"itce5","parcelRequirec5ef");