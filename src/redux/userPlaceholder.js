import faker from 'faker';
const golovushka = [
  {
    id: faker.random.uuid(),
    description: 'Мой любимый кандибобрик',
    brand:'Abibas',
    link: 'abibas.com',
    type:{
      id: faker.random.uuid(),
      name: 'Кандибобрик'
    },
    imageUrl: 'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
  },
  {
    id: faker.random.uuid(),
    description: 'Чоткий Кепарь',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Кэпка'
    },
    imageUrl: 'https://a.lmcdn.ru/product//M/P/MP002XU033Y8_11251840_2_v1.jpg',
  },
  {
    id: faker.random.uuid(),
    description: '',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Кэпка'
    },
    imageUrl: 'https://www.lm-shop.ru/image/cache/catalog/gift/5315-500x500.jpg',
  },
  
];



const puziko:[]
const bedrishki:[],
const lapki:[],


const user = {
  id : faker.random.uuid(),
  name: 'Egor',
  email: 'lublu_anime@naruto.com',
  golovushka:[],
  puziko:[],
  bedrishki:[],
  lapki:[],

}

headImages: [
  'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
  'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
  'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
  'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
  'https://hatsandcaps.ru/components/com_jshopping/files/img_products/full_04-007-10(0).jpg',
],
bodyImages: [
  'https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',
  'https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',
  'https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',
  'https://img2.wbstatic.net/big/new/7130000/7132516-1.jpg',
],
pansImages: [
  'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
  'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
  'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
  'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
  'https://a.lmcdn.ru/img600x866/I/X/IX001XW00AA0_9095203_1_v1.jpeg',
],
lapkiImages: [
  'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
  'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
  'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
  'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
  'http://k-chemu-snitsja.ru/wp-content/uploads/2014/04/k-chemu-snyatsya-isporchennie-sapogi.jpg',
],