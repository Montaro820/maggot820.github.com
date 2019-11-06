'use strict'
$(document).ready(function(){
    $('#navBtn').click(function(){
        $('#navList').toggleClass('active');
        console.log('Click!');

        $('#navList').click(function(){
            $('#navList').toggleClass('active');
        });
    });
    
    $('#headerSlider').owlCarousel({
        items: 1,
        loop: true,
        center: true,
        mouseDrag: false,
        touchDrag: true,
        lazyLoad: true,
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
        nav: true
    });
})