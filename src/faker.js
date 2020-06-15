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
    description: 'мама подарила',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Снепбек'
    },
    imageUrl: 'https://www.lm-shop.ru/image/cache/catalog/gift/5315-500x500.jpg',
  },
  {
    id: faker.random.uuid(),
    description: 'Кайфуй майфуй',
    brand:'Гучи',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Кэпка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/E/A/EA002CWHKYH9_10578984_1_v1.jpg',
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

const puziko = [
  {
    id: faker.random.uuid(),
    description: 'Футболец гуд',
    brand:'Abibas',
    link: 'abibas.com',
    type:{
      id: faker.random.uuid(),
      name: 'Фуфайка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00L8N_11301531_1_v2.jpeg',
  },
  {
    id: faker.random.uuid(),
    description: 'Чоткий Кепарь',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Футболка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/M/P/MP002XW0GLF9_10201432_1_v2.jpg',
  },
  {
    id: faker.random.uuid(),
    description: 'мама подарила',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'майка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/M/P/MP002XW0GLF9_10201432_1_v2.jpg',
  },
  {
    id: faker.random.uuid(),
    description: 'Кайфуй майфуй',
    brand:'Гучи',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Кэпка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00L8N_11301531_1_v2.jpeg',
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

const bedrishki = [
  {
    id: faker.random.uuid(),
    description: 'Штанцы огонь',
    brand:'Abibas',
    link: 'abibas.com',
    type:{
      id: faker.random.uuid(),
      name: 'штанцы'
    },
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00HY0_10348569_1_v5.jpeg',
  },
  {
    id: faker.random.uuid(),
    description: 'Чоткий Кепарь',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Футболка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/M/P/MP002XW0GLF9_10201432_1_v2.jpg',
  },
  {
    id: faker.random.uuid(),
    description: 'мама подарила',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'майка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00HY0_10348569_1_v5.jpeg',
  },
  {
    id: faker.random.uuid(),
    description: 'Кайфуй майфуй',
    brand:'Гучи',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Кэпка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00L8N_11301531_1_v2.jpeg',
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
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00HY0_10348569_1_v5.jpeg',
  },
];
const lapki = [
  {
    id: faker.random.uuid(),
    description: 'моои сандалики',
    brand:'Abibas',
    link: 'abibas.com',
    type:{
      id: faker.random.uuid(),
      name: 'сандалики'
    },
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00K0N_10688179_1_v1.jpeg',
  },
  {
    id: faker.random.uuid(),
    description: 'Чоткий Кепарь',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Футболка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/M/P/MP002XW0GLF9_10201432_1_v2.jpg',
  },
  {
    id: faker.random.uuid(),
    description: 'мама подарила',
    brand:'Naik',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'майка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00K0N_10688179_1_v1.jpeg',
  },
  {
    id: faker.random.uuid(),
    description: 'Кайфуй майфуй',
    brand:'Гучи',
    link: 'naik.com',
    type:{
      id: faker.random.uuid(),
      name: 'Кэпка'
    },
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00L8N_11301531_1_v2.jpeg',
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
    imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00K0N_10688179_1_v1.jpeg',
  },
];
const user = {
  id : faker.random.uuid(),
  name: 'Egor',
  email: 'lublu_anime@naruto.com',
  head: golovushka,
  body: puziko,
  legs: bedrishki,
  feet: lapki,
  looks: [
    {
      head: 
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
        }
        , // Ссылка на объект нужной головушки
      body:
        {
          id: faker.random.uuid(),
          description: 'Футболец гуд',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'Фуфайка'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00L8N_11301531_1_v2.jpeg',
        },
      legs:
        {
          id: faker.random.uuid(),
          description: 'Штанцы огонь',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'штанцы'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00HY0_10348569_1_v5.jpeg',
        },
      feet:
        {
          id: faker.random.uuid(),
          description: 'моои сандалики',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'сандалики'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00K0N_10688179_1_v1.jpeg',
        },
      photo: null,
      name: 'New Look test',
      tags: ['Зимний'],
      id: faker.random.uuid(),
    },{
      head:
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
        }
        , 
      body:
        {
          id: faker.random.uuid(),
          description: 'Футболец гуд',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'Фуфайка'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00L8N_11301531_1_v2.jpeg',
        },
      legs:
        {
          id: faker.random.uuid(),
          description: 'Штанцы огонь',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'штанцы'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00HY0_10348569_1_v5.jpeg',
        },
      feet:
        {
          id: faker.random.uuid(),
          description: 'моои сандалики',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'сандалики'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00K0N_10688179_1_v1.jpeg',
        },
      photo: null,
      name: 'Зачоотный лук найс',
      tags: ['Зимний'],
      id: faker.random.uuid(),
    },{
      head:
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
        }
        , // Ссылка на объект нужной головушки
      body:
        {
          id: faker.random.uuid(),
          description: 'Футболец гуд',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'Фуфайка'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00L8N_11301531_1_v2.jpeg',
        },
      legs:
        {
          id: faker.random.uuid(),
          description: 'Штанцы огонь',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'штанцы'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00HY0_10348569_1_v5.jpeg',
        },
      feet:
        {
          id: faker.random.uuid(),
          description: 'моои сандалики',
          brand:'Abibas',
          link: 'abibas.com',
          type:{
            id: faker.random.uuid(),
            name: 'сандалики'
          },
          imageUrl: 'https://a.lmcdn.ru/product/I/X/IX001XW00K0N_10688179_1_v1.jpeg',
        },
      photo: 'https://132q6j40a81047nmwg1az6v8-wpengine.netdna-ssl.com/wp-content/uploads/2013/09/rendell-1-400x400.jpg',
      name: 'Хоть к вове в кремль на др',
      tags: ['Зимний'],
      id: faker.random.uuid(),
    },
    
  ],
}

export default user;