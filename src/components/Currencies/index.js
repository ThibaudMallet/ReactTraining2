// == Import npm
import PropTypesLib from 'prop-types';

// == Import locaux
import Currency from './Currency';
import './style.scss';

// == Composant
function Currencies({ currencies, handleClick }) {
  return (
    <main className="main">
      <h2 className="main__title">Currencies</h2>
      <input
        className="main__search"
        type="text"
        placeholder="Rechercher"
      />
      <ul>
        {
          currencies.map(
            (currency) => <Currency key={currency.name} handleClick={handleClick} {...currency} />,
          )
        }
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  handleClick: PropTypesLib.func.isRequired,
  currencies: PropTypesLib.arrayOf(
    PropTypesLib.shape({
      name: PropTypesLib.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
