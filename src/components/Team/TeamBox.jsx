import Image1 from "../../Img/Customers/2.jpg"
const Teambox = () => {
    return(
        <div className="team-box column">
        <img src={Image1} alt="Elon Musk" />
        <div className="team-box-content">
            <h3>ایلان ماسک</h3>
            <p>مدیر ارشد</p>
        </div>
    </div>
    )
}


export default Teambox;