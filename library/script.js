$(function () {

    var header = $("#header"),
        introH = $("#welcome").innerHeight()
        scrollOffset = $(window).scrollTop();


    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        var blockId = $(this).data('scroll'),
            blockOffset=$(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset-15
        },500);
        $("#nav").removeClass('active');
        $("#nav-toggle").removeClass('active');
    });

    $("#nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $("#nav").toggleClass('active');
    });
});