var   url = "https://api.openweathermap.org/data/2.5/weather";
      url  += "?appid=4f0f6bb1d970d1be49fd39355683528e";
      url  += "&units=metric";
      url  += "&lang=kr";
      url  += "&q=";


// 현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city) {
      var dataObj;

      $.ajax({
            type: "GET",
            url: url += city,
            dataType: "json",
            // true : 비동기, false : 동기
            async: false,   // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
            success: function(data) {
                  // 정상 응답 시 처리 작업
                  dataObj = data;
            },
            error: function(request, status, error) {
                  // 응답 에러 시 처리 작업
                  console.log("code: " + request.status);
                  console.log("message:" + request.responseText);
                  console.log("error: " + error);
            }
      });

      return dataObj;
}

// 현재 날씨 온도 얻어오기
function getCurrentTemp(city) {
      var temp;
      var openweatherAPI = url;

      $.ajax({
            type: "GET",
            url: openweatherAPI += city,
            dataType: "json",
            async: false,   // 결과 데이터를 리턴시키기 위해 동기 방식으로 변경
            success: function(data) {
                  // 정상 응답 시 처리 작업
                  temp = Math.floor(data.main.temp);  // 소수점 버림
                  console.log(temp);
            },
            error: function(request, status, error) {
                  // 응답 에러 시 처리 작업
                  console.log("code: " + request.status);
                  console.log("message:" + request.responseText);
                  console.log("error: " + error);
            }
      });

      return temp;
}