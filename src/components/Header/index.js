// == Import npm
import PropTypesLib from 'prop-types';

// == Import locaux
import './style.scss';

// == Composant
function Header({ baseAmount }) {
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__text">{baseAmount} euro</p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypesLib.number.isRequired,
};

// == Export
export default Header;
