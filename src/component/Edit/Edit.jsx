import React from 'react';
import DressCarousel from '../DressCarousel/DressCarousel3';
// import UploadForm from '../uploadForm/UploadForm'
import { useSelector } from 'react-redux';
import ModalLookEdit from '../ModaImg/ModalLookEdit';
import { useParams } from 'react-router-dom';
import '../Dresser/Dresser.css';
import { useHistory } from 'react-router-dom';

export default function Dresser() {
  const userName = localStorage.getItem('user');
  const history = useHistory();
  const { id } = useParams();

  if (userName === '') {
    history.push('/');
  }
  const dressCategoryFilter = useSelector((state) => state.dressCategoryFilter);
  const dressSeasonFilter = useSelector((state) => state.dressSeasonFilter);

  const user = useSelector((state) => state.user);
  while (user.uid === undefined) {
    return 'Loading...';
  }
  while (user.lookis === undefined) {
    return 'Loading...';
  }
  const { head = [], body = [], legs = [], feet = [] } = user;
  const editedLook = user.lookis.find((element) => element.id == id);

  const dressFilter = (array, categoryFilter, seasonFilter) => {
    return categoryFilter || seasonFilter
      ? array.filter(
          (el) =>
            (categoryFilter ? el.type === categoryFilter : true) &&
            (seasonFilter ? el.season === seasonFilter : true)
        )
      : array;
  };

  const headCategories = [
    'Шапки',
    'Кепки',
    'Шляпы',
    'Береты',
    'Пилотки',
    'Кандибобрики',
  ];
  const bodyCategories = [
    'Футболки поло и майки',
    'Толстовки и свитшоты',
    'Платья и сарафаны',
    'Пиджаки',
    'Рубашки',
    'Блузы',
    'Джемперы, свитеры и кардиганы',
  ];
  const legsCategories = ['Шорты', 'Джинсы', 'Брюки'];
  const feetCategories = ['Кроссовки', 'Туфли', 'Тапки'];

  return (
    <div id='globalDiv'>
      <div className='dresser'>
        <div>
          <DressCarousel
            dressArray={dressFilter(
              head,
              dressCategoryFilter.head,
              dressSeasonFilter.head
            )}
            editedLook={editedLook}
            categories={headCategories}
            title={'Головные уборы'}
            property={'head'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(body, dressCategoryFilter.body)}
            editedLook={editedLook}
            categories={bodyCategories}
            title={'Верхняя часть тела'}
            property={'body'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(legs, dressCategoryFilter.legs)}
            editedLook={editedLook}
            categories={legsCategories}
            title={'Нижняя часть тела'}
            property={'legs'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(feet, dressCategoryFilter.feet)}
            editedLook={editedLook}
            categories={feetCategories}
            title={'Обувь'}
            property={'feet'}
          />
        </div>
        <div>
          <ModalLookEdit editedLook={editedLook} />
        </div>
      </div>
    </div>
  );
}
