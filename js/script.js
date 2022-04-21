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

    // 위로 가기
    let gotop = $('.gotop');
    gotop.click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

};

$(document).ready(function(){

});