import React from "react";
import Btn from "../../shared/Button";

const SlideArea = () => {
  return (
    <div className="slide-area">
      <div className="wrapper container">
        <h2 className="slide-title">تیتر انتخابی برای این قسمت</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
        <div className="btns-area">
          <Btn btnClass="btn btn-green" btnTitle="قالب را هم اکنون بخرید" />
          <Btn btnClass="btn btn-white" btnTitle="CTA دکمه" />
        </div>
      </div>
    </div>
  );
};

export default SlideArea;
