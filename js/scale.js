import { getData } from './api.js';

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
const imageContainer = document.querySelector('.img-upload__preview');

const scaleImage = (value) => {
  image.computedStyleMap.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  const newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    return;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  const newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    return;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

const loadImage = async () => {
  try {
    const data = await getData();
    const imageUrl = data.url;
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = 'Загруженное изображение';
    imageContainer.appendChild(image);
  } catch (error) {
    console.error('Ошибка при загрузке изображения:', error);
  }
};

window.onload = loadImage;


export { resetScale };

