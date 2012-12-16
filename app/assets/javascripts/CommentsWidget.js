(function($) {
    $.widget('os.commentsWidget', {
       options : {

       },

       _create : function() {
           var $form = $('#' + this.element.data('form'));

           $form.bind('ajax:success', function(status, data) {
               console.log(data);
           });

           this._render();
       },

       _render: function() {
           var el = this.element;
           el.html("Загрузка комментариев");

           $.get('/comments?page_id=' + el.data('page'), function(res) {
               el.html(res);
           });
       }

    });
})(jQuery);

$(function() {
    $('#comments-widget').commentsWidget();
});

