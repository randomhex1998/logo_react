import Button from "../../shared/Button";

const ContactForm = () => {
    return(
        <form action="#" className="main-form">
            <div className="row">
                <div className="column">
                    <input type="text" className="inpt" placeholder="نام و نام خانوادگی"/>
                </div>
                <div className="column" >
                    <input type="text" className="inpt" placeholder="ایمیل" />
                </div>
            </div>
                <input type="text" className="inpt" placeholder="موضوع" />
                <textarea rows="10" className="txtarea" placeholder="پیام شما"></textarea>

            <Button btnClass="btn" btnTitle="ارسال درخواست"></Button>
        </form>
    )
}

export default ContactForm;