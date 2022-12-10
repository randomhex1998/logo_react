export const MenuUl = ({ classAct }) => {
  return (
    <ul className={classAct ? "menu-area active" : "menu-area"}>
      <li className="nav-items">
        <a href="#" className="nav-link">
          خانه
        </a>
      </li>
      <li className="nav-items">
        <a href="#" className="nav-link">
          درباره ما
        </a>
      </li>
      <li className="nav-items">
        <a href="#" className="nav-link">
          نمونه کار
        </a>
      </li>
      <li className="nav-items">
        <a href="#" className="nav-link">
          خدمات
        </a>
      </li>
      <li className="nav-items">
        <a href="#" className="nav-link">
          قیمت ها
        </a>
      </li>
      <li className="nav-items">
        <a href="#" className="nav-link">
          تیم ما
        </a>
      </li>
      <li className="nav-items">
        <a href="#" className="nav-link">
          تماس با ما
        </a>
      </li>
    </ul>
  );
};
