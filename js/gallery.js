import { renderMiniPicture } from './rendering.js';
import { renderBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallary = (data) => {
  container.addEventListener('click', (evt) => {
    const miniPicture = evt.target.closest('[data-picture-id]');
    if (!miniPicture) {
      return;
    }
    evt.preventDefault();

    const picture = data.find(
      (item) => item.id === +miniPicture.dataset.pictureId
    );
    renderBigPicture(picture);
  });
  renderMiniPicture(data, container);
};

export { renderGallary };
