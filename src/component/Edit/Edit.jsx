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
  const dressFilterProperty = useSelector((state) => state.dressFilterProperty);

  const user = useSelector((state) => state.user);
  while (user.uid === undefined) {
    return 'Loading...';
  }
  while (user.lookis === undefined) {
    return 'Loading...';
  }
  const { head = [], body = [], legs = [], feet = [] } = user;
  const editedLook = user.lookis.find((element) => element.id == id);

  const dressFilter = (array, filterProperty) => {
    return filterProperty ? array.filter((el) => el.type === filterProperty) : array;
  };

  const headCategories = ['Шапки', 'Кепки', 'Шляпы', 'Береты', 'Пилотки', 'Кандибобрики'];
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
    <div id="globalDiv">
      <div className="dresser">
        <div>
          <DressCarousel
            dressArray={dressFilter(head, dressFilterProperty.head)}
            editedLook={editedLook.head}
            categories={headCategories}
            title={'Хлебальник'}
            property={'head'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(body, dressFilter.body)}
            editedLook={editedLook.body}
            categories={bodyCategories}
            title={'Пузень'}
            property={'body'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(legs, dressFilter.legs)}
            editedLook={editedLook.legs}
            categories={legsCategories}
            title={'Ляхи'}
            property={'legs'}
          />
        </div>
        <div>
          <DressCarousel
            dressArray={dressFilter(feet, dressFilter.feet)}
            editedLook={editedLook.feet}
            categories={feetCategories}
            title={'Лапы'}
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
