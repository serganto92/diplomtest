$(function(){
	$('.letters-container').addClass('item-active');
	$('.price-decoration').addClass('item-active2');

  function SliderDesktop () {
    if ($(window).width() > 1024) {
      var mySwiper = new Swiper ('.swiper-container', {

    direction: 'horizontal',
    spaceBetween: 30,
    slidesPerView: 3,
    loop: false,

    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
    }

  else if ($(window).width() < 1025) {
    var mySwiper = new Swiper ('.swiper-container', {

    direction: 'horizontal',
    slidesPerView: 2,
    loop: false,

    pagination: {
      el: '.slider__pagination',
    },

  })
  }
  }

  function SlideImgChange () {
    if ($(window).width() < 1025) {
      $('.examples-list__photo--1').attr('src','img/example1l.png');
      $('.examples-list__photo--2').attr('src','img/example2l.png');
      $('.examples-list__photo--3').attr('src','img/example3l.png');
      $('.examples-list__photo--4').attr('src','img/example4l.png');
    }
  }

  SlideImgChange ();
  SliderDesktop();

/*
  // Затемнение не доступной кнопки-стрелки

  function examplesControlActive () {
    if ($('.examples-list__item:last-of-type').css('display') == 'none') {
      $('.back').css('filter','brightness(80%)');
      $('.forward').css('filter','brightness(100%)');
    }
    else if ($('.examples-list__item:first-of-type').css('display') == 'none') {
      $('.forward').css('filter','brightness(80%)');
      $('.back').css('filter','brightness(100%)');
    }
    else if ($('.examples-list__item:first-of-type').css('display') == 'flex' && $('.examples-list__item:last-of-type').css('display') == 'flex') {
      $('.forward').css('filter','brightness(80%)');
      $('.back').css('filter','brightness(80%)');
    }
    else {
      $('.forward').css('filter','brightness(100%)');
      $('.back').css('filter','brightness(100%)');
    }
  }

  // Переключение слайдов при нажатии на кнопки-стрелки

  function examplesSliderBack () {
    if ($('.examples-list__item:first-of-type').css('display') == 'none') {
      $('.examples-list__item:last-of-type').hide();
      $('.examples-list__item:first-of-type').css('display','flex');
      examplesControlActive();
    }
    else {
      false;
    }
  }

  function examplesSliderForwrad () {
    if ($('.examples-list__item:last-of-type').css('display') == 'none') {
      $('.examples-list__item:first-of-type').hide();
      $('.examples-list__item:last-of-type').css('display','flex');
      examplesControlActive();
    }
    else {
      false;
    }
  }

  // Выделение активной кнопки-точки

  function examplesPaginatorControlDots () {
    if ($('.examples-list__item:last-of-type').css('display') == 'none' && $('.examples-list__item:nth-of-type(3)').css('display') == 'none') {
      $('.examples-control__first').addClass('button-active');
      $('.examples-control__second').removeClass('button-active');
      $('.examples-control__third').removeClass('button-active');
    }
    else if ($('.examples-list__item:first-of-type').css('display') == 'none' && $('.examples-list__item:last-of-type').css('display') == 'none') {
      $('.examples-control__second').addClass('button-active');
      $('.examples-control__first').removeClass('button-active');
      $('.examples-control__third').removeClass('button-active');
    }
    else {
      $('.examples-control__third').addClass('button-active');
      $('.examples-control__first').removeClass('button-active');
      $('.examples-control__second').removeClass('button-active');
    }
  }

  // Переключение слайдов при нажатии на кнопки-точки

  function examplesPaginatorControlFirst () {
    if ($('.examples-list__item:first-of-type').css('display') == 'none') {
      $('.examples-list__item:first-of-type').css('display','flex');
      $('.examples-list__item:nth-of-type(2)').css('display','flex');
      $('.examples-list__item:nth-of-type(3)').hide();
      $('.examples-list__item:last-of-type').hide();
      examplesPaginatorControlDots();
    }
    else {
      false;
    }
  }

  function examplesPaginatorControlSecond () {
    if ($('.examples-list__item:nth-of-type(2)').css('display') == 'none' || $('.examples-list__item:nth-of-type(3)').css('display') == 'none' ) {
      $('.examples-list__item:first-of-type').hide();
      $('.examples-list__item:nth-of-type(2)').css('display','flex');
      $('.examples-list__item:nth-of-type(3)').css('display','flex');
      $('.examples-list__item:last-of-type').hide();
      examplesPaginatorControlDots();
    }
    else {
      false;
    }
  }

   function examplesPaginatorControlThird () {
    if ($('.examples-list__item:nth-of-type(3)').css('display') == 'none' && $('.examples-list__item:last-of-type').css('display') == 'none' ) {
      $('.examples-list__item:first-of-type').hide();
      $('.examples-list__item:nth-of-type(2)').hide();
      $('.examples-list__item:nth-of-type(3)').css('display','flex');
      $('.examples-list__item:last-of-type').css('display','flex');
      examplesPaginatorControlDots();
    }
    else {
      false;
    }
  }

  // Выделение активных кнопках при закгрузке страницы или при смене разрешения

  $(window).on('resize', examplesPaginatorControlDots());
  $(window).on('resize', examplesControlActive());

  // Обработчик клика по кнопкам-точкам

  $('.examples-control__first').on('click',examplesPaginatorControlFirst());
  $('.examples-control__second').on('click',examplesPaginatorControlSecond());
  $('.examples-control__third').on('click',examplesPaginatorControlThird());

  // Обработчик клика по кнопкам-стрелкам

  $('.back').on('click',examplesSliderBack);
  $('.forward').on('click',examplesSliderForwrad);
  */
});


