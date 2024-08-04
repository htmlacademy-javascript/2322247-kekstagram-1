import { renderMiniPicture } from './rendering.js';
import { renderBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallary = (pictures) => {
  container.addEventListener('click', (evt) => {
    const miniPicture = evt.target.closest('[data-picture-id]');
    if (!miniPicture) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +miniPicture.dataset.pictureId
    );
    renderBigPicture(picture);
  });

  renderMiniPicture(pictures, container);
};

export{renderGallary};
