const togglezBtn = document.querySelector('.togglez-btn')
const togglezBtnIcon = document.querySelector('togglez-btn i')
const dropmenuz = document.querySelector('.d-menu')

togglezBtn.onclick = function () {
    dropmenuz.classList.toggle('open')
    const isOpen = dropmenuz.classList.contains('open')

    togglezBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}