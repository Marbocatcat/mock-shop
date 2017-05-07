import React from 'react';
import './MIDVIEW.css';

const images = ["./Assets/Image/photo1.jpg", "./Assets/Image/photo2.jpg", "./Assets/Image/photo1.jpg", "./Assets/Image/photo2.jpg","./Assets/Image/photo1.jpg","./Assets/Image/photo2.jpg"].map((photo, i) => (
  <a href=""><li><img className="Image" src={ photo } alt=""/></li></a>
));

const MIDVIEW = (props) => {
  return (
    <section className="Mid_View">
      <SlideBox />
    </section>
  )
};

const SlideBox = (props) => {
  return (
    <div className="Card_Wrapper">
      <ul>
        { images }
      </ul>
    </div>
  )
};

export default MIDVIEW;
