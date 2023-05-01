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
      inputValue: '',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.updateTitle();
    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.setState({
          isOpen: false,
        });
      }
    });
  }

  componentDidUpdate() {
    this.updateTitle();
  }

  updateTitle = () => {
    const { currency } = this.state;
    document.title = `Converter - ${currency}`;
  };

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

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleClick = (event) => {
    this.setState({
      currency: event.target.textContent,
    });
  };

  getCurrencies = () => {
    const { inputValue } = this.state;
    let filteredCurrencies = currenciesData;
    const lowerCaseInputValue = inputValue.toLowerCase();

    if (lowerCaseInputValue.length > 0) {
      filteredCurrencies = currenciesData.filter(
        (currency) => {
          const lowerCaseCurrencyName = currency.name.toLowerCase();

          return lowerCaseCurrencyName.includes(lowerCaseInputValue);
        },
      );
    }

    return filteredCurrencies;
  };

  render() {
    const { isOpen, currency, inputValue } = this.state;
    const convertedAmount = this.makeConversion();
    const filteredCurrencies = this.getCurrencies();

    return (
      <div className="converter">
        <Header baseAmount={1} />
        <Toggle isOpen={isOpen} toggle={this.handleToggle} />
        {isOpen && (
          <Currencies
            currencies={filteredCurrencies}
            handleClick={this.handleClick}
            value={inputValue}
            handleChange={this.handleChange}
          />
        )}
        <Amount currency={currency} value={convertedAmount} />
      </div>
    );
  }
}

// == Export
export default Converter;
