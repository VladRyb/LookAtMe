import CarouselSlider from 'react-carousel-slider';
import React from 'react';

export default function UserLooksStart() {
  let data = [
    {
      des: 'Имя модника',
      imgSrc:
        'https://hochyvseznat.ru/wp-content/uploads/2018/11/9b38197a8c322ac6ed5251acc8e66939.jpg',
    },
    {
      des: 'Имя модника',
      imgSrc: 'http://v.img.com.ua/b/1100x999999/3/21/cdc6001c3a239cc963e15fe088201213.jpg',
    },
    {
      des: 'Имя модника',
      imgSrc:
        'https://i.pinimg.com/736x/7f/aa/53/7faa53b4b8c90a15e9936c2ae9e9fdc7--older-couples-stylish-couple.jpg',
    },
    {
      des: 'Имя модника',
      imgSrc: 'https://pbs.twimg.com/media/EPKuQyJX4AEb52y.jpg',
    },
    {
      des: 'Имя модника',
      imgSrc: 'https://i.pinimg.com/736x/da/d2/e2/dad2e21b9fb1cabb63d9b4dc436d36b2.jpg',
    },
    {
      des: 'Имя модника',
      imgSrc:
        'https://i.pinimg.com/474x/7a/7c/65/7a7c658d2e47fbb5b2428918bc0a1a4c--older-women-haircuts.jpg',
    },
    {
      des: 'Имя модника',
      imgSrc:
        'https://avatars.mds.yandex.net/get-pdb/1521750/518347d5-6f4d-4f2a-a379-5489f7104fc7/s1200?webp=false',
    },
  ];

  let manner = {
    autoSliding: { interval: '3s' },
    duration: '2s',
  };

  let buttonSetting = {
    placeOn: 'middle-inside',
    hoverEvent: true,
    style: {
      left: {
        height: '50px',
        width: '50px',
        color: '#929393',
        background: 'rgba(225, 228, 232, 0.8)',
        borderRadius: '50%',
      },
      right: {
        height: '50px',
        width: '50px',
        color: '#929393',
        background: 'rgba(225, 228, 232, 0.8)',
        borderRadius: '50%',
      },
    },
  };

  return <CarouselSlider slideItems={data} manner={manner} buttonSetting={buttonSetting} />;
}
