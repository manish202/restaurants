$(document).ready(function(){
    $('.nav-icon').click(function(e){
        $(this).toggleClass('active');
        $('#toggleme').toggle('slow');
    }); 

    $('.owl-carousel').owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            },
            1030:{
                items:5
            }
        },
        autoplay: true,
        dots: false

    });
    var target = $('#heading');
    $(window).scroll(function(){
        var scroll_value = $(window).scrollTop();
        if(scroll_value > 450){
            target.addClass('fixed-top');
            target.css({'boxShadow':'0px 3px 5px grey','padding':'0'});
        }else{
            target.css({'boxShadow':'0px 3px 5px grey','padding':'5px 0px'});
            target.removeClass('fixed-top');
        }
    });

    function rem(){
        $('.tab-box label').each(function(){
            $(this).removeClass('active');
        });
    }
    $('.tab-box label').each(function(){
        $(this).click(function(){
            rem();//class removing function.
            $(this).addClass('active');
        });
    });  
    
});