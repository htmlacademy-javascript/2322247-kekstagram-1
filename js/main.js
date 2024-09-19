import{renderGallery} from './gallery.js';
import { getData,sendData } from './api.js';
import {showAlert} from './alert.js';
import {setOnFormSubmit, hideModal} from './form-modal.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import { initializeFilters, getFiltredPictures } from './filter.js';
import { debounce } from './until.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  initializeFilters(data, debouncedRenderGallery);
  renderGallery(getFiltredPictures());
} catch (err) {
  showAlert(err.message);
}
