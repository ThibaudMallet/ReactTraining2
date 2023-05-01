// == Import npm
import PropTypesLib from 'prop-types';

// == Import locaux
import './style.scss';

// == Composant
function Currencies({ currencies }) {
  return (
    <main className="main">
      <h1 className="main__title">Currencies</h1>
      <ul>
        {
          currencies.map(
            (currency) => <li className="main__currency" key={currency.name}>{currency.name}</li>,
          )
        }
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  currencies: PropTypesLib.arrayOf(
    PropTypesLib.shape({
      name: PropTypesLib.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
