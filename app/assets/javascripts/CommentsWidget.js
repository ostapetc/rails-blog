(function($) {
    $.widget('os.commentsWidget', {
       options : {

       },
       _create : function() {
           var $form = $('#' + this.element.data('form'));
           var that  = this;

           $form.bind('ajax:success', function(status, data) {
               that.clearErrors();
               that._render(function() {
                    location.href = '#comment-' + data.id;
                   $form.find('textarea').val('');
               });
           });

           $form.bind('ajax:error', function(xhr, status, error) {
               that.clearErrors();
               var errors = $.parseJSON(status.responseText);
               $('#new_comment').prepend("<div id='errors-div' class='alert alert-error'>" + errors.join("<br>") + "</div>");
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
       },

       clearErrors: function() {
           $('#errors-div').remove();
       }
    });
})(jQuery);

$(function() {
    $('#comments-widget').commentsWidget();
});

