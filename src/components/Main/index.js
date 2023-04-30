// == Import
import './style.css';
import ListItems from './ListItem';

// == Composant
function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Currencies</h1>
      <ListItems />
    </main>
  );
}

export default Main;
