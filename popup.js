function message(val){
  $(".message").text(val);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-84918034-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

$(document).ready(function(){
  //set input to previously saved value
  chrome.storage.local.get("definedURL", function(result){
    if(result.definedURL!=undefined){
      $(".urlinput").attr("placeholder",result.definedURL);
    }else{
      $(".urlinput").attr("placeholder","type url here...");
    }
  });

  //handle update
  $(".urlbutton").click(function(){
    $(".message").text($(".urlinput").val());
    chrome.storage.local.set({'definedURL': $(".urlinput").val()}, function() {
          // Notify that we saved.
          message('Settings saved');
          _gaq.push(['_trackEvent', 'url_updated', $(".urlinput").val()]);
        });

  });

  //allow update when enter is pressed
  $('input').keypress(function (e) {
    if (e.which == 13) {
      $(".urlbutton").click();
      return false;
    }
  });
});
