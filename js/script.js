window.onload = function () {
    let sw_cc = new Swiper('.sw-cc', {
        slidesPerView: 3,
        loop: false,
        pagination: {
            el: '.sw-cc-pg',
            clickable: true,
        },
        spaceBetween: 30,
    });
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

    // 위로 가기
    let gotop = $('.gotop');
    gotop.click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    let gnb_a = $('.gnb a');
    $(document).ready(function ($) {

        $(gnb_a).click(function (event) {
            event.preventDefault();
            console.log(gnb_a);
            $('html,body').animate({
                scrollTop: $(this.hash).stop().offset().top - 160
            }, 500);
            
        });

    });
};

$(document).ready(function () {

});