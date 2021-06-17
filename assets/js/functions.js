jQuery(function() {
    // PRODUCT - PRODUCT OPTIONS TAB
    jQuery(".product-options-tab").on('click', 'button',function(){
        jQuery(".product-options-tab button").removeClass("active");
        jQuery(this).addClass("active");
    });
    jQuery(".product-options-tab").on('click', '.optional-trigger',function(){
        jQuery(".product-interest").hide();
        jQuery(".product-optional").stop().fadeIn();
    });
    jQuery(".product-options-tab").on('click', '.interest-trigger',function(){
        jQuery(".product-optional").hide();
        jQuery(".product-interest").stop().fadeIn();
    });


    // PRODUCT RANGE - FILTER TRIGGERS
    jQuery(document).on('click', '.filter-trigger',function(){
        jQuery(this).toggleClass("active");
        jQuery(".filter-box").stop().slideToggle();
    });
    

    // READMORE TRIGGER
    jQuery(document).on('click', ".readmore-trigger",function(){
        jQuery(this).parent().toggleClass("active");
        jQuery(this).toggleClass("active");
    });


    // CONFIGURATOR - SEARCH MODEL
    jQuery(document).on('click', ".search-model-trigger",function(){
        jQuery(this).next().addClass("active");
        jQuery(this).next().stop().show().animate({
            right: '0',
            opacity: '1'
        });
        jQuery(".global-overlay").stop().css('z-index', 1015).fadeIn();
    });

    jQuery(document).on('click', ".search-model-head .close, .global-overlay",function(){
        if (jQuery(".search-model-list-canvas").hasClass("active")) {
            jQuery(".search-model-list-canvas").stop().animate({
                right: '-140px',
                opacity: '0',
            }, 500, function() {
                jQuery(".search-model-list-canvas").hide(); // applies display: none after animation is done;
            });
            jQuery(".global-overlay").stop().css('z-index', 1005).fadeOut();
        } 
    });

    

    // WOW JS
    new WOW().init();
    

    // MAIN HEADER - WISHLIST DROP - Hover
    jQuery(document).on('mouseenter', ".wishlist-drop-trigger, .wishlist-drop-canvas",
        function() {
            jQuery(".wishlist-drop-trigger").addClass("active");
            jQuery(".wishlist-drop-canvas").stop().show().animate({
                top: '40px',
                opacity: '1',
            });
        }
    )
    .on('mouseleave', ".wishlist-drop-trigger, .wishlist-drop-canvas", 
    function() {
        jQuery(".wishlist-drop-trigger").removeClass("active");
        jQuery(".wishlist-drop-canvas").stop().animate({
            top: '30px',
            opacity: '0',
        }, 500, function() {
            jQuery(".wishlist-drop-canvas").hide(); // applies display: none after animation is done;
        });
    });



    // MAIN HEADER - MAIN MENU - Hover
    jQuery(document).on("mouseenter", ".warranty-trigger", function() {
            jQuery(".nav-item:not(.warranty)").stop().hide();
            jQuery(".warranty-item").stop().show();
            jQuery(".warranty-trigger").addClass("active");
        }
    ).on('mouseleave', ".warranty-trigger", function() {
        jQuery("ul.core-nav li a").removeClass("active");
        jQuery("ul.trigger-nav li a").removeClass("active");
    });

    jQuery(document).on("mouseenter", ".products-trigger",
        function() {
            jQuery(".nav-item:not(.products)").stop().hide();
            jQuery(".products-item").stop().show();
            jQuery(".products-trigger").addClass("active");
        }
    ).on("mouseleave", ".products-trigger", function() {
        jQuery("ul.core-nav li a").removeClass("active");
        jQuery("ul.trigger-nav li a").removeClass("active");
    });

    jQuery(document).on("mouseenter", ".my-motorcycle-trigger",
        function() {
            jQuery(".nav-item:not(.my-motorcycle)").stop().hide();
            jQuery(".my-motorcycle-item").stop().show();
            jQuery(".my-motorcycle-trigger").addClass("active");
        }
    ).on('mouseleave', ".my-motorcycle-trigger", function() {
        jQuery("ul.core-nav li a").removeClass("active");
        jQuery("ul.trigger-nav li a").removeClass("active");
    });

    jQuery(document).on("mouseenter", ".explore-trigger",
        function() {
            jQuery(".nav-item:not(.explore)").stop().hide();
            jQuery(".explore-item").stop().show();
            jQuery(".explore-trigger").addClass("active");
        }
    ).on("mouseleave", ".explore-trigger", function() {
        jQuery("ul.core-nav li a").removeClass("active");
        jQuery("ul.trigger-nav li a").removeClass("active");
    });

    jQuery(document).on("mouseenter", ".trigger-nav",
        function() {
            jQuery(".nav-menu-room").show().stop().animate({
                right: '0',
                opacity: '1',
            });
            jQuery(".global-overlay").stop().fadeIn();
        }
    );

    jQuery(document).on("mouseenter", ".nav-menu-room",
        function() {
            jQuery("ul.trigger-nav").stop().animate({
                right: '-120px',
                opacity: '0',
            });
        }
    ).on("mouseleave", ".nav-menu-room", function() {
        jQuery("ul.trigger-nav").stop().animate({
            right: '0',
            opacity: '1',
        });
        jQuery(this).stop().animate({
            right: '-40px',
            opacity: '0',
        }, 500, function() {
            jQuery(this).hide(); // applies display: none after animation is done;
        });
        jQuery(".global-overlay").stop().fadeOut();
    })
    


    // MAIN HEADER - MOBILE MENU   
    jQuery(document).on('click', ".mobile-menu-trigger",function(){
        jQuery(".mobile-menu ul li a").next().stop().slideUp();
        jQuery(".mobile-menu ul li a").removeClass("active");
        jQuery(this).toggleClass("active");
        jQuery(this).next().toggleClass("active");
        jQuery(this).next().stop().show().animate({
            right: '0',
            opacity: '1'
        });
        jQuery(".global-overlay").stop().fadeIn();
    });

    jQuery(document).on('click',".mobile-menu-trigger",function(){
        if (jQuery(this).next().hasClass("active")) {
            jQuery(this).next().stop().animate({
                right: '-140px',
                opacity: '0',
            }, 500, function() {
                jQuery(".mobile-menu").hide(); // applies display: none after animation is done;
            });
            jQuery(".global-overlay").stop().fadeOut();
        }
    });
    
    jQuery(".mobile-menu ul li a").next().stop().slideUp();
    jQuery(document).on('click', ".mobile-menu ul li a",function(){
        jQuery(".mobile-menu ul li a").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".mobile-menu ul li a").next().stop().slideUp();
        jQuery(this).next().stop().slideDown();
    });



    // CAROUSEL - (Homepage -> Hero)
    jQuery('.carousel-hero').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop:true,
        dots:false,
        mouseDrag:false,
        touchDrag:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin:0,
        singleItem:true,
    });

    // CAROUSEL - (Homepage -> Showcase)
    jQuery('.carousel-showcase').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        loop:true,
        dots: true,
        nav: true,
        dotsData: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin:0,
        singleItem:true,
    });

    // CAROUSEL - (Product -> Gallery)
    jQuery('.carousel-product-gallery').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop:true,
        dots: true,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin:0,
        center:true,
        autoplayHoverPause: true
    });
    
    // CAROUSEL - (News)
    jQuery('.carousel-news').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        loop:true,
        dots: true,
        nav: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin:0,
        center:true,
        autoplayHoverPause: true
    });

    // CAROUSEL - (Configurator -> Accessories)
    var $owl = jQuery('.carousel-model');

    $owl.children().each( function( index ) {
    jQuery(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
        loop:true,
        dots: true,
        nav: true,
        items: 3,
        margin:0,
        center:true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:3,
            }
        }
    });

    jQuery(document).on('click', '.owl-item>div', function() {
    var $speed = 300; 
    $owl.trigger('to.owl.carousel', [jQuery(this).data( 'position' ), $speed] );
    });

    // CAROUSEL - (Product -> Options)
    jQuery('.carousel-product-options').owlCarousel({
        autoplay: false,
        loop: true,
        dots: false,
        nav: true,
        margin: 20,
        items: 5,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:3,
            },
            768:{
                items:4,
            },
            992:{
                items:4,
            },
            1200: {
                items: 5
            }
        }
    });

    // CAROUSEL - (Attitude -> Products)
    jQuery('.carousel-attitude-products').owlCarousel({
        autoplay: false,
        loop: true,
        dots: false,
        nav: true,
        margin: 20,
        items: 5,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:3,
            },
            768:{
                items:4,
            },
            992:{
                items:5,
            }
        }
    });
    
     // CAROUSEL - (Attitude -> Motorcycles)
     jQuery('.carousel-attitude-motorcycles').owlCarousel({
        autoplay: false,
        loop: true,
        dots: false,
        nav: true,
        margin: 20,
        items: 3,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:3,
            }
        }
    });

    // CAROUSEL - (GLOBAL-> Wishlist Drop)
    jQuery('.carousel-wishlist-drop').owlCarousel({
        loop:true,
        nav: true,
        items: 1,
        margin:0,
        singleItem:true,
    });



    // MINI SLIDESHOWS - (Homepage -> Motorcycle Configurator)
    jQuery(".group-1 > div:gt(0)").hide();
    setInterval(function() {
    jQuery('.group-1 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.group-1');
    }, 8000);

    jQuery(".group-2 > div:gt(0)").hide();
    setInterval(function() {
    jQuery('.group-2 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.group-2');
    }, 6000);

    jQuery(".group-3 > div:gt(0)").hide();
    setInterval(function() {
    jQuery('.group-3 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.group-3');
    }, 9000);

    jQuery(".group-4 > div:gt(0)").hide();
    setInterval(function() {
    jQuery('.group-4 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.group-4');
    }, 11000);

    jQuery(".group-5 > div:gt(0)").hide();
    setInterval(function() {
    jQuery('.group-5 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('.group-5');
    }, 10000);

    // Scroll to Top
    jQuery(window).on('scroll',function() {
        if (jQuery(this).scrollTop() > 500) {
            jQuery('#toTop:hidden').stop(true, true).fadeIn();
        } else {
            jQuery('#toTop').stop(true, true).fadeOut();
        }
    });

});