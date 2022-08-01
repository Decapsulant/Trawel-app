$(function () {


  //slider
    $('[data-slider]').slick({
      infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive:[
      {
        breakpoint:768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          centerMode: true,
        }


      }
    ]
    });


    //Menu
    $('.header__burger').click(function(event){
      $('.header__burger,.header__inner').toggleClass('active')
      $('body').toggleClass('lock')
  })



  $('.header__menu-link').click(function(event){
    $('.header__burger,.header__inner').toggleClass('active')
    $('body').toggleClass('lock')
  })

});


//goto
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
  anchor.addEventListener('click', function(event){
    event.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior:'smooth',
      block:'start'
    })
  })
}
