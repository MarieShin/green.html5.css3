$(function() {
      var gnbFlag = false;
      var gnbIndex;

      $(".nav li").on({
            "mouseenter" : function() {
                  /* lnb show */

                  if (gnbIndex != undefined) {
                        $(".lnb").eq(gnbIndex).css("display", "none");
                  }

                  gnbIndex = $(this).index();
                  gnbFlag = true;

                  // 애니메이션 효과 적용
                  $(".lnb_container").removeClass("disappear");
                  $(".lnb_container").addClass("appear");
                  $(".lnb_container").show();

                  $(".lnb").eq(gnbIndex).css("display", "block"); // 인라인 태그의 우선순위를 이용

                  /* 액티브 바 show */

                  $(".active_bar").show();

                  // 선택된 li의 left와 width를 구해 active_bar의 위치와 길이를 조절한다.
                  var listLeft = $(this).offset().left;
                  var listWidth = $(this).width();

                  $(".active_bar").width(listWidth);
                  $(".active_bar").offset({left: listLeft + 17}); // li에 padding이 있었으므로 17을 더 더한다.
            },
            "mouseleave" : function() {
                  
            }
      });    
      
      $(".lnb_container").on({
            "mouseleave" : function() {
                  if (gnbFlag) {
                        $(".lnb_container").removeClass("appear");
                        $(".lnb_container").addClass("disappear");
                        $(".lnb_container").hide();
                        $(".active_bar").hide();
                  } else {
                        return;
                  }
            }      
      });
});