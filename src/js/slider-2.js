jQuery(document).ready(function ($) {

  // $('#checkbox').change(function(){
  //   setInterval(function () {
  //       moveRight();
  //   }, 4000);
  // });

	var slideCount = $('#slider .collect-list .collect-item').length;
	var slideWidth = $('#slider .collect-list .collect-item').width();
	var slideHeight = $('#slider .collect-list .collect-item').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider .collect-list').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider .collect-list .collect-item:last-child').prependTo('#slider .collect-list');

    function moveLeft() {
        $('#slider .collect-list').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider .collect-list .collect-item:last-child').prependTo('#slider .collect-list');
            $('#slider .collect-list').css('left', '');
        });
    };

    function moveRight() {
        $('#slider .collect-list').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider .collect-list .collect-item:first-child').appendTo('#slider .collect-list');
            $('#slider .collect-list').css('left', '');
        });
    };

      // setInterval(function () {
      //   moveRight();
      // }, 5000);

    $('a.control-prev').click(function () {
        moveLeft();
    });

    $('a.control-next').click(function () {
        moveRight();
    });

});
