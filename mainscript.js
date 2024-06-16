jQuery(document).ready(function () {
  var $right = $(".right"),
    $left = $(".left"),
    $slider = $(".slider").find("li"),
    a = 0,
    b = 0,
    c = 0,
    i = 0;

  ($nav = $(".gnb_li")),
    ($depth = $(".depth_wrap")),
    $depth.eq(0).css({ "z-index": "2" });

  $nav.mouseover(function () {
    $depth.css({ height: "300px" });
  });
  $nav.mouseout(function () {
    $depth.css({ height: "0" });
  });

  $nav.eq(0).mouseover(function () {
    $depth.eq(0).css({ "z-index": "2" });
  });
  $nav.eq(0).mouseout(function () {
    $depth.eq(0).css({ "z-index": "1" });
  });
  $nav.eq(1).mouseover(function () {
    $depth.eq(1).css({ "z-index": "2" });
  });
  $nav.eq(1).mouseout(function () {
    $depth.eq(1).css({ "z-index": "1" });
  });
  $nav.eq(2).mouseover(function () {
    $depth.eq(2).css({ "z-index": "2" });
  });
  $nav.eq(2).mouseout(function () {
    $depth.eq(2).css({ "z-index": "1" });
  });
  $nav.eq(3).mouseover(function () {
    $depth.eq(3).css({ "z-index": "2" });
  });
  $nav.eq(3).mouseout(function () {
    $depth.eq(3).css({ "z-index": "1" });
  });
  $nav.eq(4).mouseover(function () {
    $depth.eq(4).css({ "z-index": "2" });
  });
  $nav.eq(4).mouseout(function () {
    $depth.eq(4).css({ "z-index": "1" });
  });
  $nav.eq(5).mouseover(function () {
    $depth.eq(5).css({ "z-index": "2" });
  });
  $nav.eq(5).mouseout(function () {
    $depth.eq(5).css({ "z-index": "1" });
  });
  $nav.eq(6).mouseover(function () {
    $depth.eq(6).css({ "z-index": "2" });
  });
  $nav.eq(6).mouseout(function () {
    $depth.eq(6).css({ "z-index": "1" });
  });

  function auto2() {
    $right.click();
  }

  let autoSlide = setInterval(auto2, 3000);
  let stop = 1;

  $slider.mouseover(function () {
    if (stop == 1) {
      clearInterval(autoSlide);
      stop = 0;
    } else {
      autoSlide = setInterval(auto2, 3000);
      stop = 1;
    }
  });
  $slide_btn = $(".slide_btn").find("li");

  $slide_btn.eq(0).click(function () {
    $slider.css({ left: "100%" });
    $slider.eq(0).css({ left: "0" });
    $slider.eq(6).css({ left: "-100%" });
    a = 0;
    b = 0;
    $slide_btn.css({ "background-color": "black" });
    $slide_btn.eq(0).css({ "background-color": "white" });
  });
  $slide_btn.eq(1).click(function () {
    $slider.css({ left: "100%" });
    $slider.eq(1).css({ left: "0" });
    $slider.eq(0).css({ left: "-100%" });
    a = 1;
    b = 6;
    $slide_btn.css({ "background-color": "black" });
    $slide_btn.eq(1).css({ "background-color": "white" });
  });
  $slide_btn.eq(2).click(function () {
    $slider.css({ left: "100%" });
    $slider.eq(2).css({ left: "0" });
    $slider.eq(1).css({ left: "-100%" });
    a = 2;
    b = 5;
    $slide_btn.css({ "background-color": "black" });
    $slide_btn.eq(2).css({ "background-color": "white" });
  });
  $slide_btn.eq(3).click(function () {
    $slider.css({ left: "100%" });
    $slider.eq(3).css({ left: "0" });
    $slider.eq(2).css({ left: "-100%" });
    a = 3;
    b = 4;
    $slide_btn.css({ "background-color": "black" });
    $slide_btn.eq(3).css({ "background-color": "white" });
  });
  $slide_btn.eq(4).click(function () {
    $slider.css({ left: "100%" });
    $slider.eq(4).css({ left: "0" });
    $slider.eq(3).css({ left: "-100%" });
    a = 4;
    b = 3;
    $slide_btn.css({ "background-color": "black" });
    $slide_btn.eq(4).css({ "background-color": "white" });
  });
  $slide_btn.eq(5).click(function () {
    $slider.css({ left: "100%" });
    $slider.eq(5).css({ left: "0" });
    $slider.eq(4).css({ left: "-100%" });
    a = 5;
    b = 2;
    $slide_btn.css({ "background-color": "black" });
    $slide_btn.eq(5).css({ "background-color": "white" });
  });
  $slide_btn.eq(6).click(function () {
    $slider.css({ left: "100%" });
    $slider.eq(6).css({ left: "0" });
    $slider.eq(5).css({ left: "-100%" });
    a = 6;
    b = 1;
    $slide_btn.css({ "background-color": "black" });
    $slide_btn.eq(6).css({ "background-color": "white" });
  });

  $right.click(function () {
    if (a == 0) {
      $slider.eq(0).css({ left: "0" });
      $slider.eq(0).animate({ left: "-100%" });
      $slider.eq(1).css({ left: "100%" });
      $slider.eq(1).animate({ left: "0" });
      b = 6;
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(1).css({ "background-color": "white" });
      // 2번
    } else if (a == 1) {
      $slider.eq(1).css({ left: "0" });
      $slider.eq(1).animate({ left: "-100%" });
      $slider.eq(2).css({ left: "100%" });
      $slider.eq(2).animate({ left: "0" });
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(2).css({ "background-color": "white" });
      b = 5;
      // 3번
    } else if (a == 2) {
      $slider.eq(2).css({ left: "0" });
      $slider.eq(2).animate({ left: "-100%" });
      $slider.eq(3).css({ left: "100%" });
      $slider.eq(3).animate({ left: "0" });
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(3).css({ "background-color": "white" });
      b = 4;
      // 4번
    } else if (a == 3) {
      $slider.eq(3).css({ left: "0" });
      $slider.eq(3).animate({ left: "-100%" });
      $slider.eq(4).css({ left: "100%" });
      $slider.eq(4).animate({ left: "0" });
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(4).css({ "background-color": "white" });
      b = 3;
      // 5번
    } else if (a == 4) {
      $slider.eq(4).css({ left: "0" });
      $slider.eq(4).animate({ left: "-100%" });
      $slider.eq(5).css({ left: "100%" });
      $slider.eq(5).animate({ left: "0" });
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(5).css({ "background-color": "white" });
      b = 2;
      // 6번
    } else if (a == 5) {
      $slider.eq(5).css({ left: "0" });
      $slider.eq(5).animate({ left: "-100%" });
      $slider.eq(6).css({ left: "100%" });
      $slider.eq(6).animate({ left: "0" });
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(6).css({ "background-color": "white" });
      b = 1;
      // 7번
    } else if (a == 6) {
      $slider.eq(6).css({ left: "0" });
      $slider.eq(6).animate({ left: "-100%" });
      $slider.eq(0).css({ left: "100%" });
      $slider.eq(0).animate({ left: "0" });
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(0).css({ "background-color": "white" });
      b = 0;
      // 1번
    }
    a++;
    a = a % 7;
  });

  $left.click(function () {
    if (b == 0) {
      $slider.eq(0).css({ left: "0%" });
      $slider.eq(0).animate({ left: "100%" });
      $slider.eq(6).css({ left: "-100%" });
      $slider.eq(6).animate({ left: "0" });
      a = 6;
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(6).css({ "background-color": "white" });
    } else if (b == 1) {
      $slider.eq(6).css({ left: "0" });
      $slider.eq(6).animate({ left: "100%" });
      $slider.eq(5).css({ left: "-100%" });
      $slider.eq(5).animate({ left: "0" });
      a = 5;
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(5).css({ "background-color": "white" });
    } else if (b == 2) {
      $slider.eq(5).css({ left: "0" });
      $slider.eq(5).animate({ left: "100%" });
      $slider.eq(4).css({ left: "-100%" });
      $slider.eq(4).animate({ left: "0" });
      a = 4;
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(4).css({ "background-color": "white" });
    } else if (b == 3) {
      $slider.eq(4).css({ left: "0" });
      $slider.eq(4).animate({ left: "100%" });
      $slider.eq(3).css({ left: "-100%" });
      $slider.eq(3).animate({ left: "0" });
      a = 3;
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(3).css({ "background-color": "white" });
    } else if (b == 4) {
      $slider.eq(3).css({ left: "0" });
      $slider.eq(3).animate({ left: "100%" });
      $slider.eq(2).css({ left: "-100%" });
      $slider.eq(2).animate({ left: "0" });
      a = 2;
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(2).css({ "background-color": "white" });
    } else if (b == 5) {
      $slider.eq(2).css({ left: "0" });
      $slider.eq(2).animate({ left: "100%" });
      $slider.eq(1).css({ left: "-100%" });
      $slider.eq(1).animate({ left: "0" });
      a = 1;
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(1).css({ "background-color": "white" });
    } else if (b == 6) {
      $slider.eq(1).css({ left: "0" });
      $slider.eq(1).animate({ left: "100%" });
      $slider.eq(0).css({ left: "-100%" });
      $slider.eq(0).animate({ left: "0" });
      a = 0;
      $slide_btn.css({ "background-color": "black" });
      $slide_btn.eq(0).css({ "background-color": "white" });
    }
    b++;
    b = b % 7;
  });

  ($menu_btn = $(".menu_btn div")),
    ($menu = $(".slide ul")),
    $menu.fadeOut(),
    $menu.eq(0).fadeIn();

  $menu_btn.eq(0).click(function () {
    $menu.fadeOut();
    $menu.eq(0).fadeIn();
  });
  $menu_btn.eq(1).click(function () {
    $menu.fadeOut();
    $menu.eq(1).fadeIn();
  });
  $menu_btn.eq(2).click(function () {
    $menu.fadeOut();
    $menu.eq(2).fadeIn();
  });
  $menu_btn.eq(3).click(function () {
    $menu.fadeOut();
    $menu.eq(3).fadeIn();
  });
  $menu_btn.eq(4).click(function () {
    $menu.fadeOut();
    $menu.eq(4).fadeIn();
  });

  $(".gudetama2").fadeOut();
  $(".store_wrap").mouseover(function () {
    $(".delivery").css({ left: "750px", "transition-duration": "2s" });
    $(".gudetama").fadeOut(3000);
    $(".gudetama2").fadeIn(3000);
  });

  $event = $(".event ul");
  function auto() {
    i++;
    i = i % 3;
    $event.fadeOut();
    $event.eq(i).fadeIn(1000);
  }

  setInterval(auto, 5000);
});
