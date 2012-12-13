(function($) {
    $.fn.transformRailsPagination = function() {
        this.find('a').each(function() {
            $(this).wrap('<li>');
        });

        this.find('em').replaceWith(function() {
            return "<li class='active'><a>" + $(this).text() + "</a></li>"
        });

        this.find('span.disabled').replaceWith(function() {
            return "<li class='disabled'><a>" + $(this).text() + "</a></li>";
        });

        this.wrapInner('<ul>');
    }
})(jQuery);