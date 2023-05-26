import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card/Card';

function App() {
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
