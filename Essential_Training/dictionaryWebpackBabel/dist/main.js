!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=require("express")},function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return c}),n.d(t,"a",function(){return s});var r=n(3),o=n.n(r),u=n(4),i=n.n(u),c=function(t){o.a.writeFile(i.a.join(e,"..","data","skiTerms.json"),JSON.stringify(t,null,2),function(e){if(e)throw e})},s=function(e,t,n){console.log("".concat(e.method," request for ").concat(e.url)),Object.keys(e.body).length&&console.log(e.body),n()}}).call(this,"/")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e){e.exports=[{term:"Powder",defined:"Deep light fluffy white snow"},{term:"Chowder",defined:"Hard chunky snow"}]},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),u=n(2),i=n.n(u),c=n(1),s=n(5),f=new r.Router;f.get("/",function(e,t){t.json(s)}),f.post("/",function(e,t){s.push(e.body),Object(c.b)(s),t.json({status:"success",term:e.body})}),f.delete("/:term",function(e,t){s=s.filter(function(t){return t.term!==e.params.term}),Object(c.b)(s),t.json({status:"success",removed:e.params.term,newLength:s.length})});var a=f,l=o()();l.use(i.a.json()),l.use(c.a),l.use(o.a.static("./client")),l.use("/dictionary",a),l.listen(3e3,function(){console.log("Ski Dictionary at http://localhost:3000")})}]);