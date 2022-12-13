const AboutBOX = ({AboutIco , AboutTitle}) => {
    return(
        <div className="about-box column">
            <div className="row">
                <i className={AboutIco}></i>
                <h3>{AboutTitle}</h3>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
        </div>
    )
}

export default AboutBOX;