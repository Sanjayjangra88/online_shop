
import './App.css';
import Home from './components2/Home';
import Navbar from './components2/Navbar';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Products from './components2/Products';



function App() {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
   
    <Routes>
    <Route exact path="/"component={Home}/>
    <Route exact path="/products"component={Products}/>
  {/* <Home/> */}
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
