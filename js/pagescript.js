$(document).ready(function () {
    var owl = $('#home-slider');
    owl.owlCarousel({
        margin: 10,
        dots: false,
        autoplay: true,
        center:true ,
        center: true,
	    loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            600: {
                items: 3,
                dots: true
            },
            1200: {
                items: 3
                
            }
        }
    });
});





var headerHeight = $('header').outerHeight();
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed-header');
        // $('body').css('padding-top', headerHeight);
    } else {
        $('header').removeClass('fixed-header');
        // $('body').css('padding-top', 0);
    }
});



$(document).ready(function () {
    
    $(".round1").click(function () {
        $("#line-round").addClass("line-1");
        $("#line-round").css("transform", "rotateZ(90deg)");
        $("#line-round").css("left", "26px");
        $("#line-round").css("top", "48%");

    });

    $(".round2").click(function () {
        $("#line-round").addClass("line-2");
        $("#line-round").css("transform", "rotateZ(155deg)");
        $("#line-round").css("left", "31px");
        $("#line-round").css("top", "48%");

    });
    $(".round3").click(function () {
        $("#line-round").addClass("line-3");
        $("#line-round").css("transform", "rotateZ(204deg)");
        $("#line-round").css("left", "32px");
        $("#line-round").css("top", "51%");

    });

    $(".round4").click(function () {
        $("#line-round").addClass("line-4");
        $("#line-round").css("transform", "rotateZ(270deg)");
        $("#line-round").css("left", "26px");
        $("#line-round").css("top", "52%");

    });
    $(".round5").click(function () {
        $("#line-round").addClass("line-5");
        $("#line-round").css("transform", "rotateZ(335deg)");
        $("#line-round").css("left", "19px");
        $("#line-round").css("top", "50%");

    });
    $(".round6").click(function () {
        $("#line-round").addClass("line-6");
        $("#line-round").css("transform", "rotateZ(24deg)");
        $("#line-round").css("left", "20px");
        $("#line-round").css("top", "48%");

    });
});

$("#main-menu-toggle").click(function(){
    $("#header-nav").addClass("active");
    $("#black-layer").addClass("active");
    $("body").addClass("overflow-off");
    $("html").addClass("overflow-off");
});

$("#close-main-menu").click(function(){
    $("#header-nav").removeClass("active");
    $("#black-layer").removeClass("active");
    $("body").removeClass("overflow-off");
    $("html").removeClass("overflow-off");

});

$("#black-layer").click(function(){
    $("#header-nav").removeClass("active");
    $("#black-layer").removeClass("active");
    $("body").removeClass("overflow-off");
    $("html").removeClass("overflow-off");

});
$("#menu-close").click(function () {
    $("#header-nav").removeClass("active");
    $("#black-layer").removeClass("active");
    $("body").removeClass("overflow-off");
    $("html").removeClass("overflow-off");

});

