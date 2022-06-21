import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';


const Cart=()=> {
    const state = useSelector((state)=>state.handelCart);
    console.log(state.id);

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    // const [loading, setLoading] = useState(false);
     const dispatch = useDispatch();
      
    useEffect(() => {
      const getProduct = async ()=>{
        
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
          
      }
     getProduct();
    },[])


       return(
           <>
        <div className="cart">
        <div className="container">
             {state.image}
        <h1>Your  Cart</h1>       
                
            
            
            </div>
            </div>
            </>
       )
           
           
          
   }
  
 

  
export default Cart
