var top_nav_menu = {
    init: function () {
        top_nav_menu.hover_dropdown();
    },
    hover_dropdown: function () {
        $('.dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
        });
        $('.dropdown > a').click(function () {
            location.href = this.href;
        });
    },
};
var sticky_nav = {
    init: function () {
        if (window.matchMedia("(max-width: 575px)").matches) {
            var lastScrollTop = 60;
            var delta = 60;
            $(window).scroll(function (event) {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    $('.top-header').addClass('sticky');
                    $('.primary-nav').removeClass('sticky');


                } else {
                    $('.top-header').removeClass('sticky');
                    $('.top-header').addClass('none-sticky');
                    $('.primary-nav').addClass('sticky');
                }
                if (st == 0) {
                    $('.top-header').addClass('sticky');
                    $('.primary-nav').removeClass('sticky');
                }
                lastScrollTop = st;
            });
        }
    }
}
var about_nav_menu = {
    init: function () {
        $('.menu-toggler').on('click', function () {
            $(this).toggleClass('show');
            $('.about-nav').toggleClass('show');
            return false;
        })
    },

};
var menu_mobile = {
    init: function () {
        $('.mobile-menu-toggler').on('click', function () {
            $(this).toggleClass('show');
            $('#primary-nav').toggleClass('show');
            $('.modal-overlay').toggleClass('show');
            $('body').toggleClass('display-scroll');
        })
    }
}
var hero_slide = {
    init: function () {
        var hero_list_slide = $('.hero-slide .list-slider');
        var number_slide = $(".hero-slide .list-slider .slide-item").length;
        if (hero_list_slide.length > 0 && number_slide > 1) {
            hero_list_slide.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                arrows: true,
                lazyLoad: 'ondemand',
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        arrows: false
                    }
                }]
            });
        }

    }
}
var home_product = {
    init: function () {
        var product_widget = $('.home-product .list-product-slide');
        var number_slide = $(".home-product .list-product-slide .product").length;
        if (product_widget.length > 0 && number_slide > 3) {
            product_widget.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        autoplay: true,
                        autoplaySpeed: 5000,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: true,
                    }
                }]
            });
        }

    }
}
var home_brand = {
    init: function () {
        var list_brand_archive = $('.list-brand');
        var number_slide = $(".list-brand .col-md-2").length;
        if (list_brand_archive.length > 0 && number_slide > 4) {
            list_brand_archive.slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }]
            });
        }
    }
}
var product_viewed = {
    init: function () {
        var product_viewed_list = $('.list-product-viewed');
        var number_slide = $(".list-product-viewed .product").length;
        if (product_viewed_list.length > 0 && number_slide > 4) {
            product_viewed_list.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                    }
                }]
            });
        }
    }
}
var product_bestsale = {
    init: function () {
        var list_product_bestsale = $('.list-product-grid');
        var num_product = $('.list-product-grid .product').length;
        if(list_product_bestsale.length > 0 && num_product > 4 ){
            list_product_bestsale.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true,
                    }
                }]
            });
        }
    }
}
var feedback_customer = {
    init: function () {
        var list_feedback_customer = $('.home-feedback-slide');
        var number_feedback = $('.home-feedback-slide .list-feedback').length;
        if(list_feedback_customer.length > 0 && number_feedback > 1){
            list_feedback_customer.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: false,
                    }
                }]
            })
        }
    }
}
var common_settings = {
    init: function () {
        $('.menu-cat .menu-header').click(function () {
            $(this).toggleClass('show');
            $('.menu-cat .menu-body').toggleClass('show');
        });
        $('.icon-toggler').click(function () {
            $('.page-header .col-menu').toggleClass('show');
        })
        $('.btn-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
        $(window).scroll(function (event) {
            var scroll_nav_top = $(this).scrollTop();
            if (scroll_nav_top >= 300) {
                $('.action-desktop').addClass('show');
            } else {
                $('.action-desktop').removeClass('show');
            }
        });

        $('.entry iframe').addClass('embed-responsive-item');
        $(".entry iframe").wrap("<div class='embed-responsive embed-responsive-16by9'></div>");

        var comment_textarea = $('.comment-form [name="comment"]');
        if (comment_textarea.length > 0) {
            comment_textarea.focus(function () {
                $('.comment-form .comment-form-author').addClass('show');
                $('.comment-form .comment-form-email').addClass('show');
            })
        };

        $(".product-type-cat .new").click(function(){
            var t = window.location.origin,
                n = t+"/gay-golf";
            $(location).attr("href",n)
        }),
        $(".product-type-cat .like-new").click(function(){
            var t = window.location.origin,
                n = t+"/gay-golf-cu";
            $(location).attr("href",n)
        })

        // menu side slide
        var btn_bar_button = $(".primary-nav .bar-button");
        var window_width = $(window).width();
        if( btn_bar_button.length ){
            if( window_width > 768 && $('body').hasClass('home') ){
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    if( scroll > 550 ){
                        btn_bar_button.addClass('is-click');
                    }else{
                        btn_bar_button.removeClass('is-click');
                    }
                });
                $('.is-dropdown').on('click', '.is-click', function () {
                    $(this).toggleClass("show");
                    $(this).siblings(".menu-side-slide").toggleClass("show");
                })
            }else{
                btn_bar_button.click( function () {
                    $(this).toggleClass("show");
                    $(this).siblings(".menu-side-slide").toggleClass("show");
                })
            }
        }
        jQuery(document).click(function (e) {
            if (!jQuery(e.target).closest(".menu-side-slide, .primary-nav .bar-button").length) {
                jQuery(".menu-side-slide, .primary-nav .bar-button").removeClass('show');
            }

        })
        $('.btn-register').click(function (e) {
            $('#registermodal').modal('show');
        });
    },
}
var google_form_contact = {
    init: function () {
        var send_contact = $('.contact-form');
        if (send_contact.length > 0) {
            send_contact.on('submit', function () {
                var container = $(this);
                google_form_contact.send_contact_to_google(container);
                return false;
            });
        }
    },

    send_contact_to_google: function (container) {
        var fullname = $(container).find('[name="fullname"]').val();
        var numberphone = $(container).find('[name="numberphone"]').val();
        var content = $(container).find('[name="content"]').val();
        var email = $(container).find('[name="email"]').val();
        var data_url = window.location.href;
        var data_url_referrer = document.referrer;
        if ((fullname !== "") && (numberphone !== "")) {
            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfq3qC3-iFX6KGaLsMGSI4tRyn3L0UcV2anR-fd7F7VPui0Uw/formResponse",
                data: {
                    "entry.1761257764": fullname,
                    "entry.450145171": numberphone,
                    "entry.426164764": email,
                    "entry.916647566": content,
                    "entry.1772138398": data_url,
                    "entry.410446584": data_url_referrer,
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        $(container).closest('form').find("[type=text], [type=email]").val("");
                        $(container).find('button').attr('disabled', 'disabled');
                        alert('Gửi thành công!');
                    },
                    200: function () {
                        $(container).closest('form').find("[type=text], [type=email]").val("");
                        $(container).find('button').attr('disabled', 'disabled');
                        alert('Gửi thành công!');
                    }
                }
            });
        } else {
            alert('Kiểm tra lại các thông vừa nhập')
        }
    },

};
var google_form_register = {
    init: function () {
        var send_register = $('.register-form');
        if (send_register.length > 0) {
            send_register.on('submit', function () {
                var container = $(this);
                google_form_register.send_register_to_google(container);
                return false;
            });
        }
    },

    send_register_to_google: function (container) {
        var fullname = $(container).find('[name="fullname"]').val();
        var numberphone = $(container).find('[name="numberphone"]').val();
        var address = $(container).find('[name="address"]').val();
        var content = $(container).find('[name="content"]').val();
        var email = $(container).find('[name="email"]').val();
        var data_url = window.location.href;
        var data_url_referrer = document.referrer;
        if ((fullname !== "") && (numberphone !== "")) {
            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeHrR-dJs7-a8DCjTZBKWy0DjHaKGhPy55Hx4cq2rfp6QvqdA/formResponse",
                data: {
                    "entry.396679464": fullname,
                    "entry.2057898642": numberphone,
                    "entry.2134171468": email,
                    "entry.476778256":address,
                    "entry.244982459": content,
                    "entry.1730645570": data_url,
                    "entry.352065033": data_url_referrer,
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        $(container).closest('form').find("[type=text], [type=email]").val("");
                        $(container).find('button').attr('disabled', 'disabled');
                        $('#registermodal').modal('hide');
                        setTimeout(function() {
                            $('#modalsucess').modal('show');
                        }, 2000);
                        setTimeout(function() {
                            $('#modalsucess').modal('hide');
                            location.reload();
                        }, 5000);
                    },
                    200: function () {
                        $(container).closest('form').find("[type=text], [type=email]").val("");
                        $(container).find('button').attr('disabled', 'disabled');
                        $('#registermodal').modal('hide');
                        setTimeout(function() {
                            $('#modalsucess').modal('show');
                        }, 2000);
                        setTimeout(function() {
                            $('#modalsucess').modal('hide');
                            location.reload();
                        }, 5000);
                    }
                }
            });
        } else {
            alert('Kiểm tra lại các thông vừa nhập')
        }
    },

};
var testinomial = {
    init: function () {
        var list_testinomial = $('.home-testinomial .list-testinomial');
        if (list_testinomial.length > 0) {
            list_testinomial.slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false,
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                    }
                }]
            });
        }

    }
}
var brand = {
    init: function () {
        var list_brand = $('.home-brand .list-brand');
        var number_slide = $(".home-brand .list-brand .col").length;
        if (list_brand.length > 0 && number_slide > 4) {
            list_brand.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                infinite: false,
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true,
                    }
                }]
            });
        }

    }
}
var brand_archive = {
    init: function () {
        var list_brand_archive = $('.list-brand-archive');
        var number_slide = $(".list-brand-archive .col").length;
        if (list_brand_archive.length > 0 && number_slide > 4) {
            list_brand_archive.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false,
                        dots: true,
                    }
                }]
            });
        }
    }
}
var partner = {
    init: function () {
        var list_partner = $('.home-partner .list-brand');
        if (list_partner.length > 0) {
            list_partner.slick({
                slidesToShow: 5,
                slidesToScroll: 5,
                dots: true,
                arrows: true,
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                    }
                }]
            });
        }

    }
}
var customer = {
    init: function () {
        var list_customers = $('.list-customers');
        var item_customers = $('.list-customers .item-customer');
        if ( item_customers.length > 2 && list_customers.length ) {
            list_customers.slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false,
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        centerMode: true,
                        centerPadding: '30px',
                    }
                }]
            });
        }

    }
}
var product_suggest = {
    init: function () {
        var product_suggest_list = $('.list-product-suggest');
        var number_slide = product_suggest_list.children().length;
        if (product_suggest_list.length > 0 && number_slide > 4) {
            product_suggest_list.slick({
                slidesToShow: 6,
                slidesToScroll: 3,
                dots: false,
                arrows: true,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerMode: true,
                        centerPadding: '90px',
                        arrows: false,
                        dots: false,
                    }
                },{
                    breakpoint: 415,
                    settings: {
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 1,
                        slidesToScroll: 2,
                        centerMode: true,
                        centerPadding: '90px',
                        arrows: false,
                        dots: false,
                    }
                }]
            });
        }
    }
}
var newspaper = {
    init: function () {
        var list_newspaper = $('.list-newspaper');
        var number_slide = $(".list-newspaper .newspaper").length;
        if (list_newspaper.length > 0 && number_slide > 2) {
            list_newspaper.slick({
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: true,
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 2,

                    }
                }]
            });
        }
    }
}
var gallery_popup = {
    init: function () {
        //Image popup
        var image_link = $('.image-link');
        if (image_link.length > 0) {
            image_link.magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
    }
}
var product_fillter_mobile = {
    init: function () {
        $('.product-fillter-mobile').on('click', function () {
            $(this).toggleClass('show');
            $('.wrap-fillter').toggleClass('show');
        })
        $(document).click(function (e) {
            if (!$(e.target).closest(".product-fillter-mobile, .wrap-fillter").length) {
                $(".wrap-fillter, .product-fillter-mobile").removeClass('show');
            }
        })
    }
}
var single_product_gallery = {
    init: function () {
        var list_product_gallery = $('.list-product-gallery');
        var list_product_thumb = $('.list-product-thumb');
        if (list_product_gallery.length > 0 && list_product_thumb.length > 0) {
            $('.list-product-gallery').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                fade: true,
                asNavFor: '.list-product-thumb'
            });
            $('.list-product-thumb').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: '.list-product-gallery',
                dots: false,
                focusOnSelect: true
            });
        }
    }
}
var show_more = {
    init: function () {
        var more_tag = $('.archive-description .more-tag');
        more_tag.parent().nextAll().css('display', 'none');
        more_tag.click(function () {
            $(this).hide();
            more_tag.parent().nextAll().css('display', 'block');
            return false;
        })
    }
}
var action_bar = {
    init: function () {

        $('.action-bar .call a').click(function () {
            $(this).toggleClass('active');
            $('.action-bar .list-hotline').toggleClass('show');
            $('.droplet').toggleClass('show');
            return false;
        })
        $('.droplet').click(function () {
            $(this).toggleClass('show');
            $('.action-bar .list-hotline').removeClass('show');
            $('.action-bar .call a').removeClass('active');
        })
    }
}
var google_form = {
    init: function () {
        var send_contact = $('.fitting-form');
        if (send_contact.length > 0) {
            send_contact.on('submit', function () {
                var container = $(this);
                google_form.send_fitting_to_google(container);
                return false;
            });
        }
    },
    send_fitting_to_google: function (container) {
        var fullname = $(container).find('[name="fullname"]').val();
        var numberphone = $(container).find('[name="numberphone"]').val();
        var content = "Fiiting theo yêu cầu - " + $(container).find('[name="content"]').val();
        var data_url = window.location.href;
        var data_url_referrer = document.referrer;
        var success_message = '<div class="alert alert-success mt-2 message-text text-center" role="alert">';
        success_message += '<p class="text-center">Gửi thành công! Chúng tôi sẽ sớm liên hệ với bạn.</p>'
        success_message += '</div>';
        if ((fullname !== "") && (numberphone !== "")) {
            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfq3qC3-iFX6KGaLsMGSI4tRyn3L0UcV2anR-fd7F7VPui0Uw/formResponse",
                data: {
                    "entry.1761257764": fullname,
                    "entry.450145171": numberphone,
                    "entry.916647566": content,
                    "entry.1772138398": data_url,
                    "entry.410446584": data_url_referrer,
                },
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                        $(container).next('.result-form').append(success_message);
                        $(container).closest('form').find("[type=text], [type=email]").val("");
                        $(container).find('button').attr('disabled', 'disabled');
                        setTimeout(function () {
                            $(container).next('.result-form').empty();
                        }, 3000);
                        setTimeout(function () {
                            $('#modal-fitting').modal('hide');
                        }, 5000);
                    },
                    200: function () {
                        $(container).next('.result-form').append(success_message);
                        $(container).closest('form').find("[type=text], , [type=email]").val("");
                        $(container).find('button').attr('disabled', 'disabled');
                        setTimeout(function () {
                            $(container).next('.result-form').empty();
                        }, 3000);
                        setTimeout(function () {
                            $('#modal-fitting').modal('hide');
                        }, 5000);

                    }
                }
            });
        } else {
            alert('Kiểm tra lại các thông vừa nhập')
        }
    },

};
var slide_video = {
    init: function () {
        var list_slide_video = $('.home-video .list-video-slide');
        var number_slide = $('.home-video .list-video-slide .list-video-item').length;
        if(list_slide_video.length > 0 && number_slide >= 3){
            list_slide_video.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                draggable: true,
                centerMode: true,
                centerPadding: '25%',
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        centerPadding: '100px',
                    }
                },{
                    breakpoint: 429,
                    settings: {
                        centerPadding: '80px',
                    }
                },{
                    breakpoint: 376,
                    settings: {
                        centerPadding: '50px',
                    }
                }]
            });
        }
    }
}
var slide_banner_product = {
    init: function () {
        var slide_banner = $('.slide-banner-product');
        var number_silde = $('.slide-banner-product .slide-banner-item').length;
        if(slide_banner.length > 0 && number_silde > 0){
            slide_banner.slick({
                dots: false,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                centerMode: true,
                centerPadding: '30px',
                speed: 500,
                arrows:false,
                mobileFirst:true,
                responsive:[
                {
                    breakpoint: 1024,
                    settings: "unslick",
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        arrows: false,
                        dots: false,
                        infinite: true,
                        variableWidth: true,
                        centerPadding: '30px',
                    },
                }],
            })
        }
    }
}

