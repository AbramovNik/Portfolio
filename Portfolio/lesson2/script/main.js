$(document).ready(function(){
	$(".know-more").on("click", function(){
        $(this).parent(".visible-text").siblings(".hover-text").addClass("ok");
        
    })
    $(".close").on("click", function (){
        $(this).parent(".hover-text").removeClass("ok");
    })
})


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});