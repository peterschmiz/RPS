(function(a,y){function f(a){B[B.length]=a}function p(a){t.className=t.className.replace(new RegExp(" ?\\b"+a+"\\b"),"")}function q(a,f){for(var b=0,t=a.length;b<t;b++)f.call(a,a[b],b)}function u(){var e,c,g;t.className=t.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");e=a.innerWidth||t.clientWidth;c=a.outerWidth||a.screen.width;k.screen.innerWidth=e;k.screen.outerWidth=c;f("w-"+e);q(b.screens,function(a){e>a?(b.screensCss.gt&&f("gt-"+a),b.screensCss.gte&&
f("gte-"+a)):e<a?(b.screensCss.lt&&f("lt-"+a),b.screensCss.lte&&f("lte-"+a)):e===a&&(b.screensCss.lte&&f("lte-"+a),b.screensCss.eq&&f("e-q"+a),b.screensCss.gte&&f("gte-"+a))});c=a.innerHeight||t.clientHeight;g=a.outerHeight||a.screen.height;k.screen.innerHeight=c;k.screen.outerHeight=g;k.feature("portrait",c>e);k.feature("landscape",c<e)}function w(){a.clearTimeout(e);e=a.setTimeout(u,50)}var n=a.document,c=a.navigator,v=a.location,t=n.documentElement,B=[],b={screens:[240,320,480,640,768,800,1024,
1280,1440,1680,1920],screensCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!1},browsers:[{ie:{min:6,max:11}}],browserCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!0},html5:!0,page:"-page",section:"-section",head:"head"},g,k,x,F,r,l,z,e;if(a.head_conf)for(g in a.head_conf)a.head_conf[g]!==y&&(b[g]=a.head_conf[g]);k=a[b.head]=function(){k.ready.apply(null,arguments)};k.feature=function(a,b,e){return a?("[object Function]"===Object.prototype.toString.call(b)&&(b=b.call()),f((b?"":"no-")+a),k[a]=!!b,e||(p("no-"+a),p(a),k.feature()),
k):(t.className+=" "+B.join(" "),B=[],k)};k.feature("js",!0);g=c.userAgent.toLowerCase();c=/mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(g);k.feature("mobile",c,!0);k.feature("desktop",!c,!0);g=/(chrome|firefox)[ \/]([\w.]+)/.exec(g)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(g)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(g)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(g)||/(msie) ([\w.]+)/.exec(g)||/(trident).+rv:(\w.)+/.exec(g)||[];c=g[1];g=parseFloat(g[2]);
switch(c){case "msie":case "trident":c="ie";g=n.documentMode||g;break;case "firefox":c="ff";break;case "ipod":case "ipad":case "iphone":c="ios";break;case "webkit":c="safari"}k.browser={name:c,version:g};k.browser[c]=!0;x=0;for(F=b.browsers.length;x<F;x++)for(r in b.browsers[x])if(c===r)for(f(r),l=b.browsers[x][r].min,z=b.browsers[x][r].max;l<=z;l++)g>l?(b.browserCss.gt&&f("gt-"+r+l),b.browserCss.gte&&f("gte-"+r+l)):g<l?(b.browserCss.lt&&f("lt-"+r+l),b.browserCss.lte&&f("lte-"+r+l)):g===l&&(b.browserCss.lte&&
f("lte-"+r+l),b.browserCss.eq&&f("eq-"+r+l),b.browserCss.gte&&f("gte-"+r+l));else f("no-"+r);f(c);f(c+parseInt(g,10));b.html5&&"ie"===c&&9>g&&q("abbr article aside audio canvas details figcaption figure footer header hgroup main mark meter nav output progress section summary time video".split(" "),function(a){n.createElement(a)});q(v.pathname.split("/"),function(a,e){if(2<this.length&&this[e+1]!==y)e&&f(this.slice(e,e+1).join("-").toLowerCase()+b.section);else{var c=a||"index",g=c.indexOf(".");0<
g&&(c=c.substring(0,g));t.id=c.toLowerCase()+b.page;e||f("root"+b.section)}});k.screen={height:a.screen.height,width:a.screen.width};u();e=0;a.addEventListener?a.addEventListener("resize",w,!1):a.attachEvent("onresize",w)})(window);
(function(a,y){function f(a){var c=a.charAt(0).toUpperCase()+a.substr(1),b;a:{a=(a+" "+w.join(c+" ")+c).split(" ");for(b in a)if(q[a[b]]!==y){b=!0;break a}b=!1}return!!b}var p=a.document.createElement("i"),q=p.style,u=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),w=["Webkit","Moz","O","ms","Khtml"],n=a[a.head_conf&&a.head_conf.head||"head"],c={gradient:function(){return q.cssText=("background-image:"+u.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));background-image:")+u.join("linear-gradient(left top,#eee,#fff);background-image:")).slice(0,
-17),!!q.backgroundImage},rgba:function(){return q.cssText="background-color:rgba(0,0,0,0.5)",!!q.backgroundColor},opacity:function(){return""===p.style.opacity},textshadow:function(){return""===q.textShadow},multiplebgs:function(){q.cssText="background:url(https://),url(https://),red url(https://)";var a=(q.background||"").match(/url/g);return"[object Array]"===Object.prototype.toString.call(a)&&3===a.length},boxshadow:function(){return f("boxShadow")},borderimage:function(){return f("borderImage")},
borderradius:function(){return f("borderRadius")},cssreflections:function(){return f("boxReflect")},csstransforms:function(){return f("transform")},csstransitions:function(){return f("transition")},touch:function(){return"ontouchstart"in a},retina:function(){return 1<a.devicePixelRatio},fontface:function(){var a=n.browser.version;switch(n.browser.name){case "ie":return 9<=a;case "chrome":return 13<=a;case "ff":return 6<=a;case "ios":return 5<=a;case "android":return!1;case "webkit":return 5.1<=a;
case "opera":return 10<=a;default:return!1}}},v;for(v in c)c[v]&&n.feature(v,c[v].call(),!0);n.feature()})(window);
(function(a,y){function f(){}function p(A,a){if(A){"object"==typeof A&&(A=[].slice.call(A));for(var s=0,b=A.length;s<b;s++)a.call(A,A[s],s)}}function q(a,d){var s=Object.prototype.toString.call(d).slice(8,-1);return d!==y&&null!==d&&s===a}function u(a){return q("Function",a)}function w(a){return q("Array",a)}function n(a){(a=a||f,a._done)||(a(),a._done=1)}function c(a){var d={},s,b;if("object"==typeof a)for(s in a)!a[s]||(d={name:s,url:a[s]});else d=a.split("/"),d=d[d.length-1],s=d.indexOf("?"),d=
{name:-1!==s?d.substring(0,s):d,url:a};return(b=E[d.name],b&&b.url===d.url)?b:(E[d.name]=d,d)}function v(a){a=a||E;for(var d in a)if(a.hasOwnProperty(d)&&a[d].state!==G)return!1;return!0}function t(a){a.state=N;p(a.onpreload,function(a){a.call()})}function B(a){a.state===y&&(a.state=J,a.onpreload=[],F({url:a.url,type:"cache"},function(){t(a)}))}function b(){var a=arguments,d=a[a.length-1],b=[].slice.call(a,1),e=b[0];return(u(d)||(d=null),w(a[0]))?(a[0].push(d),h.load.apply(null,a[0]),h):(e?(p(b,function(a){u(a)||
!a||B(c(a))}),k(c(a[0]),u(e)?e:function(){h.load.apply(null,b)})):k(c(a[0])),h)}function g(){var a=arguments,d=a[a.length-1],b={};return(u(d)||(d=null),w(a[0]))?(a[0].push(d),h.load.apply(null,a[0]),h):(p(a,function(a){a!==d&&(a=c(a),b[a.name]=a)}),p(a,function(a){a!==d&&(a=c(a),k(a,function(){v(b)&&n(d)}))}),h)}function k(a,d){(d=d||f,a.state===G)?d():a.state===K?h.ready(a.name,d):a.state===J?a.onpreload.push(function(){k(a,d)}):(a.state=K,F(a,function(){a.state=G;d();p(D[a.name],function(a){n(a)});
C&&v()&&p(D.ALL,function(a){n(a)})}))}function x(a){a=(a||"").split("?")[0].split(".");return a[a.length-1].toLowerCase()}function F(b,d){function c(a){m.onload=m.onreadystatechange=m.onerror=null;d()}function g(c){c=c||a.event;("load"===c.type||/loaded|complete/.test(m.readyState)&&(!e.documentMode||9>e.documentMode))&&(a.clearTimeout(b.errorTimeout),a.clearTimeout(b.cssTimeout),m.onload=m.onreadystatechange=m.onerror=null,d())}function h(){if(b.state!==G&&20>=b.cssRetries){for(var d=0,c=e.styleSheets.length;d<
c;d++)if(e.styleSheets[d].href===m.href){g({type:"load"});return}b.cssRetries++;b.cssTimeout=a.setTimeout(h,250)}}var m,k;d=d||f;"css"===x(b.url)?(m=e.createElement("link"),m.type="text/"+(b.type||"css"),m.rel="stylesheet",m.href=b.url,b.cssRetries=0,b.cssTimeout=a.setTimeout(h,500)):(m=e.createElement("script"),m.type="text/"+(b.type||"javascript"),m.src=b.url);m.onload=m.onreadystatechange=g;m.onerror=c;m.async=!1;m.defer=!1;b.errorTimeout=a.setTimeout(function(){c({type:"timeout"})},7E3);k=e.head||
e.getElementsByTagName("head")[0];k.insertBefore(m,k.lastChild)}function r(){for(var a,d=e.getElementsByTagName("script"),b=0,c=d.length;b<c;b++)if(a=d[b].getAttribute("data-headjs-load"),a){h.load(a);break}}function l(){e.body?C||(C=!0,r(),p(I,function(a){n(a)})):(a.clearTimeout(h.readyTimeout),h.readyTimeout=a.setTimeout(l,50))}function z(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",z,!1),l()):"complete"===e.readyState&&(e.detachEvent("onreadystatechange",z),l())}var e=a.document,
I=[],D={},E={},M="async"in e.createElement("script")||"MozAppearance"in e.documentElement.style||a.opera,C,L=a.head_conf&&a.head_conf.head||"head",h=a[L]=a[L]||function(){h.ready.apply(null,arguments)},J=1,N=2,K=3,G=4,H;if("complete"===e.readyState)l();else if(e.addEventListener)e.addEventListener("DOMContentLoaded",z,!1),a.addEventListener("load",l,!1);else{e.attachEvent("onreadystatechange",z);a.attachEvent("onload",l);H=!1;try{H=!a.frameElement&&e.documentElement}catch(O){}H&&H.doScroll&&function d(){if(!C){try{H.doScroll("left")}catch(b){a.clearTimeout(h.readyTimeout);
h.readyTimeout=a.setTimeout(d,50);return}l()}}()}h.load=h.js=M?g:b;h.test=function(a,b,c,e){a="object"==typeof a?a:{test:a,success:b?w(b)?b:[b]:!1,failure:c?w(c)?c:[c]:!1,callback:e||f};b=!!a.test;return b&&a.success?(a.success.push(a.callback),h.load.apply(null,a.success)):b||!a.failure?e():(a.failure.push(a.callback),h.load.apply(null,a.failure)),h};h.ready=function(a,b){var c,f,g;return a===e?(C?n(b):I.push(b),h):(u(a)&&(b=a,a="ALL"),w(a))?(c={},p(a,function(a){c[a]=E[a];h.ready(a,function(){v(c)&&
n(b)})}),h):"string"==typeof a&&u(b)?(f=E[a],f&&f.state===G||"ALL"===a&&v()&&C)?(n(b),h):(g=D[a],g?g.push(b):g=D[a]=[b],h):h};h.ready(e,function(){v()&&p(D.ALL,function(a){n(a)});h.feature&&h.feature("domloaded",!0)})})(window);
