currentSelected = 0;
$(function () {
   $(".lunbo-button-item").hide();
   $(".lunbo-button-item").click(function () {
      currentSelected = $(this).attr("num");
      $(".lunbo-button-item").css("background-color", "transparent");;
      $(".lunbo-button-item").css("boder", ".1rem solid #fff");
      $(this).css("background-color", "#fff");
      $(this).css("boder", ".1rem solid #fff");
      $(".lunbo-list").removeClass("img1");
      $(".lunbo-list").removeClass("img2");
      $(".lunbo-list").removeClass("img3");
      $(".lunbo-list").addClass("img" + currentSelected);
   });

   $(".lunbo").mouseleave(function () {
      $(".lunbo-button-item").hide();
      $(".lunbo-button-item").css("background-color", "transparent");;
      $(".lunbo-button-item").css("boder", ".1rem solid #fff");
      $(".lunbo-list").removeClass("img1");
      $(".lunbo-list").removeClass("img2");
      $(".lunbo-list").removeClass("img3");
      $(".lunbo-list").addClass("lunbo-list-animation");
   });
   $(".lunbo").mouseenter(function () {
      $(".lunbo-button-item").show();

   });
});