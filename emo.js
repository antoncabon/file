// navigasi
$("#navinti ul, #topnav ul, .menu-xitem .xitem1 #labelxnya").removeClass("hidden");$("#navinti li, #topnav li").hoverTimeout(100,function(){$(this).children("ul").filter(":not(:animated)").slideDown()},500,function(){$(this).children("ul").slideUp(800,"easeInExpo")});$("#navinti li.dgnssub").hoverTimeout(100,function(){$(this).parent("ul").css("overflow","visible")},500,function(){$(this).parent("ul").css("overflow","visible")});$(".menu-xitem .xitem1").hoverTimeout(100,function(){$("#labelxnya",this).filter(":not(:animated)").slideDown()},500,function(){$("#labelxnya",this).slideUp(800,"easeInExpo")});$("ul#topnav").clone().appendTo("#navmobitop");$("ul#navinti").clone().appendTo("#navmobi");$("#navmobi ul, #navmobitop ul").removeAttr("id");$("#mobilenavtop").toggle(function(){$(this).addClass("active");$("#navmobitop .menuhlng").slideDown();return false},function(){$(this).removeClass("active");$("#navmobitop .menuhlng").slideUp();return false});$("#mobilenav").toggle(function(){$(this).addClass("active");$("#navmobi .menunav").slideDown();return false},function(){$(this).removeClass("active");$("#navmobi .menunav").slideUp();return false});$("#navmobitop li, #navmobi li").hoverTimeout(100,function(){$(this).children("ul").filter(":not(:animated)").slideDown()},500,function(){$(this).children("ul").slideUp(800,"easeInExpo")});
  
// Back to top
$(window).scroll(function(){if($(this).scrollTop()>100){$("#backtop").removeAttr("href");$("#backtop").stop().animate({bottom:"-3",right:"0"},{duration:800,queue:false})}else{$("#backtop").stop().animate({bottom:"-50",right:"0"},{duration:1000,queue:false})}});$(function(){$("#backtop").click(function(){$("html, body").animate({scrollTop:0},"slow");return false})});

// Hello World
// zmaxs.blogspot.com emo-tion slow

