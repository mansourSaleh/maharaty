import React from "react";
// import Scrowp from "../components/icons/Scrowp";
// import Man from "../components/icons/Man";
// import Man2 from "../components/icons/Man2";
// import User from "../components/icons/User";
import lab from '../assets/img/icons/lab.png'
import space from '../assets/img/icons/space.png'
import paint from '../assets/img/icons/paint.png'
import arcitctur from '../assets/img/icons/arcitctur.png'
import Typing from 'react-typing-animation';
// import Cursor from "../components/Cursor";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      when: "beforeChildren",
      delay: 4,
      staggerChildren: 0.1
    }
  }
}
 
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 2,}
  }
}

function Hero(props) {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="pt-5 pt-lg-0  d-flex align-items-start flex-column para">

   
          <Typing >
              <h1 >مهاراتي هي بوابتك نحو النجاح</h1>{" "}
             
        </Typing>
              <br />
              
              <h2>
                أبدأ بتطوير ذاتك واكتساب المهارات من خلال هذه المنصة , نحن هنا
                لمساعدتك في تحقيق أحلامك , في مهاراتي ستجد الطريق نحو هدفك
              </h2>
              {/* <Typing.Backspace count={20} /> */}
             <Typing startDelay={3000}>
               <h1 className="red">هل أنت طالب  
               <Typing.Delay ms={1000} />
               <Typing.Backspace count={4} delay={1000}  />
               موظف
               <Typing.Backspace count={4} delay={1000}  />
               <Typing.Delay  />
               مؤسسة تعليمية
               <Typing.Backspace count={13} delay={1000}  />
               <Typing.Delay  />
               باحث عن عمل
               <Typing.Backspace count={11} delay={1000}  />
               <Typing.Delay  />
               صاحب عمل
               <Typing.Backspace count={8} delay={1000}  />
               <Typing.Delay  />
               طالب
               </h1>
             </Typing>
               {/* <h1 className="red">طالب </h1> */}

            
              {/* <h1 className="text-center red">فضلا اختر المجال المناسب لك ؟</h1> */}
            
          </div>
         
        </div>
        {/* <div > */}
        <motion.div className="row d-flex " variants={container}
    initial="hidden"
    animate="visible">
   
        <motion.img   variants={item}
        src={lab} alt="ddd" className="icon" />
       
       <motion.img variants={item}  src={space} alt="ddd" className="icon"/>
        <motion.img variants={item} src={arcitctur} alt="ddd" className="icon"/>
        <motion.img variants={item} src={paint} alt="ddd" className="icon"/>
        </motion.div>

        {/* </div> */}

      </div>
      {/* <div className="row  d-flex justify-content-center align-item-center">
        <div className=" d-flex col-lg-7  align-items-center">
         
        </div>
      </div> */}

      {/* <div
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
          </div> */}

      {/* <svg
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
      </svg> */}
    </section>
  );
}

export default Hero;
