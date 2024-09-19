function hideSuccessMessage() {
  const successMessage = document.querySelector('.success');
  if (successMessage) {
    successMessage.remove();
    document.removeEventListener('keydown', onEscPressSuccess);
    window.removeEventListener('click', onClickOutsideSuccess);
  }
}

function hideErrorMessage() {
  const errorMessage = document.querySelector('.error');
  if (errorMessage) {
    errorMessage.remove();
    document.removeEventListener('keydown', onEscPressError);
    window.removeEventListener('click', onClickOutsideError);
  }
}

function onEscPressSuccess(evt) {
  if (evt.key === 'Escape') {
    hideSuccessMessage();
  }
}

function onClickOutsideSuccess(evt) {
  const successMessage = document.querySelector('.success');
  if (successMessage && !successMessage.contains(evt.target)) {
    hideSuccessMessage();
  }
}

function onEscPressError(evt) {
  if (evt.key === 'Escape') {
    hideErrorMessage();
  }
}

function onClickOutsideError(evt) {
  const errorMessage = document.querySelector('.error');
  if (errorMessage && !errorMessage.contains(evt.target)) {
    hideErrorMessage();
  }
}

const showSuccessMessage = () => {
  const successTemplate = document.getElementById('success');
  const successMessage = successTemplate.cloneNode(true);
  const successSection = successMessage.content.querySelector('.success');

  successSection.querySelector('.success__button').addEventListener('click', hideSuccessMessage);

  document.addEventListener('keydown', onEscPressSuccess);
  window.addEventListener('click', onClickOutsideSuccess);

  if (!document.querySelector('.success')) {
    document.body.append(successSection);
  } else {
    successSection.classList.remove('hidden');
  }
};

const showErrorMessage = () => {
  const errorTemplate = document.getElementById('error');
  const errorMessage = errorTemplate.cloneNode(true);
  const errorSection = errorMessage.content.querySelector('.error');

  errorSection.querySelector('.error__button').addEventListener('click', hideErrorMessage);

  document.addEventListener('keydown', onEscPressError);
  window.addEventListener('click', onClickOutsideError);

  if (!document.querySelector('.error')) {
    document.body.append(errorSection);
  } else {
    errorSection.classList.remove('hidden');
  }
};

export { showSuccessMessage, showErrorMessage };
