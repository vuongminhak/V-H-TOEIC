$(document).ready(function(){
    $(".tab-content > div:not(:first-child)").hide();

    $(".tab a").click(function(event) {
        event.preventDefault();

        $("ul.tab > li a").removeClass("active");

        $(this).addClass("active");

        $(".tab-content > div").hide();

        let h = $(this).attr("href");
        $(h).show();
    });
});