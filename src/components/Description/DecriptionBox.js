import DescPara from "./DecriptionPara";
import DescIco from "./DecriptionIco";
import DescTitle from "./DecriptionTitle";

const DesBox = ({ICON}) => {
  return (
    <div className="desc-box column">
      <DescIco ClsName="des-ico" Ico={ICON} />
      <DescTitle ClsName="DescTitle" Title="کاملا قابل شخصی سازی" />
      <DescPara ClsName="desc-para" />
      <a href="#" className="desc-link">اطلاعات بیشتر</a>
    </div>
  );
};

export default DesBox;
