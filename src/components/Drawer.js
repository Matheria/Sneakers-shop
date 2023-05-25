const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img className="cart-item__remove" src="./img/btn_delete.svg" alt="delete" />
        </h2>
        <div className="items">
          <div className="cart-item d-flex align-center">
            <img
              className="mr-20"
              src="./img/sneakers/NikeBlazerMidSuede.jpg"
              width={70}
              height={70}
              alt="Nike Blazer Mid Suede"
            />
            <div className="mr-20">
              <p className="cart-item__text mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b className="cart-item__cost">12 999 руб.</b>
            </div>
            <img className="cart-item__remove" src="./img/btn_delete.svg" alt="delete" />
          </div>
        </div>
        <div className="cart-total-block">
          <ul className="cart-total">
            <li className="d-flex align-end mb-20">
              <span>Итого:</span>
              <div className="cart-total__border"></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex align-end mb-20">
              <span>Налог 5%: </span>
              <div className="cart-total__border"></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="cart-button">
            Оформить заказ
            <img className="cart-button__icon" src="./img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
