$(document).ready(function () {
    size_div = $(".portfolio-item").size();
    x=6;
    $('.portfolio-item:lt('+x+')').show();
    $('#load-more').click(function () {

        x= (x+6 <= size_div) ? x+6 : size_div;
        $('.portfolio-item:lt('+x+')').fadeIn(1500);
        if (x == size_div) {
        	$(this).remove();
        };
    });
});