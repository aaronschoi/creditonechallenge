import './App.css';
import Main from './assets/Main/Main';
import Footer from './assets/Footer/Footer';
import Header from './assets/Header/Header';
import { useAppSelector } from './store/hooks/hooks';

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
