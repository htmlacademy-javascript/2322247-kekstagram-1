import { renderMiniPicture } from './rendering.js';
import { renderBigPicture } from './big-picture.js';
import { getData } from './api.js';

const container = document.querySelector('.pictures');

const renderGallary = async () => {
  try {
    const pictures = await getData();

    container.addEventListener('click', (evt) => {
      const miniPicture = evt.target.closest('[data-picture-id]');
      if (!miniPicture) {
        return;
      }
      evt.preventDefault();

      const picture = pictures.find(
        (item) => item.id === +miniPicture.dataset.pictureId
      );
      renderBigPicture(picture);
    });

    renderMiniPicture(pictures, container);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
};

export { renderGallary };
