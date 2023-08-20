$(function(){

    var header = $("#header"), 
        introH = $("#intro").innerHeight()
        scrollOffset = $(window).scrollTop();

    /*fixed header*/ 
    CheckScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset= $(this).scrollTop();

        CheckScroll(scrollOffset);
    });
    
    function CheckScroll(Offset){

        if ( Offset >= introH ) {
            header.addClass("header--fixed");
        }
        else{
            header.removeClass("header--fixed");
        }
    };

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        var blockId = $(this).data('scroll'),
            blockOffset=$(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset-50
        },500);
        $("#nav").removeClass('active');
        $("#nav-toggle").removeClass('active');
    }); 

    /*nav-toggle*/
    $("#nav-toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $("#nav").toggleClass('active');

    });

    /*collapse*/
    $("[data-collapse]").on("click",function(event){
        event.preventDefault();
        $("[data-collapse]").removeClass('active');
        $(this).toggleClass('active');
    });


    /*slider*/
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});