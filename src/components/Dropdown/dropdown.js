function submenu() {
  const submenu = document.querySelector('.submenu')
  const trigger = document.querySelector('.with__submenu')
  trigger.addEventListener('click', () => {
    submenu.classList.toggle('active')
  })
}
submenu()