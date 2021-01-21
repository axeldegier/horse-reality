$(document).ready(function () {

  $('.color-choose input').on('click', function () {
    const selector = $(this).attr('data-image');

    const container = $(this).closest('main');

    container.find('.left-column .active').removeClass('active');
    // $('.active').removeClass('active');
    container.find('.left-column img[data-image = ' + selector + ']').addClass('active');
    $(this).addClass('active');
  });

});