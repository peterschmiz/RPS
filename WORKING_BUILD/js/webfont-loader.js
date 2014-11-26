(function(ma,V,v){function s(a){return function(){return this[a]}}function W(a,b){var c=a.split("."),d=z;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function na(a,b,c){return a.call.apply(a.bind,arguments)}function oa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);
return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function x(a,b,c){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?na:oa;return x.apply(h,arguments)}function X(a,b){this.G=a;this.v=b||a;this.z=this.v.document}function Y(a,b,c){(a=a.z.getElementsByTagName(b)[0])||(a=V.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function B(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var g=n,f=0;f<d.length;f+=
1)if(b[e]===d[f]){g=r;break}g||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){g=n;for(f=0;f<c.length;f+=1)if(d[e]===c[f]){g=r;break}g||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function Z(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return r;return n}function D(a){var b=a.v.location.protocol;"about:"==b&&(b=a.G.location.protocol);return"https:"==b?"https:":"http:"}function $(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b}),
d=n;c.onload=function(){d||(d=r)};c.onerror=function(){d||(d=r)};Y(a,"head",c)}function L(a,b,c,d){var e=a.z.getElementsByTagName("head")[0];if(e){var g=a.createElement("script",{src:b}),f=n;g.onload=g.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=r,c&&c(h),g.onload=g.onreadystatechange=h,"HEAD"==g.parentNode.tagName&&e.removeChild(g))};e.appendChild(g);ma.setTimeout(function(){f||(f=r,c&&c(Error("Script load timeout")))},d||5E3);return g}return h}
function p(a,b,c){this.M=a;this.U=b;this.Aa=c}function w(a,b,c,d){this.d=a!=h?a:h;this.o=b!=h?b:h;this.aa=c!=h?c:h;this.f=d!=h?d:h}function q(a){a=pa.exec(a);var b=h,c=h,d=h,e=h;a&&(a[1]!==h&&a[1]&&(b=parseInt(a[1],10)),a[2]!==h&&a[2]&&(c=parseInt(a[2],10)),a[3]!==h&&a[3]&&(d=parseInt(a[3],10)),a[4]!==h&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new w(b,c,d,e)}function k(a,b,c,d,e,g,f,l,M,h,k){this.K=a;this.Ga=b;this.za=c;this.fa=d;this.Ea=e;this.ea=g;this.wa=f;this.Fa=l;this.va=
M;this.da=h;this.j=k}function N(a,b){this.a=a;this.I=b}function A(a){var b=m(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=m(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}function E(a){var b=m(a.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=m(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=m(a.a,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=m(a.a,/(?:Linux|CrOS) ([^;)]+)/,
1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=m(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}function ba(a){var b=A(a),c=E(a),d=q(c),e=m(a.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1),g=q(e),f="Unknown",l=new w,h="Unknown",aa=n;/OPR\/[\d.]+/.test(a.a)?f="Opera":-1!=a.a.indexOf("Chrome")||-1!=a.a.indexOf("CrMo")||-1!=a.a.indexOf("CriOS")?f="Chrome":/Silk\/\d/.test(a.a)?f="Silk":"BlackBerry"==b||"Android"==b?f="BuiltinBrowser":-1!=a.a.indexOf("PhantomJS")?
f="PhantomJS":-1!=a.a.indexOf("Safari")?f="Safari":-1!=a.a.indexOf("AdobeAIR")&&(f="AdobeAIR");"BuiltinBrowser"==f?h="Unknown":"Silk"==f?h=m(a.a,/Silk\/([\d\._]+)/,1):"Chrome"==f?h=m(a.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.a.indexOf("Version/")?h=m(a.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==f?h=m(a.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==f?h=m(a.a,/OPR\/([\d.]+)/,1):"PhantomJS"==f&&(h=m(a.a,/PhantomJS\/([\d.]+)/,1));l=q(h);aa="AdobeAIR"==f?2<l.d||2==l.d&&5<=l.o:"BlackBerry"==b?10<=d.d:"Android"==
b?2<d.d||2==d.d&&1<d.o:526<=g.d||525<=g.d&&13<=g.o;return new k(f,l,h,"AppleWebKit",g,e,b,d,c,F(a.I),new p(aa,536>g.d||536==g.d&&11>g.o,"iPhone"==b||"iPad"==b||"iPod"==b||"Macintosh"==b))}function m(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function F(a){if(a.documentMode)return a.documentMode}function ca(a){this.ua=a||"-"}function t(a,b){this.K=a;this.V=4;this.L="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.L=c[1],this.V=parseInt(c[2],10))}function u(a){return a.L+a.V}function qa(a){var b=
4,c="n",d=h;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b}function ra(a,b,c){this.c=a;this.m=b;this.O=c;this.h="wf";this.g=new ca("-")}function O(a){var b=Z(a.m,a.g.f(a.h,"active")),c=[],d=[a.g.f(a.h,"loading")];b||c.push(a.g.f(a.h,"inactive"));B(a.m,c,d);C(a,"inactive")}function C(a,b,c){if(a.O[b])if(c)a.O[b](c.getName(),
u(c));else a.O[b]()}function sa(){this.w={}}function G(a,b){this.c=a;this.C=b;this.s=this.c.createElement("span",{"aria-hidden":"true"},this.C)}function P(a,b){var c;c=[];for(var d=b.K.split(/,\s*/),e=0;e<d.length;e++){var g=d[e].replace(/['"]/g,"");-1==g.indexOf(" ")?c.push(g):c.push("'"+g+"'")}c=c.join(",");d="normal";e=b.V+"00";"o"===b.L?d="oblique":"i"===b.L&&(d="italic");a.s.style.cssText="display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+
c+";"+("font-style:"+d+";font-weight:"+e+";")}function Q(a){Y(a.c,"body",a.s)}function da(a,b,c,d,e,g,f,l){this.W=a;this.sa=b;this.c=c;this.q=d;this.C=l||"BESbswy";this.j=e;this.F={};this.T=g||5E3;this.Z=f||h;this.B=this.A=h;a=new G(this.c,this.C);Q(a);for(var k in y)y.hasOwnProperty(k)&&(P(a,new t(y[k],u(this.q))),this.F[y[k]]=a.s.offsetWidth);a.remove()}function ea(a,b,c){for(var d in y)if(y.hasOwnProperty(d)&&b===a.F[y[d]]&&c===a.F[y[d]])return r;return n}function fa(a){var b=a.A.s.offsetWidth,
c=a.B.s.offsetWidth;b===a.F.serif&&c===a.F["sans-serif"]||a.j.U&&ea(a,b,c)?ga()-a.xa>=a.T?a.j.U&&ea(a,b,c)&&(a.Z===h||a.Z.hasOwnProperty(a.q.getName()))?R(a,a.W):R(a,a.sa):setTimeout(x(function(){fa(this)},a),25):R(a,a.W)}function R(a,b){a.A.remove();a.B.remove();b(a.q)}function S(a,b,c,d){this.c=b;this.t=c;this.P=0;this.ba=this.Y=n;this.T=d;this.j=a.j}function ha(a,b,c,d,e){if(0===b.length&&e)O(a.t);else for(a.P+=b.length,e&&(a.Y=e),e=0;e<b.length;e++){var g=b[e],f=c[g.getName()],l=a.t,h=g;B(l.m,
[l.g.f(l.h,h.getName(),u(h).toString(),"loading")]);C(l,"fontloading",h);(new da(x(a.ga,a),x(a.ha,a),a.c,g,a.j,a.T,d,f)).start()}}function ia(a){0==--a.P&&a.Y&&(a.ba?(a=a.t,B(a.m,[a.g.f(a.h,"active")],[a.g.f(a.h,"loading"),a.g.f(a.h,"inactive")]),C(a,"active")):O(a.t))}function T(a){this.G=a;this.u=new sa;this.ya=new N(a.navigator.userAgent,a.document);this.a=this.ya.parse();this.Q=this.R=0}function H(a,b){this.c=a;this.e=b;this.k=[]}function I(a,b){this.c=a;this.e=b;this.k=[]}function U(a,b){this.c=
a;this.e=b}function ja(a,b,c){this.N=a?a:b+ta;this.p=[];this.S=[];this.ca=c||""}function ka(a){this.p=a;this.$=[];this.J={}}function J(a,b){this.a=(new N(navigator.userAgent,V)).parse();this.c=a;this.e=b}function K(a,b){this.c=a;this.e=b;this.k=[]}var r=!0,h=null,n=!1,z=this,ga=Date.now||function(){return+new Date};X.prototype.createElement=function(a,b,c){a=this.z.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.z.createTextNode(c));
return a};W("webfont.BrowserInfo",p);p.prototype.pa=s("M");p.prototype.hasWebFontSupport=p.prototype.pa;p.prototype.qa=s("U");p.prototype.hasWebKitFallbackBug=p.prototype.qa;p.prototype.ra=s("Aa");p.prototype.hasWebKitMetricsBug=p.prototype.ra;var pa=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;w.prototype.toString=function(){return[this.d,this.o||"",this.aa||"",this.f||""].join("")};W("webfont.UserAgent",k);k.prototype.getName=s("K");k.prototype.getName=k.prototype.getName;
k.prototype.oa=s("za");k.prototype.getVersion=k.prototype.oa;k.prototype.ka=s("fa");k.prototype.getEngine=k.prototype.ka;k.prototype.la=s("ea");k.prototype.getEngineVersion=k.prototype.la;k.prototype.ma=s("wa");k.prototype.getPlatform=k.prototype.ma;k.prototype.na=s("va");k.prototype.getPlatformVersion=k.prototype.na;k.prototype.ja=s("da");k.prototype.getDocumentMode=k.prototype.ja;k.prototype.ia=s("j");k.prototype.getBrowserInfo=k.prototype.ia;var ua=new k("Unknown",new w,"Unknown","Unknown",new w,
"Unknown","Unknown",new w,"Unknown",void 0,new p(n,n,n));N.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){a=A(this);var b=E(this),c=q(b),d=h,e=h,g=h,f=h,l=m(this.a,/Trident\/([\d\w\.]+)/,1),M=F(this.I),d=-1!=this.a.indexOf("MSIE")?m(this.a,/MSIE ([\d\w\.]+)/,1):m(this.a,/rv:([\d\w\.]+)/,1),e=q(d);""!=l?(g="Trident",f=q(l)):(g="Unknown",f=new w,l="Unknown");a=new k("MSIE",e,d,g,f,l,a,c,b,M,new p("Windows"==a&&6<=e.d||"Windows Phone"==a&&8<=c.d,n,n))}else-1!=
this.a.indexOf("Opera")?(a="Unknown",b=m(this.a,/Presto\/([\d\w\.]+)/,1),c=q(b),d=E(this),e=q(d),g=F(this.I),c.d!==h?a="Presto":(-1!=this.a.indexOf("Gecko")&&(a="Gecko"),b=m(this.a,/rv:([^\)]+)/,1),c=q(b)),-1!=this.a.indexOf("Opera Mini/"))?(f=m(this.a,/Opera Mini\/([\d\.]+)/,1),l=q(f),a=new k("OperaMini",l,f,a,c,b,A(this),e,d,g,new p(n,n,n))):-1!=this.a.indexOf("Version/")&&(f=m(this.a,/Version\/([\d\.]+)/,1),l=q(f),l.d!==h)?a=new k("Opera",l,f,a,c,b,A(this),e,d,g,new p(10<=l.d,n,n)):(f=m(this.a,
/Opera[\/ ]([\d\.]+)/,1),l=q(f),a=l.d!==h?new k("Opera",l,f,a,c,b,A(this),e,d,g,new p(10<=l.d,n,n)):new k("Opera",new w,"Unknown",a,c,b,A(this),e,d,g,new p(n,n,n))):/OPR\/[\d.]+/.test(this.a)?a=ba(this):/AppleWeb(K|k)it/.test(this.a)?a=ba(this):-1!=this.a.indexOf("Gecko")?(a="Unknown",b=new w,c="Unknown",d=E(this),e=q(d),g=n,-1!=this.a.indexOf("Firefox")?(a="Firefox",c=m(this.a,/Firefox\/([\d\w\.]+)/,1),b=q(c),g=3<=b.d&&5<=b.o):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),f=m(this.a,/rv:([^\)]+)/,
1),l=q(f),g||(g=1<l.d||1==l.d&&9<l.o||1==l.d&&9==l.o&&2<=l.aa||f.match(/1\.9\.1b[123]/)!=h||f.match(/1\.9\.1\.[\d\.]+/)!=h),a=new k(a,b,c,"Gecko",l,f,A(this),e,d,F(this.I),new p(g,n,n))):a=ua;return a};ca.prototype.f=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.ua)};t.prototype.getName=s("K");G.prototype.remove=function(){var a=this.s;a.parentNode&&a.parentNode.removeChild(a)};var y={Da:"serif",Ca:"sans-serif",Ba:"monospace"};
da.prototype.start=function(){this.A=new G(this.c,this.C);Q(this.A);this.B=new G(this.c,this.C);Q(this.B);this.xa=ga();P(this.A,new t(this.q.getName()+",serif",u(this.q)));P(this.B,new t(this.q.getName()+",sans-serif",u(this.q)));fa(this)};S.prototype.ga=function(a){var b=this.t;B(b.m,[b.g.f(b.h,a.getName(),u(a).toString(),"active")],[b.g.f(b.h,a.getName(),u(a).toString(),"loading"),b.g.f(b.h,a.getName(),u(a).toString(),"inactive")]);C(b,"fontactive",a);this.ba=r;ia(this)};S.prototype.ha=function(a){var b=
this.t,c=Z(b.m,b.g.f(b.h,a.getName(),u(a).toString(),"active")),d=[],e=[b.g.f(b.h,a.getName(),u(a).toString(),"loading")];c||d.push(b.g.f(b.h,a.getName(),u(a).toString(),"inactive"));B(b.m,d,e);C(b,"fontinactive",a);ia(this)};T.prototype.load=function(a){var b=a.context||this.G;this.c=new X(this.G,b);var b=new ra(this.c,b.document.documentElement,a),c=[],d=a.timeout;B(b.m,[b.g.f(b.h,"loading")]);C(b,"loading");var c=this.u,e=this.c,g=[],f;for(f in a)if(a.hasOwnProperty(f)){var l=c.w[f];l&&g.push(l(a[f],
e))}c=g;this.Q=this.R=c.length;a=new S(this.a,this.c,b,d);f=0;for(d=c.length;f<d;f++)e=c[f],e.H(this.a,x(this.ta,this,e,b,a))};T.prototype.ta=function(a,b,c,d){var e=this;d?a.load(function(a,b,d){var k=0==--e.R;setTimeout(function(){ha(c,a,b||{},d||h,k)},0)}):(a=0==--this.R,this.Q--,a&&0==this.Q&&O(b),ha(c,[],{},h,a))};H.prototype.D=function(a){return D(this.c)+(this.e.api||"//f.fontdeck.com/s/css/js/")+(this.c.v.location.hostname||this.c.G.location.hostname)+"/"+a+".js"};H.prototype.H=function(a,
b){var c=this.e.id,d=this.c.v,e=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,h=c.fonts.length;d<h;++d){var k=c.fonts[d];e.k.push(new t(k.name,qa("font-weight:"+k.weight+";font-style:"+k.style)))}b(a)},L(this.c,this.D(c),function(a){a&&b(n)})):b(n)};H.prototype.load=function(a){a(this.k)};I.prototype.D=function(a){var b=D(this.c);return(this.e.api||b+"//use.typekit.net")+"/"+a+".js"};I.prototype.H=function(a,b){var c=
this.e.id,d=this.e,e=this.c.v,g=this;c?(e.__webfonttypekitmodule__||(e.__webfonttypekitmodule__={}),e.__webfonttypekitmodule__[c]=function(c){c(a,d,function(a,c,d){for(var f=0;f<c.length;f+=1){var e=d[c[f]];if(e)for(var h=0;h<e.length;h+=1)g.k.push(new t(c[f],e[h]));else g.k.push(new t(c[f]))}b(a)})},L(this.c,this.D(c),function(a){a&&b(n)},2E3)):b(n)};I.prototype.load=function(a){a(this.k)};U.prototype.load=function(a){var b,c,d=this.e.urls||[],e=this.e.families||[],g=this.e.testStrings||{};b=0;for(c=
d.length;b<c;b++)$(this.c,d[b]);d=[];b=0;for(c=e.length;b<c;b++){var f=e[b].split(":");if(f[1])for(var h=f[1].split(","),k=0;k<h.length;k+=1)d.push(new t(f[0],h[k]));else d.push(new t(f[0]))}a(d,g)};U.prototype.H=function(a,b){return b(a.j.M)};var ta="//fonts.googleapis.com/css";ja.prototype.f=function(){if(0==this.p.length)throw Error("No fonts to load!");if(-1!=this.N.indexOf("kit="))return this.N;for(var a=this.p.length,b=[],c=0;c<a;c++)b.push(this.p[c].replace(/ /g,"+"));a=this.N+"?family="+b.join("%7C");
0<this.S.length&&(a+="&subset="+this.S.join(","));0<this.ca.length&&(a+="&text="+encodeURIComponent(this.ca));return a};var la={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},va={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",
ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},wa={i:"i",italic:"i",n:"n",normal:"n"},xa=RegExp("^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$");ka.prototype.parse=function(){for(var a=this.p.length,b=0;b<a;b++){var c=this.p[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var g,f=c[1];g=[];if(f)for(var f=f.split(","),k=f.length,n=0;n<k;n++){var m;m=f[n];if(m.match(/^[\w-]+$/)){m=xa.exec(m.toLowerCase());
var p=void 0;if(m==h)p="";else{p=m[1];if(p==h||""==p)p="4";else var q=va[p],p=q?q:isNaN(p)?"4":p.substr(0,1);p=[m[2]==h||""==m[2]?"n":wa[m[2]],p].join("")}m=p}else m="";m&&g.push(m)}0<g.length&&(e=g);3==c.length&&(c=c[2],g=[],c=c?c.split(","):g,0<c.length&&(c=la[c[0]])&&(this.J[d]=c))}this.J[d]||(c=la[d])&&(this.J[d]=c);for(c=0;c<e.length;c+=1)this.$.push(new t(d,e[c]))}};var ya={Arimo:r,Cousine:r,Tinos:r};J.prototype.H=function(a,b){b(a.j.M)};J.prototype.load=function(a){var b=this.c;if("MSIE"==
this.a.getName()&&this.e.blocking!=r){var c=x(this.X,this,a),d=function(){b.z.body?c():setTimeout(d,0)};d()}else this.X(a)};J.prototype.X=function(a){for(var b=this.c,c=new ja(this.e.api,D(b),this.e.text),d=this.e.families,e=d.length,g=0;g<e;g++){var f=d[g].split(":");3==f.length&&c.S.push(f.pop());var h="";2==f.length&&""!=f[1]&&(h=":");c.p.push(f.join(h))}d=new ka(d);d.parse();$(b,c.f());a(d.$,d.J,ya)};K.prototype.H=function(a,b){var c=this,d=c.e.projectId,e=c.e.version;if(d){var g=c.c.v;L(this.c,
c.D(d,e),function(f){if(f)b(n);else{if(g["__mti_fntLst"+d]&&(f=g["__mti_fntLst"+d]()))for(var e=0;e<f.length;e++)c.k.push(new t(f[e].fontfamily));b(a.j.M)}}).id="__MonotypeAPIScript__"+d}else b(n)};K.prototype.D=function(a,b){var c=D(this.c),d=(this.e.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};K.prototype.load=function(a){a(this.k)};v=new T(z);v.u.w.custom=function(a,b){return new U(b,a)};v.u.w.fontdeck=function(a,b){return new H(b,a)};
v.u.w.monotype=function(a,b){return new K(b,a)};v.u.w.typekit=function(a,b){return new I(b,a)};v.u.w.google=function(a,b){return new J(b,a)};z.WebFont||(z.WebFont={},z.WebFont.load=x(v.load,v),z.WebFontConfig&&v.load(z.WebFontConfig))})(this,document);