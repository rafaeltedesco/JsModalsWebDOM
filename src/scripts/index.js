const layer = document.querySelector('.layer')
const buttons = document.querySelectorAll('[data-btn]')
const closeButtons = document.querySelectorAll('.close')

const openModal = ({ target })=> {
  let modalIdx = target.dataset.btn
  let modal = document.querySelector(`[data-modal="${modalIdx}"]`)
  layer.classList.remove('hide')
  modal.classList.remove('hide')
}

buttons.forEach(btn=> {
  btn.addEventListener('click', openModal)
})


const closeModal = ({ target })=> {
  target.parentElement.classList.add('hide')
  layer.classList.add('hide')
}


closeButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal)
})

document.addEventListener('keydown', (ev)=> {
  if (ev.keyCode === 27) {
    let modals = document.querySelectorAll('.modal')
    //modals.filter(modal=> !modal.classList.includes('hide'))
    let modal = Array(...modals).find(modal=> {
      return !modal.classList.contains('hide')
    })
    let modalEv = {target: modal.firstElementChild}
    if (!!modal) {
      closeModal(modalEv)
    }
  }
})