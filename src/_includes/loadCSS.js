function onloadCSS(ss,callback){ss.onload=function(){ss.onload=null,callback&&callback.call(ss)},"isApplicationInstalled"in navigator&&"onloadcssdefined"in ss&&ss.onloadcssdefined(callback)}function loadCSS(href,before,media,callback){"use strict";var ss=window.document.createElement("link"),ref=before||window.document.getElementsByTagName("script")[0],sheets=window.document.styleSheets;return ss.rel="stylesheet",ss.href=href,ss.media="only x",callback&&(ss.onload=callback),ref.parentNode.insertBefore(ss,ref),ss.onloadcssdefined=function(cb){for(var defined,i=0;i<sheets.length;i++)sheets[i].href&&sheets[i].href===ss.href&&(defined=!0);defined?cb():setTimeout(function(){ss.onloadcssdefined(cb)})},ss.onloadcssdefined(function(){ss.media=media||"all"}),ss}
