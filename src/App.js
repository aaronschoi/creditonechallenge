import './App.css';
import Main from './assets/Main/Main';
import Footer from './assets/Footer/Footer';
import Header from './assets/Header/Header';

function App() {
  return (
    <div className="App">
      <Header blue={true}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
