import logo from './logo.svg';
import './App.css';
import MainPage from './page/MainPage';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
        <h1 className="heading">Search Images from Flicker</h1>
        </div>
      </div>
      <MainPage></MainPage>
      
    </div>
  );
}

export default App;
