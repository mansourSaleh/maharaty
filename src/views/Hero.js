import React from "react";
import Scrowp from "../components/icons/Scrowp";
import Man from "../components/icons/Man";
import Man2 from "../components/icons/Man2";
import User from "../components/icons/User";

function Hero(props) {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
            <div data-aos="zoom-out">
              <h1>مهاراتي هي بوابتك نحو النجاح</h1>{" "}
              {/* <img
                src={require("../assets/img/nameARW.png")}
                className="img-fluid mb-4 "
                alt="test"
              /> */}
              {/* <br /> */}
              <br />
              <h2>
                أبدأ بتطوير ذاتك واكتساب المهارات من خلال هذه المنصة , نحن هنا
                لمساعدتك في تحقيق أحلامك , في مهاراتي ستجد الطريق نحو هدفك
              </h2>
            </div>
          </div>
          <div
            className="col-lg-5 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <div className="d-flex justify-content-center animated-opp">
              <Man2 />
              <User />
            </div>
            <div className=" d-flex justify-content-center animated">
              <Scrowp />
              <Man />
            </div>
          </div>
        </div>
      </div>
      <div className="row  d-flex justify-content-center align-item-center">
        <div className=" d-flex col-lg-7  align-items-center">
          <h1 className="text-center">فضلا اختر المجال المناسب لك ؟</h1>
        </div>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x={50}
            y={3}
            fill="rgba(255,255,255, .1)"
          ></use>
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x={50}
            y={0}
            fill="rgba(255,255,255, .2)"
          ></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x={50} y={9} fill="rgb(245,245,245)"></use>
        </g>
      </svg>
    </section>
  );
}

export default Hero;
