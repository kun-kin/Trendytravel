// $(window).scroll(function() {
//     var headerHeight = $(".header").outerHeight();
//     // kiểm tra điều kiện > header thì mới addClass 
//     if ($(window).scrollTop() > headerHeight) {
//         $('.header').addClass('white-bg');
//         // $('.header').addClass('header-sticky');
//         $('.contacthotel').slideUp();
//         $('.header-middle').addClass('animated');
//     } else {
//         $('.header').removeClass('white-bg');
//         // $('.header').removeClass('header-sticky');
//         $('.contacthotel').slideDown();
//         $('.header-middle').removeClass('animated');
//     }
// });
/* back to top */
var btn = $('.scrollup');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('activate');
    } else {
        btn.removeClass('activate');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});

$(document).ready(function() {


    // $('#dateto').datepicker();

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 2000
    // });
    // $(".navbar-toggler").click(function() {
    //     $(this).toggleClass('show');
    //     $('.navbar-collapse.collapse').toggleClass('show');
    // })




    //menu-header
    if ($(window).width() > 768) {
        $('li.has-submenu').hover(function() {
            $(this).children(".submenu").css("display", "block");
        }, function() {
            $(this).children(".submenu").css("display", "none");
        });
    }
    $("#dt-menu-toggle").click(function() {
        $('#menu-main-menu').slideToggle();
        $('.menu').toggleClass('menu-toggle-open');
    })
    $('li.has-submenu .dt-menu-expand').click(function() {
        if ($('.dt-menu-expand').hasClass('dt-clicked')) {
            $(this).removeClass('dt-clicked');
            $(this).parents('li.has-submenu').children('.submenu').slideUp();
            $('.dt-menu-expand').text('+');
        } else {
            $(this).addClass('dt-clicked');
            $(this).parents('li.has-submenu').children('.submenu').slideDown();
            $('.dt-menu-expand').text('-');
        }
    });


    $(".dt-toggle-frame-set .dt-toggle-frame .dt-toggle-accordion a").click(function() {
        $(this).parents('.dt-toggle-accordion').addClass('active');
        $(this).parents('.dt-toggle-frame').children('.dt-toggle-content').slideDown();
        $('.dt-toggle-accordion').not($(this).parents('.dt-toggle-accordion')).removeClass('active');
        $('.dt-toggle-content').not($(this).parents('.dt-toggle-frame').children('.dt-toggle-content')).slideUp();
    });
    //


    // $(document).mouseup(function(e) {
    //     var eti = $(".custom-select .nice-select");
    //     if (!eti.is(e.target) && eti.has(e.target).length === 0) {
    //         eti.removeClass('open');
    //     }
    // });






});