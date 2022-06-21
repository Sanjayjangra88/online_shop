
import './App.css';
 import Home from './components2/Home';
import Navbar from './components2/Navbar';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Products from './components2/Products';
import Product from './components2/Product';




function App() {
  return (
    <>
   
     <BrowserRouter>

    <Navbar/>
   
    <Routes>
     <Route exact path="/"element={<Home/>}/> 
    <Route exact path="/products"element={<Products/>}/>
    <Route exact path="/products/:id"element={<Product/>}/>
  
  </Routes>


  </BrowserRouter>
  
    </>
  );
}

export default App;
