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

  const user = useSelector((state) => state.user);
  while (user.uid === undefined) {
    return 'Loading...';
  }
  while (user.lookis === undefined) {
    return 'Loading...';
  }
  const { head = [], body = [], legs = [], feet = [] } = user;
  const editedLook = user.lookis.find((element) => element.id == id);

  return (
    <div id="globalDiv">
      <div className="dresser">
        <div>
          <DressCarousel
            dressArray={head}
            editedLook={editedLook.head}
            title={'Head'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property="head"
          />
        </div>
        <div>
          <DressCarousel
            dressArray={body}
            editedLook={editedLook.body}
            title={'Body'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property="body"
          />
        </div>
        <div>
          <DressCarousel
            dressArray={legs}
            editedLook={editedLook.legs}
            title={'Legs'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property="legs"
          />
        </div>
        <div>
          <DressCarousel
            dressArray={feet}
            editedLook={editedLook.feet}
            title={'Feet'}
            type={['Panamka', 'Slyapa', 'Bandana']}
            property="feet"
          />
        </div>
        <div>
          <ModalLookEdit editedLook={editedLook} />
        </div>
      </div>
    </div>
  );
}
