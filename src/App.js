
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
