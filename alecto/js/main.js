'use strict'

$(document).ready(function(){

    setTimeout(function() {
        $('#preloader').fadeOut('slow', function() {
          $(this).remove();
        })
    }, 2000);

    $('#headerSlider').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        mouseDrag: false,
        touchDrag: true,
        lazyLoad: true,
        navigation: false,
        responsive:{
            0:{
                nav: false
            },
            992:{
                nav: true
            }
        }
    });

    $('#opinionSlider').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        mouseDrag: false,
        touchDrag: true,
        lazyLoad: true,
        navigation: false,
        nav: true
    });

    new WOW().init();
});

$(document).ready(function(){
    let nav = $('#navigation')
    let navBtn = $('#navBtn')
    let navList = $('#navigationList')
    let navListItem = $('.navigation-list-item')

    navBtn.click(function(e){
        nav.toggleClass('responsive')
        navList.toggleClass('responsive')
    });

    navList.click(function(e){
        if(navList.hasClass('responsive')){
            navList.toggleClass('responsive')
        }
    })
});


$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('#navigation').addClass('green');
        }
        else
        {
            $('#navigation').removeClass('green');
        }
    })
})

//todo Закончить навигацию