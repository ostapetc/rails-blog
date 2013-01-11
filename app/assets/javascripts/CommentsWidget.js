(function($) {
    $.widget('os.commentsWidget', {
       options : {

       },

       _create : function() {
           var $form = $('#' + this.element.data('form'));
           var that  = this;

           $form.bind('ajax:success', function(status, data) {
               that._render(function() {
                    location.href = '#comment-' + data.id;
                   $form.find('textarea').val('');
               });
           });

           $form.bind('ajax:error', function(xhr, status, error) {
               var errors = $.parseJSON(status.responseText);
               alert(errors.join("\n"))
           });

           this._render();
       },

       _render: function(callback) {
           var el = this.element;
           $.get('/comments?page_id=' + el.data('page'), function(res) {
               el.html(res);

               if (callback != undefined) {
                   callback();
               }
           });
       }

    });
})(jQuery);

$(function() {
    $('#comments-widget').commentsWidget();
});

