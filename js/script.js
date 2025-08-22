$(function () {
  // ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position }, 300, "swing");
    return false;
  });

  // ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 300);
    return false;
  });

  // ハンバーガーメニュー開閉
  $("#hamburger").on("click", function () {
    $("#sp-nav").toggleClass("show");
    const expanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!expanded));
  });
  $(window).on("resize", function () {
    if (window.innerWidth > 767) {
      $("#sp-nav").removeClass("show");
      $("#hamburger").attr("aria-expanded", "false");
    }
  });
});

// ローディング処理
$(window).on("load", function () {
  setTimeout(function () {
    $("#loading-screen").css({
      opacity: "0",
      transition: "opacity 1s ease",
    });
    setTimeout(function () {
      $("#loading-screen").css("display", "none");
      $("body").addClass("loaded");
    }, 1000);
  }, 2000); // 最初のローディング時間
});

var dots = 0;
var loadingInterval = setInterval(function () {
  dots = (dots + 1) % 5;
  $(".loading-text").text("Loading" + ".".repeat(dots));
}, 500);

$(window).on("load", function () {
  setTimeout(function () {
    $("#loading-screen").css({
      opacity: "0",
      transition: "opacity 1s ease",
    });
    setTimeout(function () {
      $("#loading-screen").css("display", "none");
      $("body").addClass("loaded");
      clearInterval(loadingInterval); // ← ここで止める！
    }, 1000);
  }, 2000);
});

//skillsのアニメーション

$(function () {
  $(window).on("scroll", function () {
    $(".skill-block").each(function (i) {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        var $this = $(this);
        setTimeout(function () {
          $this.addClass("animate");
        }, i * 400);
      }
    });
  });
});
