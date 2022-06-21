import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useEffect ,useState} from 'react';
 import {delCart,cart} from '../redux/action';
 import { useParams } from 'react-router-dom';


const Cart=()=> {
    const state = useSelector((state)=>state.handelCart);
    console.log(state);

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    // const [loading, setLoading] = useState(false);
     const dispatch = useDispatch();
      
    useEffect(() => {
      const getProduct = async ()=>{
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
          
      }
     getProduct();
    },[])


       return(
        <div className="cart">
        <div className="container">
             
            <img src={product.image}alt={product.title} height="400px" width="480px"/>
                    
                
            
            
            </div>
            </div>
       )
           
           
          
   }
  
 

  
export default Cart
