
import './App.css';
import Home from './components2/Home';
import Navbar from './components2/Navbar';
import {Switch ,Route} from 'react-router-dom';
import Products from './components2/Products';



function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/"component={Home}/>
    <Route exact path="/products"component={Products}/>
  <Home/>
  </Switch>
    </>
  );
}

export default App;
