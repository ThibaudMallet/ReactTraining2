// == Import npm
import PropTypesLib from 'prop-types';

// == Composant
function Currency({ name, handleClick }) {
  return (
    <li
      className="main__currency"
      onClick={handleClick}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypesLib.string.isRequired,
  handleClick: PropTypesLib.func.isRequired,
};

export default Currency;
