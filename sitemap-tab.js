var minpage = 6;
var maxpage = 10;
var firstpage = 0;
var pagernum = 0;
var postsnum = 0;
var actualpage = 1;

document.write('<div id="toc-outer"><div id="results"></div><div id="itempager" style="position:relative;"><div id="pagination"></div><div id="totalposts"></div><a title="Antoncabon" style="display:block!important;visibility:visible!important;opacity:1!important;position:absolute;bottom:10px;right:14px;font:normal bold 9px Arial,Sans-Serif!important;color:orange;text-shadow:0 1px 0 rgba(255,255,255,.1);text-decoration:none;" href="http://www.antoncabon.us">&#9658; Get This</a></div></div>');

var _results = document.getElementById('results');
var _pagination = document.getElementById('pagination');
var _totalposts = document.getElementById('totalposts');

function showPagePosts(json) {
    var entry, posttitle, posturl, postimg, postsumm, replies, monthnames, timepub, output = "";
    if (pagernum === 0) {
        postsnum = parseInt(json.feed.openSearch$totalResults.$t);
        pagernum = parseInt(postsnum / postPerPage) + 1;
    }

    for (var i = 0; i < postPerPage; i++) {
		if ("entry" in json.feed) {
			if (i == json.feed.entry.length) break;
			entry = json.feed.entry[i];
			posttitle = entry.title.$t;
			for (var k = 0, elen = entry.link.length; k < elen; k++) {
				if (entry.link[k].rel == "alternate") {
					posturl = entry.link[k].href;
					break;
				}
			}
			for (var l = 0, clen = entry.link.length; l < clen; l++) {
				if (entry.link[l].rel == "replies" && entry.link[l].type == "text/html") {
					var commentsnum = entry.link[l].title.split(" ")[0];
					break;
				}
			}

			postsumm = ("summary" in entry) ? entry.summary.$t.replace(/<br ?\/?>/ig, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "") : "";
			if (postsumm.length > numChars) {
				postsumm = (numChars > 0 && numChars !== false) ? postsumm.substring(0, numChars) + '...' : "";
			}
			var _postdate = entry.published.$t,
				_cdyear = _postdate.substring(0, 4),
				_cdmonth = _postdate.substring(5, 7),
				_cdday = _postdate.substring(8, 10);
			monthnames = (idMode) ? ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"] : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
			timepub = (showPostDate) ? _cdday + ' ' + monthnames[parseInt(_cdmonth, 10) - 1] + ' ' + _cdyear + ' - ' : '';
			replies = (showComments) ? commentsnum + ' ' + commentsLabel : '';
			postimg = ("media$thumbnail" in entry) ? entry.media$thumbnail.url : imgBlank;
			output += '<div class="itemposts">';
			output += '<h6><a href="' + posturl + '" title="' + posttitle + '">' + posttitle + '</a></h6>';
			output += '<div class="iteminside"><a href="' + posturl + '"><img src="' + postimg + '" /></a>';
			output += '<span class="summary">' + postsumm + '</span></div>';
			output += '<div style="clear:both;"></div><div class="itemfoot">' + timepub + replies + '<a class="itemrmore" href="' + posturl + '">' + rmoreText + '</a></div>';
			output += '</div>';
		}
    }
    _results.innerHTML = output;
    _create_pagination();
}

function _create_pagination() {
    output = "";
    var starter = 0;
  output += ((actualpage > 1) ? '<a title="' + prevText + '" class="prevjson" href="javascript:_init_script(' + (actualpage - 1) + ')">' + prevText + '</a>' : '<span class="prevjson hidden">' + prevText + '</span>') + '<em style="font:inherit;color:inherit;" class="pagernumber">';
    if (pagernum < (maxpage + 1)) {
        for (starter = 1; starter <= pagernum; starter++) {
            output += (starter == actualpage) ? '<span class="actual">' + starter + '</span>' : '<a href="javascript:_init_script(' + starter + ')">' + starter + '</a>';
        }
    } else if (pagernum > (maxpage - 1)) {
        if (actualpage < minpage) {
            for (starter = 1; starter < (maxpage - 2); starter++) {
                output += (starter == actualpage) ? '<span class="actual">' + starter + '</span>' : '<a href="javascript:_init_script(' + starter + ')">' + starter + '</a>';
            }
            output += ' ... ';
            output += '<a href="javascript:_init_script(' + parseInt(pagernum - 1) + ')">' + parseInt(pagernum - 1) + '</a>';
            output += '<a href="javascript:_init_script(' + pagernum + ')">' + pagernum + '</a>';
        } else if (pagernum - (minpage - 1) > actualpage && actualpage > (minpage - 1)) {
            output += '<a href="javascript:_init_script(1)">1</a>';
            output += '<a href="javascript:_init_script(2)">2</a>';
            output += ' ... ';
            for (starter = actualpage - 2; starter <= actualpage + 2; starter++) {
                output += (starter == actualpage) ? '<span class="actual">' + starter + '</span>' : '<a href="javascript:_init_script(' + starter + ')">' + starter + '</a>';
            }
            output += ' ... ';
            output += '<a href="javascript:_init_script(' + (pagernum - 1) + ')">' + parseInt(pagernum - 1) + '</a>';
            output += '<a href="javascript:_init_script(' + pagernum + ')">' + pagernum + '</a>';
        } else {
            output += '<a href="javascript:_init_script(1)">1</a>';
            output += '<a href="javascript:_init_script(2)">2</a>';
            output += ' ... ';
            for (starter = pagernum - (minpage + 1); starter <= pagernum; starter++) {
                output += (starter == actualpage) ? '<span class="actual">' + starter + '</span>' : '<a href="javascript:_init_script(' + starter + ')">' + starter + '</a>';
            }
        }
    }
    output += '</em>' + ((actualpage < starter - 1) ? '<a title="' + nextText + '" class="nextjson" href="javascript:_init_script(' + (actualpage + 1) + ')">' + nextText + '</a>' : '<span class="nextjson hidden">' + nextText + '</span>');
    _pagination.innerHTML = output;
	_totalposts.innerHTML = totalPostLabel + ' ' + postsnum + ' - ' + jumpPageLabel + ' ' + ((actualpage * postPerPage) - (postPerPage - 1)) + ((actualpage < starter - 1) ? ' - ' + (actualpage * postPerPage) : "");
}

function _init_script(n) {
    var parameter = (n * postPerPage) - (postPerPage - 1), old, s,
		head = document.getElementsByTagName('head')[0],
		url = (sortByLabel) ? siteUrl + '/feeds/posts/summary/-/' + labelSorter + '?start-index=' + parameter : siteUrl + '/feeds/posts/summary?start-index=' + parameter;
    if (firstpage == 1) {
		document.documentElement.scrollTop = _results.offsetTop - 30;
		document.body.scrollTop = _results.offsetTop - 30;
        old = document.getElementById("TEMPORAL");
        old.parentNode.removeChild(old);
    }
    _results.innerHTML = '<div id="loadingscript">' + loadingText + '</div>';
    _pagination.innerHTML = '';
    _totalposts.innerHTML = '';
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = url + '&max-results=' + postPerPage + '&orderby=published&alt=json-in-script&callback=showPagePosts';
    s.id = 'TEMPORAL';
    head.appendChild(s);
    firstpage = 1;
    actualpage = n;
}
window.onload = function() {
    _init_script(1);
};
