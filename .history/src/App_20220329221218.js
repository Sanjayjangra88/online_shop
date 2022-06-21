
import './App.css';
import Home from './components2/Home';
import Navbar from './components2/Navbar';
import {BrowserRouter ,Route,Router,Routes} from 'react-router-dom';
import Products from './components2/Products';



function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Router>
    <Route exact path="/"component={Home}/>
    <Route exact path="/products"component={Products}/>
  <Home/>
  </Router>
  </BrowserRouter>
    </>
  );
}

export default App;
