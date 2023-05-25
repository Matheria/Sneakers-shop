const Header = () => {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img src="./img/logo.svg" width={40} height={40} alt="logo" />
        <div className="header__info">
          <h3 className="text-uppercase">Sneakers shop</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="d-flex mr-30 align-center">
          <img src="./img/cart.svg" width={18} height={18} alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li className="d-flex mr-30 align-center">
          <img src="./img/heart.svg" width={18} height={18} alt="favorites" />
        </li>
        <li className="d-flex align-center">
          <img src="./img/user.svg" width={18} height={18} alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