$(function() {

        // Append an emoticon bar before comment-form
        if (putEmoAbove) {
                $(putEmoAbove).before('<div class="emoWrap"> :) :( =( :waaa: ^_^ :D ^:D ;) :-bd :yaya: :&#39;( T_T :p B) :Q &#92;o/ &#92;m/ &lt;3 *fck* x@ ~x( :bye: :cendol: *bang* </div>');
        }
        function emo(emo, imgRep, emoKey) {
                $(emoRange).each(function() {
                        $(this).html($(this).html()
                        .replace(/<br>(:|;|=|\^)/g, "<br> $1")
                        .replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
                });
        }
        emo(/\s:\)+/g, "https://sites.google.com/site/zmaxsimages/css/smile.gif", ":)");
        emo(/\s;\)+/g, "https://sites.google.com/site/zmaxsimages/css/wink.gif", ";)");
        emo(/\s:\(/g, "https://sites.google.com/site/zmaxsimages/css/sad.gif", ":(");
        emo(/\s=\(/g, "https://sites.google.com/site/zmaxsimages/css/sadanimated.gif", "=(");
        emo(/\s:yaya:/ig, "https://sites.google.com/site/zmaxsimages/css/yaya.gif", ":yaya:");
        emo(/\s:D/g, "https://sites.google.com/site/zmaxsimages/css/haha.gif", ":D");
        emo(/\s\^:D/g, "https://sites.google.com/site/zmaxsimages/css/abovemehaha.gif", "^:D");
        emo(/\s\^(\_|)\^/g, "https://sites.google.com/site/zmaxsimages/css/senyum-tulus.gif", "^_^");
        emo(/\s:'\(/g, "https://sites.google.com/site/zmaxsimages/css/cry.gif", ":&#39;(");
        emo(/\s:waaa:/g, "https://sites.google.com/site/zmaxsimages/css/wawa.gif", ":waaa:");
        emo(/\sT_T/ig, "https://sites.google.com/site/zmaxsimages/css/tears.gif", "T_T");
        emo(/\sB\)/g, "https://sites.google.com/site/zmaxsimages/css/cool.gif", "B)");
        emo(/\s:Q/ig, "https://sites.google.com/site/zmaxsimages/css/smoking.gif", ":Q");
        emo(/\s:p/ig, "https://sites.google.com/site/zmaxsimages/css/wee.gif", ":p");
        emo(/\s\\o\//ig, "https://sites.google.com/site/zmaxsimages/css/applause.gif", "&#92;o/");
        emo(/\s\\m\//ig, "https://sites.google.com/site/zmaxsimages/css/metal.gif", "&#92;m/");
        emo(/\s&lt;3/ig, "https://sites.google.com/site/zmaxsimages/css/love.gif", "&amp;amp;lt;3");
        emo(/\s\*fck\*/ig, "https://sites.google.com/site/zmaxsimages/css/fuck.gif", "*fck*");
        emo(/\sx\@/g, "https://sites.google.com/site/zmaxsimages/css/marahbesar.gif", "x@");
        emo(/\s:-bd/ig, "https://sites.google.com/site/zmaxsimages/css/topmarkotop.gif", ":-bd");
        emo(/\s\~x\(+/ig, "https://sites.google.com/site/zmaxsimages/css/ugh.gif", "~x(");
        emo(/\s:bye:/ig, "https://sites.google.com/site/zmaxsimages/css/bye.gif", ":bye:");
        emo(/\s:cendol:/ig, "https://sites.google.com/site/zmaxsimages/css/cendol.gif", ":cendol:");
        emo(/\s\*bang\*/ig, "https://sites.google.com/site/zmaxsimages/css/bang.gif", "*bang*");

         // by zmaxs
        // Show alert one times!
        $('.emoWrap').one("click", function() {
                if(emoMessage) {
                        alert(emoMessage);
                }
        });
        // Click to show the code!
       // zmaxs.blogspot.com
        $('.emo').css('cursor', 'pointer').live("click", function(e) {
                $('.emoKey').remove();
                $(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
                $('.emoKey').trigger("select");
                e.stopPropagation();
        });
        $(document).on("click", function() {
                $('.emoKey').remove();
        });

});
  
// Related Post responsive
function relatedPostsWidget(a){(function(e){var f={blogURL:"",maxPosts:5,maxTags:5,maxPostsPerTag:5,containerSelector:"",tags:null,loadingText:"",loadingClass:"",relevantTip:"",relatedTitle:"Related Posts",rlpBlank:"http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif",rlt_thumb:70,rlt_monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],recentTitle:"Recent Posts",postScoreClass:"",onLoad:false};f=e.extend({},f,a);var k=0,b=null,g=null;if(!f.containerSelector){document.write('<div id="related-postsx"></div>');f.containerSelector="#related-postsx"}var c=function(y,o){k++;if(y.feed.entry){for(var p=0;p<y.feed.entry.length;p++){var v=y.feed.entry[p];var r="";for(var n=0;n<v.link.length;n++){if(v.link[n].rel=="alternate"){r=v.link[n].href;break}}var q=v.published.$t.substring(0,10);var m=q.substring(0,4);var x=q.substring(5,7);var t=q.substring(8,10);var s=f.rlt_monthNames[parseInt(x,10)-1];var z=v.thr$total.$t;var l=v.author[0].name.$t;var u=v.title.$t;if("media$thumbnail" in v){var w=v.media$thumbnail.url.replace(/\/s[0-9]+\-c/g,"/s"+f.rlt_thumb+"-c")}else{var w=f.rlpBlank}if(location.href.toLowerCase()!=r.toLowerCase()){i(r,u,w,m,t,z,s,l)}}}if(k>=f.tags.length){g.attr("class","");e("#related-posts-loadingtext",b).remove();if(f.maxPosts>0){e("li:gt("+(f.maxPosts-1)+")",g).remove()}}};var i=function(q,w,x,m,u,y,s,l){var r=e("li",g);for(var p=0;p<r.length;p++){var v=e("a",r.eq(p));var t=j(v);if(v.attr("href")==q){h(v,++t);for(var o=p-1;o>=0;o--){var n=e("a",r.eq(o));if(j(n)>t){if(p-o>1){r.eq(o).after(r.eq(p))}return}}if(p>0){r.eq(0).before(r.eq(p))}return}}g.append('<li><a href="'+q+'" title="'+(f.relevantTip?f.relevantTip.replace("\d",1):"")+'"><span><div class="overlayb"></div><img alt="'+w+'" src="'+x+'"/></span><strong>'+w+'</strong></a><div class="infonya"><span class="dt">'+u+" "+s+" "+m+'</span><span class="auty">'+l+'</span><span class="jkmt">'+y+"</span></div></li>")};var j=function(l){var m=parseInt(l.attr("score"));return m>0?m:1};var h=function(l,m){l.attr("score",m);if(f.relevantTip){l.attr("title",f.relevantTip.replace("\d",m))}if(f.postScoreClass){l.attr("class",f.postScoreClass+m)}};var d=function(){if(f.containerSelector!="#related-postsx"){var l=e(f.containerSelector);if(l.length!=1){return}b=e('<div id="related-postsx"></div>').appendTo(l)}else{b=e(f.containerSelector)}if(!f.tags){f.tags=[];e('a[rel="tag"]:lt('+f.maxTags+")").each(function(){var n=e.trim(e(this).text().replace(/\n/g,""));if(e.inArray(n,f.tags)==-1){f.tags[f.tags.length]=n}})}if(f.tags.length==0&&!f.recentTitle){return}if(f.tags.length==0){e("<h4>"+f.recentTitle+"</h4>").appendTo(b)}else{if(f.relatedTitle){e("<h4>"+f.relatedTitle+"</h4>").appendTo(b)}}if(f.loadingText){e('<div id="related-posts-loadingtext">'+f.loadingText+"</div>").appendTo(b)}g=e("<ul "+(f.loadingClass?'class="'+f.loadingClass+'"':"")+"></ul>").appendTo(b);if(f.tags.length==0){e.ajax({url:f.blogURL+"/feeds/posts/summary/",data:{"max-results":f.maxPostsPerTag,alt:"json-in-script"},success:c,dataType:"jsonp",cache:true})}else{for(var m=0;m<f.tags.length;m++){e.ajax({url:f.blogURL+"/feeds/posts/summary/",data:{category:f.tags[m],"max-results":f.maxPostsPerTag,alt:"json-in-script"},success:c,dataType:"jsonp",cache:true})}}};if(f.onLoad){e(window).load(d)}else{e(document).ready(d)}})(jQuery)};
