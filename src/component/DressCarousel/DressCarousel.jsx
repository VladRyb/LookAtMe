import React from "react";
import {DropdownButton, Dropdown }from 'react-bootstrap';
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import './DresserCarousel.css'

class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
      <div className="dressCarousel">
        <Carousel slidesPerPage={2} arrows >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv83sbd56zPRm8aRFcOIHfIHUpj5jYXA6DdSfZCliExCNyP_-q&usqp=CAU" alt="image" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv83sbd56zPRm8aRFcOIHfIHUpj5jYXA6DdSfZCliExCNyP_-q&usqp=CAU" alt="image" />

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv83sbd56zPRm8aRFcOIHfIHUpj5jYXA6DdSfZCliExCNyP_-q&usqp=CAU" alt="image" />
        </Carousel>
      </div>
      </>
    );
  }
}

export default MyCarousel;
