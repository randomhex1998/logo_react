const ContactInfo = ({InfoIco , InfoTitle , InfoText}) => {
    return(
        <div className="contact-info column pt-2">
            <div className="info-box ">
                <i className={InfoIco}></i>
                <h3>{InfoTitle}</h3>
                <p>{InfoText}</p>
            </div>
        </div>
    )
}

export default ContactInfo;