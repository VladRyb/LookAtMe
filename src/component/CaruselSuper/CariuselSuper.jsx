import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { useState } from 'react';
import { Image } from 'react-bootstrap';
import { StyleRoot } from 'radium';

function CariuselSuper() {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     active: 0,
  //   };
  // }
  const [state, setState] = useState({
    active: 0,
  });

  function _handleClick() {
    var num = Math.floor(Math.random() * 10 + 1);
    setState({
      active: num,
    });
  }

  return (
    // <StyleRoot>
    <Coverflow
      width={100}
      height={300}
      // navigation
      // infiniteScroll
      // enableHeading
      displayQuantityOfSide={1.8}
      navigation={false}
      enableHeading={false}
    >
      {/* <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role='menuitem'
          tabIndex='0'
        >
          <img
          src='https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg'
          alt='title or description'
          style={{ display: 'block', width: '100%' }}
        />
        </div> */}
      <img
        src='https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg'
        alt='title or description'
        data-action='http://andyyou.github.io/react-coverflow/'
      />
      <img
        src='https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg'
        alt='title or description'
        data-action='http://andyyou.github.io/react-coverflow/'
      />
      <img
        src='https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg'
        alt='title or description'
        data-action='http://andyyou.github.io/react-coverflow/'
      />
      <img
        src='https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg'
        alt='title or description'
        data-action='http://andyyou.github.io/react-coverflow/'
      />
      <img
        src='https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg'
        alt='title or description'
        data-action='http://andyyou.github.io/react-coverflow/'
      />
      <img
        src='https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg'
        alt='title or description'
        data-action='http://andyyou.github.io/react-coverflow/'
      />
      <img
        src='https://cs9.pikabu.ru/images/big_size_comm/2018-12_2/154416720229829073.jpg'
        alt='title or description'
        data-action='http://andyyou.github.io/react-coverflow/'
      />
    </Coverflow>
    // </StyleRoot>
  );

  // _handleClick() {
  //   var num = Math.floor(Math.random() * 10 + 1);
  //   this.setState({
  //     active: num,
  //   });
  // }
}
export default CariuselSuper;

// ReactDOM.render(<Container></Container>, document.querySelector('.example_4'));

// var React = require('react');
// var ReactDOM = require('react-dom');
// var Coverflow = require('react-coverflow');

// var fn = function () {
//   /* do you want */
// };

// ReactDOM.render(
//   <Coverflow
//     width={960}
//     height={480}
//     displayQuantityOfSide={2}
//     navigation={false}
//     enableHeading={false}
//   >
//     <div
//       onClick={() => fn()}
//       onKeyDown={() => fn()}
//       role='menuitem'
//       tabIndex='0'
//     >
//       <img
//         src='[image/path/please_change]'
//         alt='title or description'
//         style={{ display: 'block', width: '100%' }}
//       />
//     </div>
//     <img
//       src='[image/path/please_change]'
//       alt='title or description'
//       data-action='http://andyyou.github.io/react-coverflow/'
//     />
//     <img
//       src='[image/path/please_change]'
//       alt='title or description'
//       data-action='http://andyyou.github.io/react-coverflow/'
//     />
//   </Coverflow>,

//   document.querySelector('.content')
// );
