// == Import locaux
import currenciesData from 'src/data/currencies';

// == Import
import './styles.scss';
import Header from '../Header';
import Amount from '../Amount';
import Currencies from '../Currencies';

// == Composant
function Converter() {
  return (
    <div className="app">
      <Header baseAmount={1} />
      <Currencies currencies={currenciesData} />
      <Amount currency="United States Dollar" value={1.09} />
    </div>
  );
}

// == Export
export default Converter;
