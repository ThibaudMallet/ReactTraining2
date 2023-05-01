// == Importx npm
import PropTypesLib from 'prop-types';

// == Importx locaux
import './style.scss';

// == Composant
function Toggle({ isOpen, toggle }) {
  const classNames = isOpen ? 'toggler toggler--open' : 'toggler';

  return (
    <button
      className={classNames}
      type="button"
      onClick={toggle}
    >
      =
    </button>
  );
}

Toggle.propTypes = {
  isOpen: PropTypesLib.bool.isRequired,
  toggle: PropTypesLib.func.isRequired,
};

// == Export
export default Toggle;
