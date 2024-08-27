const content = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createMiniPicture = (data) => {
  const miniPicture = content.cloneNode(true);
  miniPicture.querySelector('.picture__img').src = data.url;
  miniPicture.querySelector('.picture__likes').textContent = data.likes;
  miniPicture.querySelector('.picture__comments').textContent = data.comments.length;
  miniPicture.dataset.pictureId = data.id;
  return miniPicture;
};

const renderMiniPicture = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const miniPicture = createMiniPicture(picture);
    fragment.append(miniPicture);

  });
  container.append(fragment);
};

export { renderMiniPicture };
