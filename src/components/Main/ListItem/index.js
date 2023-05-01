// == Import
import './style.scss';
import data from '../../../data/currencies';

// == Composant
function ListItems() {
  const names = data.map((currency) => <li className="list__item" key={currency.rate}>{currency.name}</li>);
  return (
    <ul className="list">{names}</ul>
  );
}

export default ListItems;
