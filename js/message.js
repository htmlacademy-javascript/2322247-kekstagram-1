const hideSuccessMessage = () => {
  const successMessage = document.querySelector('.success');
  if (successMessage) {
    successMessage.remove();
  }
};

const hideErrorMessage = () => {
  const errorMessage = document.querySelector('.error');
  if (errorMessage) {
    errorMessage.remove();
  }
};

const showSuccessMessage = () => {
  const successTemplate = document.getElementById('success');
  const successMessage = successTemplate.cloneNode(true);
  const successSection = successMessage.content.querySelector('.success');

  successSection.querySelector('.success__button').addEventListener('click', () => {
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

  if (!document.querySelector('.success')) {
    document.body.append(successSection);
  } else {
    successSection.classList.remove('hidden');
  }
};

const showErrorMessage = () => {
  const errorTemplate = document.getElementById('error');
  const errorMessage = errorTemplate.cloneNode(true);
  const errorSection = errorMessage.content.querySelector('.success');
  errorSection.querySelector('.error__button').addEventListener('click', () => {
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
  if (!document.querySelector('.error')) {
    document.body.append(errorSection);
  } else {
    errorSection.classList.remove('hidden');
  }
};

export { showSuccessMessage, showErrorMessage };
