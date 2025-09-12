$(function () {
  var navHeight = $(".header").outerHeight() || 0;

  $('a[href^="#"]').on("click", function (e) {
    var href = $(this).attr("href");
    var $target = $(href === "#" || href === "" ? "html" : href);
    if (!$target.length) return;
    e.preventDefault();
    var pos = $target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: pos }, 300, "swing");
  });

  // ページトップ
  $("#js-page-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  // ハンバーガー開閉
  $("#hamburger").on("click", function () {
    $("#sp-nav").toggleClass("show");
    var expanded = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!expanded));
  });

  // 画面幅が戻ったらメニューを閉じる
  $(window).on("resize", function () {
    if (window.innerWidth > 767) {
      $("#sp-nav").removeClass("show");
      $("#hamburger").attr("aria-expanded", "false");
    }
  });
});

// ================================
// ローディング（
// ================================

// 「Loading...」のドットアニメーション
let dots = 0;
const loadingTimer = setInterval(function () {
  dots = (dots + 1) % 4; // 0〜3
  $(".loading-text").text("Loading" + ".".repeat(dots));
}, 500);

$(window).on("load", function () {
  const SHOW_MS = 2000;

  setTimeout(function () {
    $("#loading-screen").css({ opacity: "0", transition: "opacity 1s ease" });

    setTimeout(function () {
      $("#loading-screen").hide();
      $("body").addClass("loaded");
      clearInterval(loadingTimer);
    }, 1000); // フェード時間
  }, SHOW_MS);
});

// ================================
// ヘッダーの色を切り替える
// ================================

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const targets = document.querySelectorAll("#works, #about");
  let darkMode = false;

  targets.forEach((section) => {
    const rect = section.getBoundingClientRect();
    // ビューポート上部から60pxの位置がセクション内にあるかどうか
    if (rect.top <= 60 && rect.bottom >= 60) {
      darkMode = true;
    }
  });

  if (darkMode) {
    header.classList.add("dark"); // 黒文字モードON
  } else {
    header.classList.remove("dark"); // 白文字モードOFF（白文字に戻る）
  }
});

// ================================
// Skills
// ================================
$(function () {
  function revealSkills() {
    var scroll = $(window).scrollTop();
    var winH = $(window).height();

    $(".skill-block").each(function (i) {
      var $el = $(this);
      if ($el.hasClass("animate")) return;
      var elemTop = $el.offset().top;
      if (scroll > elemTop - winH + 100) {
        setTimeout(function () {
          $el.addClass("animate");
        }, i * 400);
      }
    });
  }

  $(window).on("scroll", revealSkills);
  revealSkills();
});
