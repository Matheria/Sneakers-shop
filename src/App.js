import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card/Card';

function App() {
  const arr = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: '/img/sneakers/1.jpg',
    },
    { title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageUrl: '/img/sneakers/2.jpg' },
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: '/img/sneakers/3.jpg',
    },
    {
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 8999,
      imageUrl: '/img/sneakers/4.jpg',
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
