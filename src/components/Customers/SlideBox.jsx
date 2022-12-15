import ElonImg from "../../Img/Customers/1.jpg"
const SlideBox = () => {
    return(
        <div className="comment-box">
          <div className="comment-head">
            <div className="comment-titles-area">
              <h3>ایلان ماسک</h3>
              <p>مشتری ثابت</p>
            </div>
            <div className="comment-img-area">
              <img src={ElonImg} alt="" />
            </div>
          </div>
          <p className="comment-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        </div>
    )
}

export default SlideBox;