function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 70) {
            document.getElementById('myHeader').classList.add('fixed-top');
            document.getElementById('myView').classList.add('d-none');


            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('myHeader').classList.remove('fixed-top');
            document.getElementById('myView').classList.remove('d-none');
            // remove padding top from body
            document.body.style.paddingTop = '0';
        }
    });
});



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1100: {
            items: 3,
        },
        1400: {
            items: 4,
            loop: true,
        }
    }
});



$(document).ready(function () {

    $('.menu-icon').click(function () {
        if ($('#navigator').css("left") == "-250px") {
            $('#navigator').animate({ left: '0px' }, 350);
            $('.menu-icon').animate({ left: '250px' }, 350);
            $('.menu-text').animate({ left: '300px' }, 350).empty().text("Close");
        }
        else {
            $('#navigator').animate({ left: '-250px' }, 350);
            $(this).animate({ left: '0px' }, 350);
            $('.menu-text').animate({ left: '50px' }, 350).empty().text("Menu");

        }
    });
    $('.menu-icon').click(function () {
        $(this).toggleClass("on");
    });
});








