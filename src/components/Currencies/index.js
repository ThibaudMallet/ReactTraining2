// == Import npm
import PropTypesLib from 'prop-types';

// == Import locaux
import Currency from './Currency';
import './style.scss';

// == Composant
function Currencies({ currencies }) {
  return (
    <main className="main">
      <h1 className="main__title">Currencies</h1>
      <ul>
        {
          currencies.map(
            (currency) => <Currency key={currency.name} {...currency} />,
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
