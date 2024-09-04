const hideSuccessMessage = () => document.querySelector('#success').classList.remove('visible');

const hideErrorMessage = () => document.querySelector('#error').classList.remove('visible');

const showSuccessMessage = () => {
  const successTemplate = document.getElementById('success');
  const successMessage = successTemplate.cloneNode(true);
  console.log(successMessage);
  console.log(successMessage.content.querySelector('.success__button'));
  successMessage.content.querySelector('.success__button').addEventListener('click', () => {
    hideSuccessMessage();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideSuccessMessage();
    }
  });
  window.addEventListener('click', (event) => {
    const target = event.target;
    if (!successMessage.contains(target)) {
      hideSuccessMessage();
    }
  });

};

const showErrorMessage = () => {
  const errorTemplate = document.getElementById('error');
  const errorMessage = errorTemplate.cloneNode(true);
  console.log(errorMessage);
  console.log(errorMessage.content.querySelector('.error__button'));
  errorMessage.content.querySelector('.error__button').addEventListener('click', () => {
    hideErrorMessage();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideErrorMessage();
    }
  });
  window.addEventListener('click', (event) => {
    const target = event.target;
    if (!errorMessage.contains(target)) {
      hideErrorMessage();
    }
  });
};

export { showSuccessMessage, showErrorMessage };
