const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElementArray = (array) => array[getRandomInteger(0, array.length - 1)];


const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();
const usedIdPhotos = createIdGenerator();

export{getRandomElementArray};
export{getRandomInteger};
export{generateCommentId};
export{usedIdPhotos};
