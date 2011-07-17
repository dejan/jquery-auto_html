(function($) {

  $.fn.link = function() {
    return this.each(function() {
      var text = $(this).html();
      var regex = /((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g;
      var html = text.replace(regex, '<a href="$1">$1</a> ') 
      $(this).html(html);
    });
  }

  $.fn.image = function() {
    return this.each(function() {
      var text = $(this).html();
      var regex = /http:\/\/.+\.(jpg|jpeg|bmp|gif|png)(\?\S+)?/gi
      var html = text.replace(regex, "<img src='$&' alt=''/>");
      $(this).html(html);
    });
  }

  $.fn.youtube = function(options) {
    return this.each(function() {
      var options = $.extend({width:390, height:250}, options);
      var text = $(this).html();
      var regex = /http:\/\/(www.)?youtube\.com\/watch\?v=([A-Za-z0-9._%-]*)(\&\S+)?/
      var html = text.replace(regex, '<iframe class="youtube-player" type="text/html" width="' + options.width + '" height="' + options.height + '" src="http://www.youtube.com/embed/$2" frameborder="0"></iframe>');
      $(this).html(html);
    });
  }

  $.fn.simpleFormat = function() {
    return this.each(function() {
      var text = $(this).html();
      var text = text.replace(/\n{2,}/g, '</p><p>');
      var text = text.replace(/\n/g, '<br/>');
      var text = '<p>' + text + '</p>';
      $(this).html(text);
    });
  }

})(jQuery);