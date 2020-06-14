import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import StorageUploaderModal from '../FirebaseAuth/StorageUploaderModal';

export default function ModalLogin(props) {
  const [show, setShow] = useState(false);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState(Array);
  const [value, setValue] = useState('');

  function addTags(event) {
    if (event.key === 'Enter') {
      const newTag = tags.findIndex((item) => item == tag);
      if (newTag === -1) {
        setTags([...tags, tag]);
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Save Look
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>+</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id='container' class='flexChild rowParent'>
            <div id='rowChild94955' class='flexChild'>
              <StorageUploaderModal />
            </div>

            <div id='rowChild77673' class='flexChild'>
              <div className='selectDiv'>
                <input
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                />
              </div>
              <div className='selectDivBottom'>
                <input
                  value={tag}
                  onChange={(event) => setTag(event.target.value)}
                  onKeyPress={addTags}
                  type='text'
                  className='form-control'
                  placeholder='Tags'
                  name='tags'
                  required
                />{' '}
              </div>
              {tags.map((item) => {
                return (
                  <span className='tags badge badge-pill badge-dark'>
                    {item}{' '}
                  </span>
                );
              })}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-outline-primary' variant='outline-primary'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
