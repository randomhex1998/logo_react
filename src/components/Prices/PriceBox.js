import Button from "../../shared/Button";
import RoundedPrice from "./RoundedPrice";
const PriceBOX = () => {
  return (
    <div className="price-box column">
      <p>پنل معمولی</p>
      <RoundedPrice />
      <div className="price-box-content">
        <p>گیگابایت فضای داخلی 1</p>
        <p>1000 اکانت ایمیل</p>
        <p>پشتیبانی 24/7</p>
      </div>
      <Button btnClass="btn" btnTitle="هم اکنون سفارش دهید" />
    </div>
  );
};

export default PriceBOX;
