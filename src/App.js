import logo from './logo.svg';
import './App.css';
import SearchBar from './component/SearchBar';
import MainPage from './page/MainPage';
import ImageCard from './component/ui-elements/ImageCard';

function App() {
  return (
    <div className="App">
      <ImageCard></ImageCard>
      <MainPage></MainPage>
      
    </div>
  );
}

export default App;
