$(function () {
  "use strict";

  let preloader = document.getElementById("page-preloader");
  if (preloader) {
    if (document.readyState === "complete") {
      onLoad();
    } else addEventListener("DOMContentLoaded", onLoad);

    function onLoad() {
      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
        preloader.classList.add("z-n1");
      }
    }

    window.setTimeout(function () {
      if (!preloader.classList.contains("done")) {
        preloader.classList.add("done");
        preloader.classList.add("z-n1");
      }
    }, 3000);
  }

  // Lang
  let language = navigator.language || navigator.userLanguage;
  let languageFistTwo = language.substr(0, 2); // To only keep the first 2 characters.
  let currentLocation = document
    .getElementsByTagName("html")[0]
    .getAttribute("lang");
  let cookie = get_cookie("lang");
  if (!cookie) {
    switch (languageFistTwo) {
      case "by":
      case "ua":
      case "kg":
      case "kz":
      case "ge":
      case "az":
      case "am":
      case "tj":
      case "tm":
      case "ru":
        if (currentLocation != "ru") {
          $("#LangAlert").show();
        }
        break;
      default:
        if (currentLocation != "en") {
          $("#LangAlert").show();
        }
    }
  } else {
    $("#LangAlert").hide();
  }
  $("#LangAlert .btn-close, #LangAlert .btn-continue").on("click", function () {
    $("#LangAlert").animate(
      { "margin-top": "-" + $("#LangAlert").outerHeight() + "px" },
      350
    );
    let date = new Date();
    date.setDate(date.getDate() + 365);
    document.cookie =
      "lang=1; path=/; SameSite=Strict; expires=" + date.toGMTString();
    setTimeout(function () {
      $("#LangAlert").hide();
    }, 350);
  });
  $("#LangAlert .btn-go").on("click", function () {
    event.preventDefault();
    let date = new Date();
    date.setDate(date.getDate() + 365);
    document.cookie =
      "lang=1; path=/; SameSite=Strict; expires=" + date.toGMTString();
    document.location = $(this).attr("href");
  });
  // Forma
  $(".btn-get-mobile").on("click", function () {
    event.preventDefault();
    $("#ModalMenu").modal("hide");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $("#contact").offset().top,
        },
        1500
      );
  });
  // feedback
  // if (
  //   $("#feedback [name=name]").val() != "" &&
  //   $("#feedback [name=email]").val() != ""
  // ) {
  //   if ($("body").hasClass("gray")) {
  //   } else {
  //     $("#feedback .send img:last-child").attr({
  //       src: "/static/v2/send-2.png",
  //     });
  //   }
  // }
  // $("#feedback *[name]").keydown(function (e) {
  //   if (
  //     $("#feedback [name=name]").val() != "" &&
  //     $("#feedback [name=email]").val() != ""
  //   ) {
  //     if ($("body").hasClass("gray")) {
  //     } else {
  //       $("#feedback .send img:last-child").attr({
  //         src: "/static/v2/send-2.png",
  //       });
  //     }
  //   } else {
  //     if ($("body").hasClass("gray")) {
  //     } else {
  //       $("#feedback .send img:last-child").attr({
  //         src: "/static/v2/send-1.png",
  //       });
  //     }
  //   }
  // });
  // $("#feedback *[name]").keypress(function (e) {
  //   $(this).removeClass("is-invalid");
  //   $("#feedback .error").html("&nbsp;");
  // });
  // $("#feedback").submit(function (event) {
  //   event.preventDefault();
  //   $("#feedback .btn-send").attr("disabled", "disabled");
  //   var data = $(this).serialize();
  //   $.ajax({
  //     type: "POST",
  //     url: $(this).attr("action"),
  //     data: data,
  //     dataType: "json",
  //     success: function (responce) {
  //       $("#feedback .btn-send").removeAttr("disabled");
  //       if (responce.result) {
  //         $("#feedback")[0].reset();
  //         $("#ModalTrue").modal("show");
  //       } else {
  //         $.each(responce.error, function (i, item) {
  //           $("#feedback *[name=" + item.name + "]").addClass("is-invalid");
  //         });
  //         if (responce.errorText)
  //           $("#feedback .error").html(responce.errorText);
  //       }
  //     },
  //   });
  // });
  // Smartfon menu
  $(".smart-menu>.btn").on("click", function () {
    let date = new Date();
    date.setDate(date.getDate() + 365);
    document.cookie =
      "lang=1; path=/; SameSite=Strict; expires=" + date.toGMTString();
    $("#LangAlert").hide();
    $("#ModalMenu").modal("show");
  });
  // up
  $("#Up").on("click", function () {
    $("html, body").stop().animate({ scrollTop: 0 }, 1800);
  });
  //Start
  start();
  $(window).resize(function () {
    start();
  });
  //Corner
  $(".media-collapse .collapse").on("show.bs.collapse", function () {
    $('a[href="#' + $(this).attr("id") + '"]>svg').css(
      "transform",
      "rotate(180deg)"
    );
  });
  $(".media-collapse .collapse").on("hide.bs.collapse", function () {
    $('a[href="#' + $(this).attr("id") + '"]>svg').css(
      "transform",
      "rotate(0deg)"
    );
  });
  // Creatives
  $(".creatives-mob>div").on("pointerdown", function () {
    $(".creatives-mob>div").removeClass("creatives-clicked");
    $(this).addClass("creatives-clicked");
    // alert('pointerdown');
  });
  window.addEventListener("scroll", (e) => {
    $(".creatives-mob>div").removeClass("creatives-clicked");
  });
  window.addEventListener("pointerup", (e) => {
    $(".creatives-mob>div").removeClass("creatives-clicked");
  });
  $(".creatives-mob>div>img").ondragstart = function () {
    return false;
  };

  $(".creatives, .creatives>div, .creatives>div>img").on(
    "contextmenu",
    function () {
      event.preventDefault();
    }
  );
  if ($("body>canvas").hasClass("stars")) {
  }

  if ($("#CasesAccordion").height()) {
    $("#CasesAccordion .accordion-collapse").on("click", function () {
      let myCollapse = document.getElementById($(this).attr("id"));
      let bsCollapse = new bootstrap.Collapse(myCollapse, {
        hide: true,
      });
    });
    /*if (isMobile.any()) {
            $('#CasesAccordion .accordion-button').on('click', function () {
                if ($(this).hasClass('collapsed')) {
                    $(this).find('picture').css({opacity: 0.1, transform: 'none'});
                }
            });
        }*/
  }

  //CGI
  if ($("#CgiAccordion").height()) {
    $("#CgiAccordion .accordion-collapse").on("click", function () {
      let myCollapse = document.getElementById($(this).attr("id"));
      let bsCollapse = new bootstrap.Collapse(myCollapse, {
        hide: true,
      });
    });
    /*
        if (isMobile.any()) {
            $('#CgiAccordion .accordion-button').on('click', function () {
                if ($(this).hasClass('collapsed')) {
                    $(this).find('picture').css({opacity: 0.1, transform: 'none'});
                }
            });
        }*/
  }

  if ($(".accordion").height()) {
    $(".accordion .accordion-body img").preload();
  }

  let nostars = document.querySelector("#nostars");
  if (!isMobile.any() & !nostars) {
    var i,
      size,
      color,
      width = window.screen.width,
      height = 450;

    for (i = 1; i <= 10; i++) {
      size = Math.ceil(2 * Math.random());
      var blinking = ["blinking-2", "blinking-3", "blinking-4", "blinking-5"];
      var blink = blinking[Math.floor(Math.random() * blinking.length)];
      var heightfirst = height;
      $("#stars").append(
        '<div class="star ' +
          blink +
          '" data-parallaxify-range="' +
          Math.round(20 * Math.random()) +
          '" style="top: ' +
          Math.round(heightfirst * Math.random()) +
          "px; left: " +
          Math.round(width * Math.random()) +
          "px; width: " +
          size +
          "px; height: " +
          size +
          'px;"></div>'
      );
    }
    for (i = 1; i <= 10; i++) {
      size = Math.ceil(2 * Math.random()) + 1;
      var colors = ["#17AFC8", "#007184", "#00C3E3"];
      color = colors[Math.floor(Math.random() * colors.length)];

      var blinking = ["blinking-2", "blinking-3", "blinking-4", "blinking-5"];
      var blink = blinking[Math.floor(Math.random() * blinking.length)];

      $("#stars").append(
        '<div class="star ' +
          blink +
          '" data-parallaxify-range="' +
          Math.round(20 * Math.random()) +
          '" style="top: ' +
          Math.round(height * Math.random()) +
          "px; left: " +
          Math.round(width * Math.random()) +
          "px; width: " +
          size +
          "px; height: " +
          size +
          "px; background: " +
          color +
          "; box-shadow: 0px 0px 5px " +
          color +
          ';"></div>'
      );
    }
    for (i = 1; i <= 10; i++) {
      size = Math.ceil(2 * Math.random()) + 1;
      var colors = ["#17AFC8", "#007184", "#00C3E3"];
      color = colors[Math.floor(Math.random() * colors.length)];
      $("#stars").append(
        '<div class="star" data-parallaxify-range="' +
          Math.round(30 * Math.random()) +
          '" style="top: ' +
          (Math.round(height * Math.random()) - 100) +
          "px; left: " +
          Math.round(width * Math.random()) +
          "px; width: " +
          size +
          "px; height: " +
          size +
          "px; background: " +
          color +
          "; box-shadow: 0px 0px 5px " +
          color +
          ';"></div>'
      );
    }
    $.parallaxify({
      positionProperty: "transform",
      responsive: true,
      motionType: "natural",
      mouseMotionType: "gaussian",
      motionAngleX: 80,
      motionAngleY: 80,
      alphaFilter: 0.5,
      adjustBasePosition: true,
      alphaPosition: 0.025,
    });
  }
});
// ждем полной загрузки страницы
window.onload = () => {
  // создаем наблюдатель Path
  if ($(".path_svg").height()) {
    const observer_path = new IntersectionObserver(
      (entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach((entry) => {
          // если элемент является наблюдаемым
          if (entry.isIntersecting) {
            //Действие
            // entry.target.style.animation = 'dash 6s linear forwards'
            $("#path").css({ animation: "dash 6s linear forwards" });
            // прекращаем наблюдение
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.8 }
    );
    // observer_path.observe(document.getElementById("path"));
    observer_path.observe(document.querySelector(".path_svg"));
  }
  // создаем наблюдатель Path
  const observerR = new IntersectionObserver(
    (entries, observer) => {
      // для каждой записи-целевого элемента
      entries.forEach((entry) => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
          //Действие
          entry.target.style.visibility = "visible";
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInRight"
          );
          // прекращаем наблюдение
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px", threshold: 0.5 }
  );
  document
    .querySelectorAll(".ARight")
    .forEach((item) => observerR.observe(item));
  //observerR.observe(document.querySelector('.ARight'))

  // создаем наблюдатель Path
  const observerL = new IntersectionObserver(
    (entries, observer) => {
      // для каждой записи-целевого элемента
      entries.forEach((entry) => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
          //Действие
          entry.target.style.visibility = "visible";
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInLeft"
          );
          // прекращаем наблюдение
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px", threshold: 0.5 }
  );
  document
    .querySelectorAll(".ALeft")
    .forEach((item) => observerL.observe(item));
  // observerL.observe(document.querySelector('.ALeft'))
};

function size(item) {
  var maxHeight = 0;
  $(item)
    .each(function () {
      maxHeight = Math.max(maxHeight, $(this).height("").height());
    })
    .height(maxHeight);
}

function start() {
  //up
  $(window).scroll(function () {
    if ($(window).width() >= 768) {
      if ($(window).scrollTop() > 700) {
        $("#Up").show();
      } else {
        $("#Up").hide();
      }
    } else {
      $("#Up").hide();
    }
  });
  if ($(window).width() < 1200) {
    size(".traffic .item");
  }
  if ($(window).width() < 768) {
    $(".creatives-mob>div>img").height($(window).width());
  }

  if ($(window).width() < 1200) {
    $(".creatives-tablet>div>img").height($(window).width());
  }
}

//Trafic
var hoverMouse = function ($el) {
  $el.each(function () {
    var $self = $(this);
    var hover = false;
    var offsetHoverMax = $self.attr("offset-hover-max") || 1;
    var offsetHoverMin = $self.attr("offset-hover-min") || 0.75;

    var attachEventsListener = function () {
      $(window).on("mousemove", function (e) {
        var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

        var cursor = {
          x: e.clientX,
          y: e.clientY + $(window).scrollTop(),
        };

        var width = $self.outerWidth();
        var height = $self.outerHeight();

        var offset = $self.offset();
        var elPos = {
          x: offset.left + width / 2,
          y: offset.top + height / 2,
        };

        var x = cursor.x - elPos.x;
        var y = cursor.y - elPos.y;

        var dist = Math.sqrt(x * x + y * y);

        var mutHover = false;

        if (dist < width * hoverArea) {
          mutHover = true;
          if (!hover) {
            hover = true;
          }
          onHover(x, y);
        }

        if (!mutHover && hover) {
          onLeave();
          hover = false;
        }
      });
    };

    var onHover = function (x, y) {
      TweenMax.to($self, 0.04, {
        x: x * 0.08,
        y: y * 0.08,
        rotation: x * 0.005,
        ease: Power2.easeOut,
      });
    };
    var onLeave = function () {
      TweenMax.to($self, 0.7, {
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
        ease: Elastic.easeOut.config(1.2, 0.4),
      });
    };

    attachEventsListener();
  });
};

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

//Мобильный браузер
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
if (!isMobile.any()) {
  hoverMouse($(".traffic .item"));
}

//Куки
function get_cookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Accordion

const accordionItems = document.querySelectorAll(".accordion__item");

if (accordionItems.length) {
  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion__button");
    const text = item.querySelector(".accordion__text");

    button.addEventListener("click", () => {
      const isOpened = item.classList.contains("opened");

      accordionItems.forEach((openedItem) => {
        if (openedItem !== item) {
          const openedText = openedItem.querySelector(".accordion__text");
          openedText.style.maxHeight = "0px";
          openedItem.classList.remove("opened");
        }
      });

      if (isOpened) {
        text.style.maxHeight = "0px";
        item.classList.remove("opened");
      } else {
        item.classList.add("opened");
        text.style.maxHeight = text.scrollHeight + "px";
      }
    });
  });
}
