$(document).ready(function() {

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

});  

	