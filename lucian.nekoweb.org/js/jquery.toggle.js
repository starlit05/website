$(function () { 

// アコーディオンメニュー
  $('nav > ul > li,nav > ul > li > a[href^=#]').on('click', function() {
    $(this).children('ul:not(:animated)').slideToggle();
    $(this).children('span').toggleClass('open');
    $('.sub-menu').not($(this).children('.sub-menu')).slideUp();
    $('nav li').children('span').not($(this).children('span')).removeClass('open');
  });
    $('.sub-menu li a[href^=#]').on('click', function(event) {
    event.stopPropagation();
  });
   
// メニューを開くボタンの動作
  var text = $('.open-text');
  $('#open').click(function() {
    $('#side').toggleClass('open');
    $('#side-bg').fadeToggle();
    $('#open-icon').toggleClass('close');
    $('#open').toggleClass('buttonclose');
    if ($('#open-icon').hasClass('close')) {
      text.text('Close');
    } else {
      text.text('More...');
    }
    return false;
  });
    
// 小画面時に範囲外を押した場合、一度閉じる
  $('#side-bg').click(function() {
    $(this).fadeOut();
    $('#side').removeClass('open');
    $('#open').removeClass('buttonclose');
    $('#open-icon').removeClass('close');
    if ($('#open-icon').hasClass('close')) {
      text.text('Close');
    } else {
      text.text('More...');
    }
    return false;
  });

// 小画面時にスライド内リンクを押した場合、一度閉じる
  $('#side a').on('click', function() {
    (window.innerWidth ? window.innerWidth : $(window).width()) <= 600 && $('#open').click()
  });
  
});
