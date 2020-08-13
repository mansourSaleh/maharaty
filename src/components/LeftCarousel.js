import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import II from "./../assets/img/bg.jpg";

function LeftCarousel() {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        showArrows={false}
      >
        <div>
          <img
            src={II}
            alt="test"
            style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
          />
          <div className="ddd">
            <h1>Legend 1</h1>
            <p className="text-center">
              lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
              consectetur lorem ipsum ipsumi psum ipsum dolor sit amet,
              consectetur
            </p>
            <h3>Learn more</h3>
          </div>
        </div>
        <div>
          <img
            src={II}
            alt="test"
            style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
          />
          <div className="ddd">
            <h1>Legend 1</h1>
            <p className="text-center">
              lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
              consectetur lorem ipsum ipsumi psum ipsum dolor sit amet,
              consectetur
            </p>
            <h3>Learn more</h3>
          </div>
        </div>
        <div>
          <img
            src={II}
            alt="test"
            style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
          />
          <div className="ddd">
            <h1>Legend 1</h1>
            <p className="text-center">
              lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
              consectetur lorem ipsum ipsumi psum ipsum dolor sit amet,
              consectetur
            </p>
            <h3>Learn more</h3>
          </div>
        </div>
        <div>
          <img
            src={II}
            alt="test"
            style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
          />
          <div className="ddd">
            <h1>Legend 1</h1>
            <p className="text-center">
              lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
              consectetur lorem ipsum ipsumi psum ipsum dolor sit amet,
              consectetur
            </p>
            <h3>Learn more</h3>
          </div>
        </div>
        
      </Carousel>
    );
  }

  return <ControlledCarousel />;
}

export default LeftCarousel;
