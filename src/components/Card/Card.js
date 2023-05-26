import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__favorite}>
        <img src="./img/heart_unliked.svg" alt="unliked" />
      </div>
      <img
        className={styles.card__img}
        src="./img/sneakers/NikeBlazerMidSuede.jpg"
        width={133}
        height={112}
        alt="Nike Blazer Mid Suede"
      />
      <p className={styles.card__text}>
        Мужские Кроссовки
        <br /> Nike Blazer Mid Suede
      </p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className={styles.card__price}>Цена:</span>
          <b className="card__cost">12 999 руб.</b>
        </div>
        <button className="button">
          <img src="./img/btn_plus.svg" width={11} height={11} alt="plus" />
        </button>
      </div>
    </div>
  );
};

export default Card;