var service_slider ={
    init: function(){
        var slide_hlv = $('.list-hlv');
        var review_slide_product = $('.review-list-product');
        var related_post_list = $('.related-post-list');
        if(slide_hlv.length > 0 ){
            slide_hlv.slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 500,
                autoplay: false,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true,
                        }
                    },
                ]
            });
        }
        if(review_slide_product.length > 0){
            review_slide_product.slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 500,
                autoplay: false,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true,
                        }
                    },
                ]
            });
        }
        if(related_post_list.length > 0){
            related_post_list.slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 500,
                autoplay: false,
                autoplaySpeed: 2000,
                responsive: [
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: true,
                        }
                    },
                ]
            });
        }
    }
}
jQuery(document).ready(function () {
    top_nav_menu.init();
    // sticky_nav.init();
    about_nav_menu.init();
    menu_mobile.init();
    common_settings.init();
    google_form.init();
    google_form_contact.init();
    hero_slide.init();
    home_product.init();
    home_brand.init();
    testinomial.init();
    gallery_popup.init();
    partner.init();
    customer.init();
    brand.init();
    newspaper.init();
    brand_archive.init();
    product_viewed.init();
    product_fillter_mobile.init();
    single_product_gallery.init();
    show_more.init();
    action_bar.init();
    product_suggest.init();
    product_bestsale.init();
    feedback_customer.init();
    slide_video.init();
    slide_banner_product.init();
    google_form_register.init();
    service_slider.init();
    $('.list-service').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:true,
        asNavFor: '.list-title'
    });
    $('.list-title').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.list-service',
        dots: false,
        arrows:false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        }]
    });
});