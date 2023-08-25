// For opening the menu
$(document).ready(function() {
  $(".open-menu").on("click", function(){
    $(".horizontal-nav").css("left", "0");
  });
});

// For closing the menu
$(document).ready(function() {
  $(".close").on("click", function(){
    $(".horizontal-nav").css("left", "-270px");
  });
});

// For Scrolling down
$(document).ready(function() {
  $(".horizontal-nav a").on("click", function(e) {
    e.preventDefault();
    var menuId = $(this).data("target");
    var positionOfSection = $(menuId).offset().top;
    $("html, body").animate({ scrollTop: positionOfSection }, 2000);
  });
});

// For toggling the slider down
$(document).ready(function() {
  $(".sliderDown h3").on("click", function() {
    $(this).next().slideToggle();
    $(".sliderDown div").not($(this).next()).slideUp();
  })
})

// For Timer
window.onload = function () {
  countDown("25 october 2023 9:56:00");
};

function countDown(count) {
  let newDate = new Date(count);
  newDate = newDate.getTime() / 1000;

  let todayDate = new Date();
  todayDate = todayDate.getTime() / 1000;

  let difference = newDate - todayDate;

  let days = Math.floor(difference / (24 * 60 * 60));
  let hours = Math.floor((difference - days * (24 * 60 * 60)) / 3600);
  let minutes = Math.floor(
    (difference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let seconds = Math.floor(
    difference - days * (24 * 60 * 60) - hours * 3600 - minutes * 60
  );

  $(".days").html(days);
  $(".hours").html(hours);
  $(".minutes").html(minutes);
  $(".seconds").html(seconds);

  setInterval(function () {
    countDown(count);
  }, 1000);
}

// For Textarea
var maxWords = 100;
$('textarea').keyup(function () {
  var length = $(this).val().length;
  var amountLeft = maxWords - length;
  if (amountLeft <= 0) {
    $("#chars").text("your available character finished");
  }
  else {
    $("#chars").text(amountLeft);
  }
})