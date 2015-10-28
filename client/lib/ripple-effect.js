(function(window, $) {

    $(function() {


        $('.ripple').on('click', function(event) {
            event.preventDefault();
            var targetOffset = $(this).offset()
            var $div = $('<div/>'),
                xPos = event.pageX - targetOffset.left,
                yPos = event.pageY - targetOffset.top;

            $div.addClass('ripple-effect');
            $ripple = $('.ripple-effect');

            $div
                .css({
                    bottom: yPos + 25,
                    left: xPos - (25),
                    background: $(this).data("ripple-color")
                })
                .appendTo($(this));
            window.setTimeout(function() {
                $div.remove();
            }, 2000);
        });

    });

})(window, jQuery);