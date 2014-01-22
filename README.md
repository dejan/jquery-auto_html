jquery.auto_html.js
===================

jQuery port of Rails' extension [auto_html](http://github.com/dejan/auto_html)

## Example usage

Given this comment div:

    <div class="comment">
    http://gogreece2014.com/wp-content/uploads/2013/09/mykonos8.jpg

    And you will go to Mykonos
    With a vision of a gentle coast
    And a sun to maybe dissipate
    Shadows of the mess you made

    http://www.youtube.com/watch?v=DT-dxG4WWf4
    </div>
 
and this script:

    <script type="text/javascript">
      $('.comment')
        .simpleFormat()
        .image()
        .youtube({width:500, height:400})
        .link();
    </script>


The comment div will be transformed to this:

    <p><img src="http://gogreece2014.com/wp-content/uploads/2013/09/mykonos8.jpg" alt="" width="500px"></p><p>And you will go to Mykonos<br>With a vision of a gentle coast<br>And a sun to maybe dissipate<br>Shadows of the mess you made</p><p><iframe class="youtube-player" type="text/html" width="500" height="400" src="http://www.youtube.com/embed/DT-dxG4WWf4" frameborder="0"></iframe>
  

## Credits

Author: [Dejan Simic](http://github.com/dejan)
