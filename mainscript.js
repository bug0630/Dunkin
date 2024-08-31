jQuery(document).ready(function () {
  var $right = $(".right"),
    $left = $(".left"),
    $mainslider = $(".slider_main"),
    $slider = $(".slider").find("li"),
    $nav = $(".gnb_li"),
    $depth = $(".depth_wrap"),
    $slide_btn = $(".slide_btn").find("li"),
    $menu_btn = $(".menu_btn div"),
    $menu = $(".slide ul"),
    $event = $(".event ul"),
    a = 0,
    b = 0,
    i = 0;

  $depth.eq(0).css({ "z-index": "2" });

  $nav.each(function (index) {
    $(this).hover(
      function () {
        $depth.css({ height: "300px" });
        $depth.eq(index).css({ "z-index": "2" });
      },
      function () {
        $depth.css({ height: "0" });
        $depth.eq(index).css({ "z-index": "1" });
      }
    );
  });

  function auto2() {
    $right.click();
  }

  let autoSlide = setInterval(auto2, 5000);

  let hoverTimeout;
  $mainslider.hover(
    function () {
      clearTimeout(hoverTimeout);
      clearInterval(autoSlide);
    },
    function () {
      hoverTimeout = setTimeout(function () {
        autoSlide = setInterval(auto2, 5000);
      }, 100);
    }
  );

  $slide_btn.each(function (index) {
    $(this).click(function () {
      $slider.css({ left: "100%" });
      $slider.eq(index).css({ left: "0" });
      $slider
        .eq(index === 0 ? $slider.length - 1 : index - 1)
        .css({ left: "-100%" });
      a = index;
      b = index === 0 ? $slider.length - 1 : index - 1;
      $slide_btn.css({ "background-color": "black" });
      $(this).css({ "background-color": "white" });
    });
  });

  function moveSlider(nextIndex) {
    $slider.eq(a).css({ left: "0" }).animate({ left: "-100%" });
    $slider.eq(nextIndex).css({ left: "100%" }).animate({ left: "0" });

    $slide_btn.css({ "background-color": "black" });
    $slide_btn.eq(nextIndex).css({ "background-color": "white" });

    // 슬라이드 이동 후 인덱스 업데이트
    a = nextIndex;
    b = (a - 1 + $slider.length) % $slider.length;
  }

  $right.click(function () {
    let nextIndex = (a + 1) % $slider.length;
    moveSlider(nextIndex);
  });

  $left.click(function () {
    let prevIndex = (a - 1 + $slider.length) % $slider.length;
    moveSlider(prevIndex);
  });

  $menu.fadeOut().eq(0).fadeIn();
  $menu_btn.each(function (index) {
    $(this).click(function () {
      $menu.fadeOut().eq(index).fadeIn();
    });
  });

  $(".gudetama2").fadeOut();
  $(".store_wrap").mouseover(function () {
    $(".delivery").css({ left: "750px", "transition-duration": "2s" });
    $(".gudetama").fadeOut(3000);
    $(".gudetama2").fadeIn(3000);
  });

  function auto() {
    i = (i + 1) % $event.length;
    $event.fadeOut().eq(i).fadeIn(1000);
  }

  setInterval(auto, 5000);
});
