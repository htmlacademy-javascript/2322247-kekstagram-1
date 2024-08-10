const COMMENTS_PER_PORTION = 5;
const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

let commentsShown = 0;
let comments = [];

const createComment = ({ avatar, name, message }) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;
  return commentElement;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  for (
    let i = commentsShown;
    i < Math.min(commentsShown + COMMENTS_PER_PORTION, comments.length);
    i++
  ) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentList.append(fragment);

  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentCount.innerHTML = `${commentsShown} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const onCommentsLoaderClick = () => {
  renderComments();
};


const renderPictureDetails = ({ url, likes, description }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const renderBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  commentsShown = 0;

  commentsLoader.classList.remove('hidden');
  commentCount.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);

  comments = data.comments;

  commentList.innerHTML = '';

  renderComments();

  renderPictureDetails(data);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { renderBigPicture };
