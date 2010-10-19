jquery.auto_html.js
===================

JQuery port of Rails' extension [auto_html](http://github.com/dejan/auto_html)

## Example usage

    <script type="text/javascript">
      $('.comment').each(function(){
        $(this).simpleFormat();
        $(this).image();
        $(this).youtube({width:500, height:400});
        $(this).link();
      })
    </script>

## Credits

Author: [Dejan Simic](http://github.com/dejan)