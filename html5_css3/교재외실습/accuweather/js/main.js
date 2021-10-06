// var result = getCurrentWeather("incheon");

var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$(".temp").each(function(i) {
      $(this).text(getCurrentTemp(cityList[i]) + "℃");
});

$(".location").on({
      "click" : function() {
            var q = $(this).children(".q").attr("id");
            var redirctURL = "pages/weather_location.html?q=" + q;
            location.href = redirctURL;
      }
});