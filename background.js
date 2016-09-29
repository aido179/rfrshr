var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-84918034-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

chrome.commands.onCommand.addListener(function(command) {

  chrome.storage.local.get("definedURL", function(result){
    if(result.definedURL!=undefined){
      chrome.tabs.update({url:'http://'+result.definedURL});
      _gaq.push(['_trackEvent', 'refresh', result.definedURL]);
    }else{
      chrome.tabs.update({url:'http://i.imgur.com/Jl1wSJi.jpg'});
    }
  });

});
