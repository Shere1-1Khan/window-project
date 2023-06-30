const showModal = (modal) => {
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
};

function showModalByTime(selector, time) {
  const modal = document.querySelector(selector);
  setTimeout(() => showModal(modal), time);
}

const bindModal = (trigerSelector, modalSelector, closeSelector) => {
  const trigger = document.querySelectorAll(trigerSelector);
  const modal = document.querySelector(modalSelector);
  const close = document.querySelector(closeSelector);

  trigger.forEach((item) => {
    item.addEventListener('click', (evt) => {
      if (evt.target) {
        evt.preventDefault();
      }
      showModal(modal);
    });

    modal.addEventListener('click', (evt) => {
      if (evt.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });
};

const handlerModalClick = () => {
  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  showModalByTime('.popup', 60000);
};

export {handlerModalClick};
