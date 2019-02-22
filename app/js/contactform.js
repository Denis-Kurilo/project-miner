jQuery(document).ready(function($) {

$(".modal-form").submit(function() {
var str = $(this).serialize();

$.ajax({
		type: "POST", 
		url: "php/contact.php",
		data: str,
		success: function(msg) {
		if(msg == 'OK') {
			result = '<p>Ваш заказ принят. <br> Ожидайте ответа,<br> менеджер с вами свяжется.</p>';

		//$(".modal").hide();
		} else {
		result = msg;
		}
			$('.note').html(result);

			$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".note"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        	location.reload();
        }
        });
		}
	});
	return false;
	});
});