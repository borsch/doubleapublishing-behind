$(function() {
    $('#feedbackForm').submit(function(e){
        e.preventDefault();

        var $form = $(this),
            data = {
                name: $form.find('[name=name]').val(),
                email: $form.find('[name=email]').val(),
                text: $form.find('[name=text]').val(),
            };

        $.ajax({
            url: 'https://api.doubleapublishing.com/api/behind-feedback',
            type: 'POST',
            data: JSON.stringify(data),
            dataType: 'json',
            beforeSend: function(xhr){
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Content-Type', 'application/json');
            },
            success: function() {
                $('#responseMessage').show();
                setTimeout(function() {
                    $('#responseMessage').hide();
                }, 1500);

                $form.find('input, textarea').val('');
            }
        });
    });
});
