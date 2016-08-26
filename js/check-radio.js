(function ($, undefined) {
    $.fn.extend({
        checkRadio: function () {
            var $this = $(this);

            $this.parent().addClass('styled');

            $('input[type="checkbox"]:checked, input[type="radio"]:checked').parent().addClass('checked');
            $('input[type="checkbox"]:disabled, input[type="radio"]:disabled').parent().addClass('disabled');

            $('input[type="checkbox"]').change(function () {
                if ($(this).prop('checked')) {
                    $(this).parent().addClass('checked');
                } else {
                    $(this).parent().removeClass('checked');
                }
            });

            $('input[type="radio"]').change(function () {
                var name = $(this).attr('name');
                if ($(this).prop('checked')) {
                    $('input[name="' + name + '"]').parent().removeClass('checked');
                    $(this).parent().addClass('checked');
                }
            });
        }
    });
}(jQuery) );
