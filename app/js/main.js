$(document).ready(function() {

    /*$('.owlCarousel').owlCarousel({
    //loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 1000,
    items: 1,
    
})*/
    /*  //owl-carousel  */


    // maskedinput 
    $(".modal-form__input--maskedinput").mask("+7(999) 99-99-999");
    



  $('.owl-carousel').owlCarousel({
    //margin: 70,
        loop: true,
        //center: true,
        //items: 1,
        margin: 50,
        //stagePadding: 30,
        //nav: true,
        //navText : ["<img src=\"img/icon/arrow_left.png\">","<img src=\"img/icon/arrow_right.png\">"],
        //pagination : true,
        //slideSpeed: 1000,
        //touchDrag: true,
        //mouseDrag: false
        //fluidSpeed: 5000,
        nav: true,
        navText: ["<i class='fas fa-arrow-left arrow__left'></i>","<i class='fas fa-arrow-right arrow__right'></i>"],
        //autoplay : 10000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        slideBy: 2,
        dots: false,
        navSpeed: 2000,
        items: 2,
        //dotsEach: true,
        //navElement: string,
        //autoHeight: true,


       /* responsive: {
            0: {
                items: 1,
                nav: false,
                autoplay: 4000
            },
            640: {
                items: 2,
                nav: true,
                autoplay: 10000
            },
            1200: {
                items: 2,
                nav: true,
                autoplay: 10000
            },
        }*/
  });








});  

	/*  owl-carousel  */
	
	

/*function openbox(open){
        display = document.getElementById('open').style.display;
        if(display == "none"){
            display = document.getElementById('open').style.display = "block";
        }else{
            display = document.getElementById('open').style.display = "none";
        }
}*/

/*$(document).mouseup(function (e) {
    var container = $("open");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
*/
/*  $(".wrap-characteristic").click(function() {
      $('.toggled_block').toggle();
    });
    $(document).on('click', function(e) {
      if (!$(e.target).closest(".wrapper-characteristic").length) {
        $('.toggled_block').hide();
      }
      e.stopPropagation();
    });*/