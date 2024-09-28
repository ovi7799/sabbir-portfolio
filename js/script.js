$(".count").each(function () {
    $(this)
        .prop("Counter", 0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                    now = Number(Math.ceil(now)).toLocaleString('en');
                    $(this).text(now);
                },
            }
        );
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

AOS.init();


// let darkTheme = document.getElementById('darkTheme');

// darkTheme.oneclick = function(){
//     document.body.classList.toggle("dark-theme");
// }
