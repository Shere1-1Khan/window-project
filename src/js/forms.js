const Forms = {
  formList : document.querySelectorAll('form'),
  inputsList : document.querySelectorAll('input'),
};

const Message = {
  loading : 'Загрузка...',
  success : 'Спасибо, скоро мы с вами свяжемся',
  error : 'Что-то пошло не так',
};

const getStatusMessage = () => {
  const statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

};

const postData = async (url, data) => {
  document.querySelector('.status').textContent(Message.loading);

  const res = await fetch(url,{
    method : 'POST',
    body : data,
  });

  return await res.text();
};

const handlerChangeForms = () => {
  Forms.formList.forEach((item) => {
    item.addEventListener('submit', (evt) => {
      evt.preventDefault();

      item.appendChild(getStatusMessage());
      const formDate = new FormData(item);


    })
  });
};

export {handlerChangeForms};
