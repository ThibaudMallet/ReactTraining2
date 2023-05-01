// == Import npm
import React from 'react';

// == Import locaux
import currenciesData from 'src/data/currencies';

// == Import
import './styles.scss';
import Header from '../Header';
import Amount from '../Amount';
import Currencies from '../Currencies';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="converter">
        <Header baseAmount={1} />
        {isOpen && <Currencies currencies={currenciesData} />}
        <Amount currency="United States Dollar" value={1.09} />
      </div>
    );
  }
}

// == Export
export default Converter;
