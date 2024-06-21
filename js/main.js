const COUNT_PICTURE = 25;
const COUNT_AVATAR = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const COUNT_COMMENT = 6;

const DESCRIPTION = [
  'Это я на море был, но сейчас уже дома',
  'Настроение этих выходных',
  'Как я провел это лето',
  'Как быстро летит время',
  'Оставлю этот важный момент в ленте',
  'Потрясающий закат',
  'Утро бывает добрым',
  'С днем рождения!'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Таня', 'Аня', 'Алёна', 'Иван', 'Анатолий', 'Артём'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementArray = (array) => array[getRandomInteger(0, array.length - 1)];

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomElementArray(MESSAGES)).join('.');

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, COUNT_AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomElementArray(NAMES)
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElementArray(DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from(
    { length: getRandomInteger(0, COUNT_COMMENT) },
    createComment
  )
});

const getPictures = () =>
  Array.from({ length: COUNT_PICTURE }, (_, index) => createPicture(index + 1));

getPictures();
