$(document).ready(function() {

    // maskedinput 
    $(".modal-form__input--maskedinput").mask("+7(999) 99-99-999");
    
  /*  $(".wrap-characteristic").click(function() {
      $('.toggled_block').toggle();
    });
    $(document).on('click', function(e) {
      if (!$(e.target).closest(".wrapper-characteristic").length) {
        $('.toggled_block').hide();
      }
      e.stopPropagation();
    });*/

	/*  owl-carousel  */
	
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    //navText : ["<img src=\"img/icon/arrow_left.png\">","<img src=\"img/icon/arrow_right.png\">"],
    autoplay: true,
    autoplayTimeout: 1000,
    smartSpeed: 1000,
    responsive: {
            0: {
                items: 1,
                nav: false,
                autoplay: 4000
            },
            640: {
                items: 1,
                nav: true,
                autoplay: 10000
            },
            1200: {
                items: 1,
                nav: true,
                autoplay: 10000
            },
        }
})


	
	/*  //owl-carousel  */




	
});

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
