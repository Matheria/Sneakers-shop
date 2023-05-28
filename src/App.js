import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card/Card';

function App() {
  const arr = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: '/img/sneakers/NikeBlazerMidSuede.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 8999,
      imageUrl: '/img/sneakers/NikeAirMax270.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12499,
      imageUrl: '/img/sneakers/NikeBlazerMidSuede.jpg',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
      imageUrl: '/img/sneakers/PumaXAkaBokuFutureRider.jpg',
    },
    {
      title: 'Мужские Кроссовки Under Armour Curry 8',
      price: 15999,
      imageUrl: '/img/sneakers/UnderArmourCurry8.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Kyrie 7',
      price: 11999,
      imageUrl: '/img/sneakers/NikeKyrie7.jpg',
    },
    {
      title: 'Мужские Кроссовки Jordan Air Jordan 11',
      price: 10999,
      imageUrl: '/img/sneakers/JordanAirJordan11.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike LeBron XVIII',
      price: 16499,
      imageUrl: '/img/sneakers/NikeLeBronXVIII.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Lebron XVIII Low',
      price: 13499,
      imageUrl: '/img/sneakers/NikeLebronXVIIILowLow.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: '/img/sneakers/NikeBlazerMidSuede.jpg',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
      imageUrl: '/img/sneakers/PumaXAkaBokuFutureRider.jpg',
    },
    {
      title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
      price: 11499,
      imageUrl: '/img/sneakers/NikeKyrieFlytrapIV.jpg',
    },
  ];

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h2 className="content__title">Все кроссовки</h2>
          <div className="search-block d-flex">
            <img src="./img/search.svg" alt="search" />
            <input className="search-block__input" type="text" placeholder="Поиск..." />
          </div>
        </div>
        {<Card />}
      </div>
    </div>
  );
}

export default App;
