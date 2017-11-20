$('.slider').slick ();

// ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
$(document).ready(function(){

    $("#menu").on("click","a", function (event) {

        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор блока с атрибута href

        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1000 мс

        $('body,html').animate({scrollTop: top}, 1000);

    });

});

// ПОЯВЛЕНИЕ СКРЫТОГО БЛОКА 

$('.block-img').hover(function() {

 	e = $(this).find('.block-hide').show()
 },

	function() {

		e.hide()
	});


//  КНОПКА ВОЗВРАЩЕНИЕ В НАЧАЛО САЙТА



$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 600) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 1000);
return false;
});
 
});