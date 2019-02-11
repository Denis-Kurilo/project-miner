$(document).ready(function() {

//jequry-ui
//$('.currency-list').selectmenu();

//slide2id - плавная прокрутка по ссылкам внутри страницы
$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
    highlightSelector:"nav a"
});

// maskedinput 
$(".modal-form__input--maskedinput").mask("+7(999) 99-99-999");
    
/*  owl-carousel  */
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    navText: ["<i class='fas fa-arrow-left arrow__left'></i>","<i class='fas fa-arrow-right arrow__right'></i>"],
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    slideBy: 2,
    dots: false,
    navSpeed: 2000,
    responsive: {
        0: {
            items: 1,
            nav: false,
            //autoplay: 4000
        },
        640: {
            items: 2,
            nav: true,
            //autoplay: 10000
        },
        1200: {
            items: 2,
            nav: true,
            //autoplay: 10000
        },
    }
});
/*  //owl-carousel  */

/*  maps  */
ymaps.ready(init);
    var myMap,
        myPlacemark1;
        
    function init(){     
        myMap = new ymaps.Map("map", {
            center: [44.49809819, 34.16425932],
            zoom: 16,
            controls: ['smallMapDefaultSet']
        });

        myMap.controls.add('routeEditor');

        myMap.controls
            .remove('geolocationControl')
            .remove('searchControl')
            .remove('trafficControl')
            .remove('typeSelector')
            .remove('rulerControl');

         myMap.behaviors.disable([
            'drag',
            'scrollZoom'    
         ]);

         //pin
         var myPin = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/icon/icon-maps.png',
            iconImageSize: [60, 64],
            iconImageOffset: [-3, -42]
        });

        myPlacemark1 = new ymaps.Placemark([44.49809819, 34.16425932], { 
            // balloonContentHeader: '<span class="map-red">Сдача номеров от хозяина</span>',
            // balloonContentBody: 'Зелёный номер',
            // balloonContentFooter: 'Республика Крым г.Ялта ул.Дражинского 27',
            // hintContent: 'Сдача номеров от хозяина Зелёный номер'
        });

        myPin.add(myPlacemark1);
        myMap.geoObjects.add(myPin);
    }
/*  maps  */


//Animate arrow-top

$(function (){

    $("#arrow-top").hide();

    $(window).scroll(function(){

        if ($(this).scrollTop() > 1000) {

            $("#arrow-top").fadeIn();

        }else{

            $("#arrow-top").fadeOut();

        }

    });

    $("#arrow-top a").click(function(){

        $("body, html").animate({

            scrollTop:0

        }, 1500);

        return false;

    }); 


/* navigation  */
// Скрипт для показа и скрытия выпадающего меню на смартфонах
// Создаем переменые для кнопки и для меню
var pull = $('#navigation-toggle');
var menu = $('#mobile-nav');

// Описываем событие при нажатии на кнопку
$(pull).on("click", function(e){

    // Отменяем стандартное поведение ссылки в браузере
    e.preventDefault();

    // Открываем/Скрываем меню
    menu.slideToggle();

    // Добавляем модификатор --active
    $(this).toggleClass('navigation__toggle-top--active');  
});

//меняется цвет header mobile click
$(pull).on("click", function(){
    $('header').css('background-color','rgba(0,44,95, 0.9)');
    $(this).css('background-color','rgba(0,44,95, 1)');
});

// При изменении размера окна, в большую сторону, если меню было с крыто, показываем его.
$(window).resize(function(){
    var w = $(window).width();
    if(w > 992) {
        menu.removeAttr('style');
        pull.removeClass('navigation__toggle-top--active');
    } 
});

    // Скрываем меню при клике на него на смартфоне и планцете
// По клику на ссылку в меню запускаем ф-ю fnstart();
 $('nav.navigation a').on("click", function() {
    $('header').removeClass ('background-color','rgba(0,44,95, 0.9)');
    fnstart();
    });

    $('.navigation_list').click(function(){
        var w = $(window).width();
        if(w<992){
            $('#mobile-nav').fadeOut();
        } 
    });
 
// В ф-ии fnstart(); проверяем - если меню открыто (проверяем по наличию класса --active у кнопки pull)
// тогда убираем класс модификатор --active у кнопки pull
// и сворачиваем/скрываем меню 
function fnstart(){ 
    if ( $("#navigation-toggle").hasClass("navigation__toggle-top--active")  ) {
        pull.toggleClass('navigation__toggle-top--active');
        menu.slideToggle();
    } 
};
/* //navigation  */

});











});  

	