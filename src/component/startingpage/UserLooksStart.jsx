import React, { useState } from "react";

import { Carousel } from "react-bootstrap";

export default function UserLooksStart() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="slider">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            width: "300px",
            height: "300px",
            display: "flex",
            margin: "30px",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mtdata.ru/u27/photoE4ED/20330504634-0/original.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://v.img.com.ua/b/1100x999999/2/c7/97147008e20ffe3c0e1bd33be20b1c72.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://avatars.mds.yandex.net/get-pdb/1040926/8ac3f8fa-cbf8-4591-bd1c-cd8556fe5c3d/s1200?webp=false"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            width: "300px",
            height: "300px",
            display: "flex",
            margin: "30px",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hochyvseznat.ru/wp-content/uploads/2018/11/9b38197a8c322ac6ed5251acc8e66939.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mtdata.ru/u4/photoE9AF/20966049267-0/original.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mtdata.ru/u1/photo7D1E/20227929951-0/original.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{
            width: "300px",
            height: "300px",
            display: "flex",
            margin: "30px",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hochyvseznat.ru/wp-content/uploads/2018/11/9b38197a8c322ac6ed5251acc8e66939.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://avatars.mds.yandex.net/get-pdb/1066918/72db2296-91ca-48f3-bb84-66944e88f151/s1200?webp=false"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://hochyvseznat.ru/wp-content/uploads/2018/11/9b38197a8c322ac6ed5251acc8e66939.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
