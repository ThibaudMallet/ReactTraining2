// == Import npm
import PropTypesLib from 'prop-types';

// == Import locaux
import './style.scss';

// == Composant
function Amount({ currency, value }) {
  return (
    <footer className="footer">
      <p className="footer__result">{value}</p>
      <p className="footer__text">{currency}</p>
    </footer>
  );
}

Amount.propTypes = {
  currency: PropTypesLib.string.isRequired,
  value: PropTypesLib.number.isRequired,
};

// == Export
export default Amount;
