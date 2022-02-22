$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggle("active");
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["webdesigner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
});