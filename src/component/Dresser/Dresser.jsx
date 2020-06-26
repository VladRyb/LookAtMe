import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel';
import { useSelector } from 'react-redux';
import ModalLook from '../ModaImg/ModalLook';
import './Dresser.css';
import { useHistory } from 'react-router-dom';

export default function Dresser() {
  const userName = localStorage.getItem('user');
  const history = useHistory();

  if (userName === '') {
    history.push('/');
  }
  const user = useSelector((state) => state.user);
  const dressCategoryFilter = useSelector((state) => state.dressCategoryFilter);
  const dressSeasonFilter = useSelector((state) => state.dressSeasonFilter);

  const { head = [], body = [], legs = [], feet = [] } = user;

  const dressFilter = (array, categoryFilter, seasonFilter) => {
    return categoryFilter || seasonFilter
      ? array.filter(
          (el) =>
            (categoryFilter ? el.type === categoryFilter : true) &&
            (seasonFilter ? el.season === seasonFilter : true)
        )
      : array;
  };

  const headCategories = ['Шапки', 'Кепки', 'Шляпы', 'Береты', 'Панамы', 'Кандибобрики'];
  const bodyCategories = [
    'Футболки и поло',
    'Толстовки и свитшоты',
    'Свитера и джемперы',
    'Платья и сарафаны',
    'Пиджаки',
    'Блузы и рубашки',
    'Куртки и пуховики',
    'Пальто и плащи',
    'Спортивные куртки',
  ];
  const legsCategories = ['Шорты', 'Джинсы', 'Брюки', 'Юбки', 'Спортивные штаны', 'Комбинезоны'];
  const feetCategories = ['Кроссовки', 'Туфли', 'Босоножки', 'Сланцы', 'Ботинки', 'Сапоги'];

  return (
    <div id="globalDivman" style={{ color: 'white' }}>
      <div className="dresser">
        <div>
          <DressCarousel
            dressArray={dressFilter(head, dressCategoryFilter.head, dressSeasonFilter.head)}
            categories={headCategories}
            title={'Головушка'}
            property={'head'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(body, dressCategoryFilter.body, dressSeasonFilter.body)}
            categories={bodyCategories}
            title={'Пузико'}
            property={'body'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(legs, dressCategoryFilter.legs, dressSeasonFilter.legs)}
            categories={legsCategories}
            title={'Ножки'}
            property={'legs'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(feet, dressCategoryFilter.feet, dressSeasonFilter.feet)}
            categories={feetCategories}
            title={'Лапки'}
            property={'feet'}
          />
        </div>
        <div>
          <ModalLook camera={false} />
        </div>
      </div>
    </div>
  );
}
