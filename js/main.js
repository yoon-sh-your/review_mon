    // 메인 메뉴 dropdown 
    function init() {
       $(".menu, .dropdown_menu").mouseover(function(){
       $(".overlay, .dropdown_menu").addClass("active")
        })
       $('.menu, .overlay').mouseleave(function(){
       $('.overlay, .dropdown_menu').removeClass('active')
        })
      };

    // toggle button 
      function toggleBtn() {
        $('.toggle').click(function(){
            $('.gnb_hd_myinfo_txt').addClass('active')
        })
      }


    // 서브페이지 탭버튼 my(신청캠페인, 선정캠페인, 등록한 리뷰)
    function tabButton() {

    $('.my_btn_list').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')

        $('.my_tabs .my_tab').removeClass('active')
        $('#' +$(this).attr('data-alt')).addClass('active')
    });
}
    
    // toggle 
    $(document).ready(function(){

        $('.toggle').on('click', function(){
            $('.mo_nav, .dim').fadeIn();
            $('.mo_nav a:first').focus();
        });
        $('.dim, header .alram, .btn_alarm, .btn_setting, .mo_nav').on('click focus', function(){
            $('header .mo_nav, .dim').fadeOut();
        });
        $('.lnb li:last a').on('blur', function(){
            $('.mo_nav, .dim').fadeOut(300);
            $('.toggle').focus();
        });
    });

    // mobile toggle login button 
    $('.btn_login').click(function() {
        $(this).addClass('active');
    })

   
    //   subpage 탭메뉴 

    $('.tab_btn li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        $('.tabs .tab').removeClass('active')
        $('#' +$(this).attr('data-alt')).addClass('active')
        });



// 서브페이지 이미지 슬릭 슬라이드 (Syncing) 
$(function () {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      arrows: true,
      focusOnSelect: true,
      autoplay : true,			
      autoplaySpeed : 3500 	
    });

    $('a[data-slide]').click(function (e) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      $('.slider-nav').slick('slickGoTo', slideno - 1);
    });
  })


// 상단 검색 영역 
$(document).ready(function(){
    $('#search_input').focus(function(){
        $('.search_form').addClass('active')
    });

    $('#search_input').focusout(function(){
        $('.search_form').removeClass('active');
    });
})


function scollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}


 const subAppli = document.querySelector('.sub_appli_list');

 subAppli.addEventListener('click', () => {
   console.log('jiojiojo');
 })


 function gotoUp() {
  // 메인 퀵메뉴 & gototop버튼 
  const headerInner = document.querySelector('.header_inner');
  const headerHeight = headerInner.getBoundingClientRect().height;
  const quickmenu = document.querySelector('.quick_menu');
  const arrowUp = document.querySelector('.arrow_up');

  // 퀵메뉴
  document.addEventListener('scroll', () => {
      if (window.scrollY > headerHeight / 3) {
          quickmenu.classList.add('visible')
      } else {
          quickmenu.classList.remove('visible')
      }
  });

  // gototop 버튼
  document.addEventListener('scroll', () => {
      if (window.scrollY > headerHeight / 2) {
          arrowUp.classList.add('visible')
      } else {
          arrowUp.classList.remove('visible')
      }
  });

  arrowUp.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
  })

}
