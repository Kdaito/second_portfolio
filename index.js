'use strict';

$(function () {
  const $header = $("header");
  const $navToggle = $(".nav-toggle");
  const $sideBar = $(".side-bar");
  const $navWrapper = $(".nav-wrapper");
  const $about = $(".about");
  const headerOffsetTop = $header.offset().top;
  const $window = $(window);

  $window.on("scroll", function() {
    if(headerOffsetTop < $window.scrollTop()) {
      $header.addClass("active");
      $about.addClass("active");
      $navToggle.addClass("active");
      $sideBar.addClass("active");
    } else {
      $header.removeClass("active");
      $about.removeClass("active");
      $navToggle.removeClass("active");
      $sideBar.removeClass("active");
    }
  });

  $navToggle.click(function() {
    $navWrapper.toggleClass("open");
    $navToggle.toggleClass("open");
    if($navWrapper.hasClass("open") && $navToggle.hasClass("open")) {
      $navWrapper.click(function() {
        $navWrapper.removeClass("open");
        $navToggle.removeClass("open");
      });
    }
  });

  let duration = 150;
  const $aside = $(".side-bar > aside");
  let $button = $aside.find("button");
  $button.on("click", function() {
    $aside.toggleClass("open");
    if($aside.hasClass("open")) {
      $aside.stop(true).animate(
        {
          left:"0rem",
        },duration
      );
      $button.find("span").text("close");
      $(document).click(function(event) {
        if(!$(event.target).closest($aside).length) {
          $aside.removeClass("open");
          $aside.stop(true).animate(
            {
              left:"-15rem",
            },duration
          );
          $button.find("span").text("open");
        }
      });
    } else {
      $aside.stop(true).animate(
        {
          left:"-15rem",
        },duration
      );
      $button.find("span").text("open");
    }
  });

  const $article = $("article");
  const $articleImage = $(".article-image > img");
  const $modal = $(".modal");
  const $modalTitle = $(".modal-title");
  const $modalContent = $(".modal-content");
  const $modalImage = $(".modal-img");
  const $modalBg = $(".modal-bg");
  const $modalBtn = $(".modal-close-btn");

  $article.click(function () {
    $modal.addClass("open");
    $modalTitle.text($(this).find(".article-title").text());
    $modalContent.text($(this).find(".article-content").text());
    $modalImage.attr("src", $(this).find($articleImage).attr("src"));
  });
  $modalBg.click(function() {
    $modal.removeClass("open");
  });
  $modalBtn.click(function() {
    $modal.removeClass("open");
  });
});