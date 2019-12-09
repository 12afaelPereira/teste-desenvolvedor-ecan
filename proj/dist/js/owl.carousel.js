$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 5000,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})