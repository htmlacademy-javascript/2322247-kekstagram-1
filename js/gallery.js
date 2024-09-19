import { renderMiniPicture } from './rendering.js';
import { renderBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

let pictures = [];

const onContainerClick = (evt) => {
  const miniPicture = evt.target.closest('[data-picture-id]');
  if (!miniPicture) {
    return;
  }
  evt.preventDefault();

  const picture = pictures.find(
    (item) => item.id === +miniPicture.dataset.pictureId
  );
  renderBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  container.addEventListener('click', onContainerClick);
  renderMiniPicture(pictures, container);
};

export { renderGallery };
