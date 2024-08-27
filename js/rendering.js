const content = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMiniPicture = ({ url, likes, comments, id }) => {
  const miniPicture = content.cloneNode(true);
  miniPicture.querySelector('.picture__img').src = url;
  miniPicture.querySelector('.picture__likes').textContent = likes;
  miniPicture.querySelector('.picture__comments').textContent = comments.length;
  miniPicture.dataset.pictureId = id;
  return miniPicture;
};

const renderMiniPicture = (pictures, container) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniPicture = createMiniPicture(picture);
    fragment.append(miniPicture);
  });
  container.append(fragment);
};

export { renderMiniPicture };
