// == Import npm
import PropTypesLib from 'prop-types';

// == Composant
function Currency({ name }) {
  return (<li className="main__currency">{name}</li>);
}

Currency.propTypes = {
  name: PropTypesLib.string.isRequired,
};

export default Currency;
