import React, { useRef } from "react";
import { Card, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function Item({ vehicle }) {
  const carouselRef = useRef();

  const nextImage = () => {
    carouselRef.current.next();
  };

  const prevImage = () => {
    carouselRef.current.prev();
  };

  return (
    <>
      <div className="row upper-row">
        <div className="item col-sm-12 col-md-8 mb-3 mb-sm-0">
          <div className="card">
            <div className="row p-2">
              <div className="carousel-button-container col-1 d-none d-sm-flex">
                <button className="carousel-button" onClick={prevImage}>
                  <LeftOutlined className="icon" />
                </button>
              </div>
              <div className="carousel col-10 mx-auto">
                <Carousel ref={carouselRef}>
                  <img src={vehicle[0]?.url} alt="etc" />
                  <img src={vehicle[0]?.url} alt="etc" />
                </Carousel>
              </div>
              <div className="carousel-button-container col-1 d-none d-sm-flex">
                <button className="carousel-button" onClick={nextImage}>
                  <RightOutlined className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <Card className="car-info mb-3">
            <div>
              <h1>Rs: 1000</h1>
              <p>2019</p>
              <p>HD Nature Wallpaper</p>
            </div>
          </Card>
          <Card className="contact-info mb-3">
            <div>
              <h1>Rs: 1000</h1>
              <p>2019</p>
              <p>HD Nature Wallpaper</p>
            </div>
          </Card>
          <Card className="contact-info">
            <div>
              <h1>Rs: 1000</h1>
              <p>2019</p>
              <p>HD Nature Wallpaper</p>
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Card>
            <h2>Description:</h2>
            <p>
              This is sample photo only for demonstration in development purpose
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Item;
