$(".gnb > li").mouseenter(function () {
  $(this).find(".depth2").stop().fadeIn();
  $(".depth2_bg").stop().fadeIn();
  $("#header").addClass("active");
});

$(".gnb > li").mouseleave(function () {
  $(this).find(".depth2").stop().fadeOut();
  $(".depth2_bg").stop().fadeOut();
  $("#header").removeClass("active");
});

$(".ham").click(function () {
  $(".mgnb_wrap").fadeIn();
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});