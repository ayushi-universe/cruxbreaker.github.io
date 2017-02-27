//meters on scroll 

(function($) {          
    $(document).ready(function(){ 
        var width = $(window).width();
        if (width>450) {
            $(window).scroll(function(){                          
                if ($(this).scrollTop() > 1000) {
                    $('.skill-cpp').animate({width:'60%'}, 3000, 'swing');
                    $('.skill-os').animate({width:'60%'}, 3000, 'swing');
                    $('.skill-js').animate({width:'65%'}, 3000, 'swing');
                    $('.skill-html').animate({width:'80%'}, 3000, 'swing');
                    $('.skill-ml').animate({width:'50%'}, 3000, 'swing');
                }
            });
        }                   
    });
})(jQuery);