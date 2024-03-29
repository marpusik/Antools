function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()

function submenu() {
  const submenu = document.querySelector('.submenu')
  const trigger = document.querySelector('.with__submenu')
  trigger.addEventListener('click', () => {
    submenu.classList.toggle('active')
  })
}
submenu()

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.next__btn',
    prevEl: '.prev__btn',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
});