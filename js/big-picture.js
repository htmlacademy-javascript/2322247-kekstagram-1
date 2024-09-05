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

const createComment = (data) => {
  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = data.avatar;
  comment.querySelector('.social__picture').alt = data.name;
  comment.querySelector('.social__text').textContent = data.message;
  return comment;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  for (
    let i = commentsShown;
    i < Math.min(commentsShown + COMMENTS_PER_PORTION, comments.length);
    i++
  ) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentList.append(fragment);

  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const totalCommentsCount = commentCount.querySelector('.comments-count');
  totalCommentsCount.textContent = comments.length.toString();

  const visibleCommentsText = document.createTextNode(`${commentsShown} из `);
  if (commentCount.firstChild) {
    commentCount.replaceChild(visibleCommentsText, commentCount.firstChild);
  } else {
    commentCount.insertBefore(visibleCommentsText, totalCommentsCount);
  }
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
  renderComments(comments);
};


const renderPictureDetails = (picture) => {
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.big-picture__img img').alt = picture.description;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
};

const renderBigPicture = (picture) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  commentsShown = 0;

  commentsLoader.classList.remove('hidden');
  commentCount.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);

  commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  commentsLoader.addEventListener('click', onCommentsLoaderClick);

  comments = picture.comments;

  commentList.innerHTML = '';

  renderComments(comments);

  renderPictureDetails(picture);
};

cancelButton.addEventListener('click', onCancelButtonClick);
export { renderBigPicture };
