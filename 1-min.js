$(document).ready(function(){var b=$("#resp-menu");var a=$(".menu");$(b).on("click",function(c){c.preventDefault();a.slideToggle()});$(window).resize(function(){var c=$(window).width();if(c>767&&a.is(":hidden")){a.removeAttr("style")}})});$(function(){$(".searchbutton").on("click",function(){$("#search").addClass("active").find(".search").focus()});$("#search").on("click",function(){$(this).find(".search").focus()});$("#close").on("click",function(){$("#search").removeClass("active")})});(function(b){b.fn.lightBox=function(v){v=jQuery.extend({overlayBgColor:"#151515",overlayOpacity:0.6,fixedNavigation:true,imageLoading:"http://3.bp.blogspot.com/-BbfO2TakpeI/VBpAarxCJeI/AAAAAAAAGYc/K2aLB_DuOvI/s1600/loading.gif",imageBtnPrev:"http://3.bp.blogspot.com/-JGND9bP-lUw/VBpAbJXYN1I/AAAAAAAAGYU/ToXBXPcWAXA/s1600/next-image2.png",imageBtnNext:"http://3.bp.blogspot.com/-mRqZHLP6DmQ/VBpAah779LI/AAAAAAAAGYM/UJUWudqQ45E/s1600/next-image1.png",imageBtnClose:"http://1.bp.blogspot.com/-5D4Z1sJCL8Y/VBpAaU61ckI/AAAAAAAAGYI/XzoT9CvqWI0/s1600/close-imagewhite.png",imageBlank:"http://3.bp.blogspot.com/-1ju4NhcwXZY/VAIMANGR1uI/AAAAAAAABPc/iLik6Vso6pg/s1600/blank.gif",containerBorderSize:10,containerResizeSpeed:300,txtImage:"Image",txtOf:"of",keyToClose:"c",keyToPrev:"p",keyToNext:"n",imageArray:[],activeImage:0},v);var C=this;function t(){w(this,C);return false}function w(c,d){b("embed, object, select").css({visibility:"hidden"});I();v.imageArray.length=0;v.activeImage=0;if(d.length==1){v.imageArray.push(new Array(c.getAttribute("href"),c.getAttribute("title")))}else{for(var e=0;e<d.length;e++){v.imageArray.push(new Array(d[e].getAttribute("href"),d[e].getAttribute("title")))}}while(v.imageArray[v.activeImage][0]!=c.getAttribute("href")){v.activeImage++}z()}function I(){b("body").append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="'+v.imageLoading+'"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="'+v.imageBtnClose+'"></a></div></div></div></div>');var d=F();b("#jquery-overlay").css({backgroundColor:v.overlayBgColor,opacity:v.overlayOpacity,width:d[0],height:d[1]}).fadeIn();var c=D();b("#jquery-lightbox").css({top:c[1]+(d[3]/10),left:c[0]}).show();b("#jquery-overlay,#jquery-lightbox").click(function(){J()});b("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(){J();return false});b(window).resize(function(){var f=F();b("#jquery-overlay").css({width:f[0],height:f[1]});var e=D();b("#jquery-lightbox").css({top:e[1]+(f[3]/10),left:e[0]})})}function z(){b("#lightbox-loading").show();if(v.fixedNavigation){b("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide()}else{b("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide()}var c=new Image();c.onload=function(){b("#lightbox-image").attr("src",v.imageArray[v.activeImage][0]);B(c.width,c.height);c.onload=function(){}};c.src=v.imageArray[v.activeImage][0]}function B(e,i){var h=b("#lightbox-container-image-box").width();var j=b("#lightbox-container-image-box").height();var d=(e+(v.containerBorderSize*2));var f=(i+(v.containerBorderSize*2));var g=h-d;var c=j-f;b("#lightbox-container-image-box").animate({width:d,height:f},v.containerResizeSpeed,function(){E()});if((g==0)&&(c==0)){if(b.browser.msie){x(250)}else{x(100)}}b("#lightbox-container-image-data-box").css({width:e});b("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({height:i+(v.containerBorderSize*2)})}function E(){b("#lightbox-loading").hide();b("#lightbox-image").fadeIn(function(){A();a()});u()}function A(){b("#lightbox-container-image-data-box").slideDown("fast");b("#lightbox-image-details-caption").hide();if(v.imageArray[v.activeImage][1]){b("#lightbox-image-details-caption").html(v.imageArray[v.activeImage][1]).show()}if(v.imageArray.length>1){b("#lightbox-image-details-currentNumber").html(v.txtImage+" "+(v.activeImage+1)+" "+v.txtOf+" "+v.imageArray.length).show()}}function a(){b("#lightbox-nav").show();b("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({background:"transparent url("+v.imageBlank+") no-repeat"});if(v.activeImage!=0){if(v.fixedNavigation){b("#lightbox-nav-btnPrev").css({background:"url("+v.imageBtnPrev+") left 15% no-repeat"}).unbind().bind("click",function(){v.activeImage=v.activeImage-1;z();return false})}else{b("#lightbox-nav-btnPrev").unbind().hover(function(){b(this).css({background:"url("+v.imageBtnPrev+") left 15% no-repeat"})},function(){b(this).css({background:"transparent url("+v.imageBlank+") no-repeat"})}).show().bind("click",function(){v.activeImage=v.activeImage-1;z();return false})}}if(v.activeImage!=(v.imageArray.length-1)){if(v.fixedNavigation){b("#lightbox-nav-btnNext").css({background:"url("+v.imageBtnNext+") right 15% no-repeat"}).unbind().bind("click",function(){v.activeImage=v.activeImage+1;z();return false})}else{b("#lightbox-nav-btnNext").unbind().hover(function(){b(this).css({background:"url("+v.imageBtnNext+") right 15% no-repeat"})},function(){b(this).css({background:"transparent url("+v.imageBlank+") no-repeat"})}).show().bind("click",function(){v.activeImage=v.activeImage+1;z();return false})}}y()}function y(){b(document).keydown(function(c){H(c)})}function G(){b(document).unbind()}function H(c){if(c==null){keycode=event.keyCode;escapeKey=27}else{keycode=c.keyCode;escapeKey=c.DOM_VK_ESCAPE}key=String.fromCharCode(keycode).toLowerCase();if((key==v.keyToClose)||(key=="x")||(keycode==escapeKey)){J()}if((key==v.keyToPrev)||(keycode==37)){if(v.activeImage!=0){v.activeImage=v.activeImage-1;z();G()}}if((key==v.keyToNext)||(keycode==39)){if(v.activeImage!=(v.imageArray.length-1)){v.activeImage=v.activeImage+1;z();G()}}}function u(){if((v.imageArray.length-1)>v.activeImage){objNext=new Image();objNext.src=v.imageArray[v.activeImage+1][0]}if(v.activeImage>0){objPrev=new Image();objPrev.src=v.imageArray[v.activeImage-1][0]}}function J(){b("#jquery-lightbox").remove();b("#jquery-overlay").fadeOut(function(){b("#jquery-overlay").remove()});b("embed, object, select").css({visibility:"visible"})}function F(){var d,f;if(window.innerHeight&&window.scrollMaxY){d=window.innerWidth+window.scrollMaxX;f=window.innerHeight+window.scrollMaxY}else{if(document.body.scrollHeight>document.body.offsetHeight){d=document.body.scrollWidth;f=document.body.scrollHeight}else{d=document.body.offsetWidth;f=document.body.offsetHeight}}var e,c;if(self.innerHeight){if(document.documentElement.clientWidth){e=document.documentElement.clientWidth}else{e=self.innerWidth}c=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){e=document.documentElement.clientWidth;c=document.documentElement.clientHeight}else{if(document.body){e=document.body.clientWidth;c=document.body.clientHeight}}}if(f<c){pageHeight=c}else{pageHeight=f}if(d<e){pageWidth=d}else{pageWidth=e}arrayPageSize=new Array(pageWidth,pageHeight,e,c);return arrayPageSize}function D(){var c,d;if(self.pageYOffset){d=self.pageYOffset;c=self.pageXOffset}else{if(document.documentElement&&document.documentElement.scrollTop){d=document.documentElement.scrollTop;c=document.documentElement.scrollLeft}else{if(document.body){d=document.body.scrollTop;c=document.body.scrollLeft}}}arrayPageScroll=new Array(c,d);return arrayPageScroll}function x(c){var d=new Date();e=null;do{var e=new Date()}while(e-d<c)}return this.unbind("click").click(t)}})(jQuery);$(document).ready(function(){$("a[href$=jpg]:has(img)").lightBox();$("a[href$=jpeg]:has(img)").lightBox();$("a[href$=png]:has(img)").lightBox();$("a[href$=gif]:has(img)").lightBox();$("a[href$=bmp]:has(img)").lightBox()});(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{a(jQuery)}}(function(d){d.timeago=function(h){if(h instanceof Date){return a(h)}else{if(typeof h==="string"){return a(d.timeago.parse(h))}else{if(typeof h==="number"){return a(new Date(h))}else{return a(d.timeago.datetime(h))}}}};var g=d.timeago;d.extend(d.timeago,{settings:{refreshMillis:60000,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(n){if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var o=this.settings.strings;var k=o.prefixAgo;var s=o.suffixAgo;if(this.settings.allowFuture){if(n<0){k=o.prefixFromNow;s=o.suffixFromNow}}if(!this.settings.allowPast&&n>=0){return this.settings.strings.inPast}var q=Math.abs(n)/1000;var h=q/60;var p=h/60;var r=p/24;var l=r/365;function j(t,v){var u=d.isFunction(t)?t(v,n):t;var w=(o.numbers&&o.numbers[v])||v;return u.replace(/%d/i,w)}var m=q<45&&j(o.seconds,Math.round(q))||q<90&&j(o.minute,1)||h<45&&j(o.minutes,Math.round(h))||h<90&&j(o.hour,1)||p<24&&j(o.hours,Math.round(p))||p<42&&j(o.day,1)||r<30&&j(o.days,Math.round(r))||r<45&&j(o.month,1)||r<365&&j(o.months,Math.round(r/30))||l<1.5&&j(o.year,1)||j(o.years,Math.round(l));var i=o.wordSeparator||"";if(o.wordSeparator===undefined){i=" "}return d.trim([k,m,s].join(i))},parse:function(i){var h=d.trim(i);h=h.replace(/\.\d+/,"");h=h.replace(/-/,"/").replace(/-/,"/");h=h.replace(/T/," ").replace(/Z/," UTC");h=h.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");h=h.replace(/([\+\-]\d\d)$/," $100");return new Date(h)},datetime:function(i){var h=g.isTime(i)?d(i).attr("datetime"):d(i).attr("title");return g.parse(h)},isTime:function(h){return d(h).get(0).tagName.toLowerCase()==="time"}});var e={init:function(){var i=d.proxy(c,this);i();var h=g.settings;if(h.refreshMillis>0){this._timeagoInterval=setInterval(i,h.refreshMillis)}},update:function(h){var i=g.parse(h);d(this).data("timeago",{datetime:i});if(g.settings.localeTitle){d(this).attr("title",i.toLocaleString())}c.apply(this)},updateFromDOM:function(){d(this).data("timeago",{datetime:g.parse(g.isTime(this)?d(this).attr("datetime"):d(this).attr("title"))});c.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null}}};d.fn.timeago=function(j,h){var i=j?e[j]:e.init;if(!i){throw new Error("Unknown function name '"+j+"' for timeago")}this.each(function(){i.call(this,h)});return this};function c(){if(!d.contains(document.documentElement,this)){d(this).timeago("dispose");return this}var i=b(this);var h=g.settings;if(!isNaN(i.datetime)){if(h.cutoff==0||Math.abs(f(i.datetime))<h.cutoff){d(this).text(a(i.datetime))}}return this}function b(h){h=d(h);if(!h.data("timeago")){h.data("timeago",{datetime:g.datetime(h)});var i=d.trim(h.text());if(g.settings.localeTitle){h.attr("title",h.data("timeago").datetime.toLocaleString())}else{if(i.length>0&&!(g.isTime(h)&&h.attr("title"))){h.attr("title",i)}}}return h.data("timeago")}function a(h){return g.inWords(f(h))}function f(h){return(new Date().getTime()-h.getTime())}document.createElement("abbr");document.createElement("time")}));