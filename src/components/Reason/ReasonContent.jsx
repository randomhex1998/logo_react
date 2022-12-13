const ReasonContent = () => {
    const ReasonIco = "fas fa-check-double";
    const ReasonOption = "این یک متن تست است";
   return(
        <>
            <h3 className="MainTitles">دلیل انتخاب شرکت ما</h3>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای</p>
            <ul>
                <li><p>{ReasonOption}</p><i className={ReasonIco}></i></li>
                <li><p>{ReasonOption}</p><i className={ReasonIco}></i></li>
                <li><p>{ReasonOption}</p><i className={ReasonIco}></i></li>
            </ul>
        </>
   )
}


export default ReasonContent;