const hideSuccessMessage = () => document.querySelector('#success').classList.remove('visible');

const hideErrorMessage = () => document.querySelector('#error').classList.remove('visible');

const showSuccessMessage = () => {
  const successMessage = document.getElementById('success');
  successMessage.classList.add('visible');

  successMessage.querySelector('.success__button').addEventListener('click', () => {
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
  const errorMessage = document.querySelector('#error');
  errorMessage.classList.add('visible');

  errorMessage.querySelector('.error__button').addEventListener('click', () => {
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

export {showSuccessMessage, showErrorMessage};
