'use strict'

$(document).ready(function(){

    setTimeout(function() {
        $('#preloader').fadeOut('slow', function() {
          $(this).remove();
        });
    }, 2000);

    $('#navBtn').click(function(){
        $('#navList').toggleClass('active');
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

    new WOW().init();
})

$(document).ready(function(){
    var modal = $('#modal')
    var modalForm = $('#modalForm')
    var modalCross = $('modalCross')

    var searchBtn = $('#searchBtn')
})

