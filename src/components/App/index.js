// == Import
import './styles.scss';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

// == Composant
function App() {
  return (
    <div className="app">
      <Header baseAmount={1} />
      <Main />
      <Footer />
    </div>
  );
}

// == Export
export default App;
