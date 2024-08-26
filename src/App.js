import bg1 from './assets/img.jpg';
import Header from './component/header.js';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
      <Header />
        <img src={bg1}></img>
      </div>
    </>


  );
}

export default App;
