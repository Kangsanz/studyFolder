$(function() {
  // 헤더 섹션
  $('.service-list li a').each(function() {
    let thisData = $(this).attr('data');
    $(this).find('i').css('background-image', `url('img/header/service/${thisData}.svg')`)
  })

  $('.flex-nav-wrap.service').click(function() {
    $(this).toggleClass('on');
  })

  // 첫번째 섹션
  // $('.banner-wrap').each(function() {
  //   if ($(this).hasClass('active')) {
  //     $(this).css('animation-play-state', 'running');
  //   } else {
  //     $(this).css('animation-play-state', 'paused');
  //   }
  // })

  $('.banner-navigator .control-btn.next').click(function() {
    if ($('.banner-wrap.three').hasClass('active')) {
      $('.banner-wrap.active').removeClass('active').css('opacity', '0');
      $('.banner-wrap.one').css('opacity', '1').addClass('active');
      $('.progress.active').removeClass('active');
      $('.progress:first-child').addClass('active');
    } else {
      $('.banner-wrap.active').removeClass('active').css('opacity', '0').next().css('opacity', '1').addClass('active');
    }

    if ($('.banner-wrap.two').hasClass('active')) {
      $('.progress.active').next().addClass('active');
    } else if ($('.banner-wrap.three').hasClass('active')) {
      $('.progress.active').next().addClass('active');
    }
  })

  $('.banner-navigator .control-btn.prev').click(function() {
    if ($('.banner-wrap.one').hasClass('active')) {
      $('.banner-wrap.active').removeClass('active').css('opacity', '0');
      $('.banner-wrap.three').css('opacity', '1').addClass('active');
      $('.progress').addClass('active');
    } else {
      $('.banner-wrap.active').removeClass('active').css('opacity', '0').prev().css('opacity', '1').addClass('active');
    }

    if ($('.banner-wrap.two').hasClass('active')) {
      $('.progress.active:last-child').removeClass('active');
    } else if ($('.banner-wrap.one').hasClass('active')) {
      $('.progress:last-child').prev().removeClass('active');
    }
  });

  // 두번째 섹션
  $('.slide-wrapper').mouseenter(function() {
    $('.slide').css('animation-play-state', 'paused');
  });
  $('.slide-wrapper').mouseleave(function() {
    $('.slide').css('animation-play-state', 'running');
  });

  // 세번째 섹션
  let nowHeight = $(this).scrollTop();
  let headerHeight = $('#header').innerHeight() + $('#first').innerHeight() + $('#second').innerHeight();
  let sectionHeight = $('.illustration-slides-wrapper').innerHeight();
  let funcHeight = headerHeight + sectionHeight
  let isPrevOpacity = $('.navigator-wrap .control-btn.prev').css('opacity');
  let isNextOpacity = $('.navigator-wrap .control-btn.next').css('opacity');

  $('.navigator-wrap .control-btn.prev').click(function() {
    if ($('.dot.active').hasClass('two')) {
      $('html').stop().animate({
        scrollTop: headerHeight + 20
      }, 400);
    } else if ($('.dot.active').hasClass('three')) {
      $('html').stop().animate({
        scrollTop: funcHeight + 20
      }, 400);
    } else if ($('.dot.active').hasClass('four')) {
      $('html').stop().animate({
        scrollTop: funcHeight + sectionHeight + 20
      }, 400);
    } else if ($('.dot.active').hasClass('five')) {
      $('html').stop().animate({
        scrollTop: funcHeight + sectionHeight * 2 + 20
      }, 400);
    }
  });

  $('.navigator-wrap .control-btn.next').click(function() {
    if ($('.dot.active').hasClass('one')) {
      $('html').stop().animate({
        scrollTop: funcHeight + 20
      }, 400);
    } else if ($('.dot.active').hasClass('two')) {
      $('html').stop().animate({
        scrollTop: funcHeight + sectionHeight + 20
      }, 400);
    } else if ($('.dot.active').hasClass('three')) {
      $('html').stop().animate({
        scrollTop: funcHeight + sectionHeight * 2 + 20
      }, 400);
    } else if ($('.dot.active').hasClass('four')) {
      $('html').stop().animate({
        scrollTop: funcHeight + sectionHeight * 3 + 20
      }, 400);
    }
  });

  $('.dot').click(function() {
    if ($(this).hasClass('one')) {
      $('html').stop().animate({
        scrollTop: headerHeight + 20
      }, 400);
    } else if ($(this).hasClass('two')) {
      $('html').stop().animate({
        scrollTop: funcHeight + 20
      }, 400);
    } else if ($(this).hasClass('three')) {
      $('html').stop().animate({
        scrollTop: funcHeight + sectionHeight + 20
      }, 400);
    } else if ($(this).hasClass('four')) {
      $('html').stop().animate({
        scrollTop: funcHeight + sectionHeight * 2 + 20
      }, 400);
    } else if ($(this).hasClass('five')) {
      $('html').stop().animate({
        scrollTop: funcHeight + sectionHeight * 3 + 20
      }, 400);
    }
  })

  $(window).scroll(function() {
    let nowHeight = $(this).scrollTop();
    let headerHeight = $('#header').innerHeight() + $('#first').innerHeight() + $('#second').innerHeight();
    let sectionHeight = $('.illustration-slides-wrapper').innerHeight();
    let funcHeight = headerHeight + sectionHeight
    if (nowHeight >= funcHeight) {
      $('.navigator-wrap .control-btn.prev').css({
        "opacity": "1",
        "cursor": "pointer"
      });
      $('.dot').removeClass('active');
      $('.dot:nth-of-type(1)').next().addClass('active');
      $('.illustration-slides.two').css('transform', 'translateY(0)')
      $('.contents-slides.two').css('transform', 'translateY(0)')
    } else if (nowHeight < funcHeight) {
      $('.navigator-wrap .control-btn.prev').css({
        "opacity": "0.3",
        "cursor": "auto"
      });
      $('.dot').removeClass('active');
      $('.dot:nth-of-type(1)').addClass('active');
      $('.illustration-slides.two').css('transform', 'translateY(120vh)')
      $('.contents-slides.two').css('transform', 'translateY(120vh)')
    }

    if (nowHeight >= funcHeight + sectionHeight) {
      $('.dot').removeClass('active');
      $('.dot:nth-of-type(2)').next().addClass('active');
      $('.illustration-slides.three').css('transform', 'translateY(0vh)')
      $('.contents-slides.three').css('transform', 'translateY(0)')
    } else if (nowHeight < funcHeight + sectionHeight) {
      $('.illustration-slides.three').css('transform', 'translateY(120vh)')
      $('.contents-slides.three').css('transform', 'translateY(120vh)')
    }

    if (nowHeight >= funcHeight + sectionHeight * 2) {
      $('.dot').removeClass('active');
      $('.dot:nth-of-type(3)').next().addClass('active');
      $('.illustration-slides.four').css('transform', 'translateY(0vh)')
      $('.contents-slides.four').css('transform', 'translateY(0)')
    } else if (nowHeight < funcHeight + sectionHeight * 2) {
      $('.illustration-slides.four').css('transform', 'translateY(120vh)')
      $('.contents-slides.four').css('transform', 'translateY(120vh)')
    }

    if (nowHeight >= funcHeight + sectionHeight * 3) {
      $('.navigator-wrap .control-btn.next').css({
        "opacity": "0.3",
        "cursor": "auto"
      });
      $('.dot').removeClass('active');
      $('.dot:nth-of-type(4)').next().addClass('active');
      $('.illustration-slides.five').css('transform', 'translateY(0vh)')
      $('.contents-slides.five').css('transform', 'translateY(0)')
    } else if (nowHeight < funcHeight + sectionHeight * 3) {
      $('.navigator-wrap .control-btn.next').css({
        "opacity": "1",
        "cursor": "pointer"
      });
      $('.illustration-slides.five').css('transform', 'translateY(120vh)')
      $('.contents-slides.five').css('transform', 'translateY(120vh)')
    }
  });

  // 다섯번째 섹션
  $('.customer-grid .customer-logo .logo').each(function() {
    let thisCSS = $(this).attr('class');
    let nameClass = thisCSS.split(' ')[1]
    $(this).css({
      "background": `url(img/customer/common/${nameClass}.png)`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
  });

  $('.customer-grid.common .customer-logo .logo').each(function() {
    let thisCSS = $(this).attr('class');
    let nameClass = thisCSS.split(' ')[1]
    $(this).css({
      "background": `url(img/customer/uncommon/${nameClass}.png)`,
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
  });

});
