import{renderGallary} from './gallery.js';
import { getData,sendData } from './api.js';
import {showAlert} from './alert.js';
import {setOnFormSubmit, hideModal} from './form-modal.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

let data;

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
  renderGallary(data);
} catch (err) {
  showAlert(err.message);
}

console.log(data)
export{data};
