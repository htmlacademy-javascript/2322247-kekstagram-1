import{renderGallery} from './gallery.js';
import { getData,sendData } from './api.js';
import {showAlert} from './alert.js';
import {setOnFormSubmit, hideModal} from './form-modal.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import { initializeFilters, getFiltredPictures } from './filter.js';
import { debounce } from './until.js';

const init = async () => {
  let data;
  const debouncedRenderGallery = debounce(renderGallery);
  try {
    data = await getData();
    initializeFilters(data, debouncedRenderGallery);
  } catch (err) {
    showAlert(err.message);
  }
  if (data) {
    renderGallery(getFiltredPictures());
  }

  setOnFormSubmit(async (dataSet) => {
    try {
      await sendData(dataSet);
      hideModal();
      showSuccessMessage();
    } catch {
      showErrorMessage();
    }
  });
};
init();
