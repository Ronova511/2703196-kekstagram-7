const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const PHOTO_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Артём', 'Мария', 'Алексей', 'Ольга', 'Иван', 'Анна', 'Дмитрий'];

const DESCRIPTIONS = [
  'Красивый закат на море.',
  'Утренний кофе и отличный вид.',
  'Прогулка по любимому городу.',
  'Мой пушистый друг отдыхает.',
  'Выходные на природе.',
  'Отдыхаю.',
  'Загораю!',
  'Завтрак)',
  'Первое осознанное решение',
  'Преисполняюсь высокой культурой',
  'Красота!',
];

let commentIdCounter = 1;

const createComment = () => {
  const messageCount = getRandomInteger(1, 2);
  const messageSentences = [];

  for (let i = 0; i < messageCount; i++) {
    messageSentences.push(getRandomArrayElement(MESSAGES));
  }

  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: messageSentences,
    name: getRandomArrayElement(NAMES),
  };
};

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, createComment),
});

const generatePhotos = () => {
  const photos = [];
  for (let i = 1; i <= PHOTO_COUNT; i++) {
    photos.push(createPhoto(i));
  }
  return photos;
};

generatePhotos();
