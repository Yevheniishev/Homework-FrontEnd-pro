$('.accord__head').click(function() {
    $(this).toggleClass('accord__head--in').next().slideToggle();
    $('.accord__head').not(this).removeClass('accord__head--in').next().slideUp();
        });

