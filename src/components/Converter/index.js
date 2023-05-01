// == Import npm
import React from 'react';

// == Import locaux
import currenciesData from 'src/data/currencies';

// == Import
import './styles.scss';
import Header from '../Header';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Toggle from '../Toggle';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      baseAmount: 1,
      currency: 'United States Dollar',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  makeConversion = () => {
    const { currency, baseAmount } = this.state;
    const currencyData = currenciesData.find((data) => data.name === currency);
    const { rate } = currencyData;
    const result = baseAmount * rate;
    return Math.round(result * 100) / 100;
  };

  handleToggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  handleClick = (event) => {
    this.setState({
      currency: event.target.textContent,
    });
  };

  render() {
    const { isOpen, currency } = this.state;
    const convertedAmount = this.makeConversion();

    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Toggle isOpen={isOpen} toggle={this.handleToggle} />
        {isOpen && <Currencies currencies={currenciesData} handleClick={this.handleClick} />}
        <Amount currency={currency} value={convertedAmount} />
      </div>
    );
  }
}

// == Export
export default Converter;
