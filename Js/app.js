let preloader = document.querySelector('.loader');

window.onload = setTimeout(() =>
{
    document.querySelector('.preload').style.display = 'none';
    document.querySelector('.preload').classList.toggle('disappear');
}, 500);


$(document).ready(function () {
    // $('.owl-carousel').owlCarousel();
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: 5000,
        margin: 10,
        dots: true,
        dotsEach: false,
        dotsSpeed: 1000,
        navSpeed: 1000,
        // animateOut: 'fadeOut',
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    });


});

var vidoes = $('.test-videos'); {
    // $('.owl-carousel').owlCarousel();
    vidoes.owlCarousel({
        loop: true,
        autoplay: 3500,
        margin: 10,
        dots: false,
        dotsEach: false,
        dotsSpeed: 1000,
        navSpeed: 1000,
        animateOut: 'fadeOut',
        mouseDrag: true,
        responsiveClass: true,
        items:5,
        responsive: {
            0: {
                items: 1,
              	margin: 0,
                nav: false
            },
            400: {
                items: 1,
                nav: false
            },
            900: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false,
                loop: true
            },
            1500: {
                items: 4,
                nav: false,
                loop: true
            },
            2000: {
                items: 5,
                nav: false,
                loop: true
            }
        }
    })
};

var testimonial = $('.test');
{
    testimonial.owlCarousel({
        loop: true,
        autoplay: 5000,
        margin: 10,
        dots: true,
        dotsEach: false,
        dotsSpeed: 1000,
        navSpeed: 2000,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true
            },
            2000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    })
};

var products = $('.prod');
{
    products.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        dots: true,
        dotsEach: false,
        dotsSpeed: 1000,
        navSpeed: 1000,
        merge:true,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true,
            },
            2000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    })
};

var products = $('.abtpage');
{
    products.owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        dots: false,
        dotsEach: false,
        dotsSpeed: 1000,
        navSpeed: 1000,
        merge:true,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 10
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false,
                loop: true,
            },
            2000: {
                items: 1,
                nav: false,
                loop: true
            }
        }
    })
};



        document.querySelector('.row.counter').addEventListener('click', function ()
            {
                const locate = new countUp.CountUp("counter1", 25, { suffix: "+", duration: 15 })
                locate.start()
            
                const diseases = new countUp.CountUp("counter2", 4448, { duration: 10 })
                diseases.start()
            
                const success = new countUp.CountUp("counter3", 98, { suffix: "%", duration: 10 })
                success.start()
            
                const happy = new countUp.CountUp("counter4", 1, { suffix: "Lac+", duration: 20 })
                happy.start()
            });


// alert('lol');

const product1 = document.querySelector('.p-right--01');
const product2 = document.querySelector('.p-right--02');
const product3 = document.querySelector('.p-right--03');
const product4 = document.querySelector('.p-right--04');
const product5 = document.querySelector('.p-right--05');
const product6 = document.querySelector('.p-right--06');

product1.addEventListener('mouseenter', function ()
{
    document.querySelector('.shop').style.backgroundColor = "#742726";
    document.querySelector('.shop').style.border = "1px solid #742726";
});

product1.addEventListener('mouseleave', function ()
{
    document.querySelector('.shop').style.backgroundColor = "transparent";
    document.querySelector('.shop').style.border = "1px solid #fff";
});

product2.addEventListener('mouseenter', function ()
{
    document.querySelector('.shop2').style.backgroundColor = "#B93072";
    document.querySelector('.shop2').style.border = "1px solid #B93072";
});

product2.addEventListener('mouseleave', function ()
{
    document.querySelector('.shop2').style.backgroundColor = "transparent";
    document.querySelector('.shop2').style.border = "1px solid #fff";
});

product3.addEventListener('mouseenter', function ()
{
    document.querySelector('.shop3').style.backgroundColor = "#723627";
    document.querySelector('.shop3').style.border = "1px solid #723627";
});

product3.addEventListener('mouseleave', function ()
{
    document.querySelector('.shop3').style.backgroundColor = "transparent";
    document.querySelector('.shop3').style.border = "1px solid #fff";
});

product4.addEventListener('mouseenter', function ()
{
    document.querySelector('.shop4').style.backgroundColor = "#D88028";
    document.querySelector('.shop4').style.border = "1px solid #D88028";
});

product4.addEventListener('mouseleave', function ()
{
    document.querySelector('.shop4').style.backgroundColor = "transparent";
    document.querySelector('.shop4').style.border = "1px solid #fff";
});

product5.addEventListener('mouseenter', function ()
{
    document.querySelector('.shop5').style.backgroundColor = "#C74120";
    document.querySelector('.shop5').style.border = "1px solid #C74120";
});

product5.addEventListener('mouseleave', function ()
{
    document.querySelector('.shop5').style.backgroundColor = "transparent";
    document.querySelector('.shop5').style.border = "1px solid #fff";
});

product6.addEventListener('mouseenter', function ()
{
    document.querySelector('.shop6').style.backgroundColor = "#CB3830";
    document.querySelector('.shop6').style.border = "1px solid #CB3830";
});

product6.addEventListener('mouseleave', function ()
{
    document.querySelector('.shop6').style.backgroundColor = "transparent";
    document.querySelector('.shop6').style.border = "1px solid #fff";
});



  

















// Scroll Function
window.onscroll = function ()
{
    scrollFunction();
}

function scrollFunction()
{
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".logo_img").style.width = "65%";
        document.querySelector(".logo_img").style.transition = "12";
        document.querySelector(".logo_img").style.transition = "12";
        document.querySelector('nav').style.backgroundColor = "#fff";
    }
    else {
        document.querySelector(".logo_img").style.width = "70%";
        document.querySelector('nav').style.backgroundColor = "rgba(255, 255, 255, 0.719)";
    }
}


// Menu Function
function openMenu()
{
    document.querySelector('.hamburger').style.display = 'none';
    document.querySelector('.close-hamburger').style.display = 'block';
    document.querySelector('.opened-menus').style.display = 'block';
    document.querySelector('.opened-menus').style.right = '0';
}

function closeMenu()
{
    document.querySelector('.close-hamburger').style.display = 'none';
    document.querySelector('.hamburger').style.display = 'block';
    document.querySelector('.opened-menus').style.display = 'none';

};

// sub-menus
// document.querySelector('.treats').addEventListener('mouseover', function ()
// {
//     document.querySelector('.sub-menus').style.display = 'block';
//     document.querySelector('.sub-menus').style.transition = "all 2s";
// });

