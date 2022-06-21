import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'

import Skeleton from 'react-loading-skeleton';

 import { useEffect ,useState} from 'react';
 import {delCart,cart} from '../redux/action';
 import { useParams } from 'react-router-dom';


const Cart=()=> {
    const {cart} = useSelector((state)=>state.handelCart);
    console.log(cart)

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
     const dispatch = useDispatch();
      
    useEffect(() => {
      const getProduct = async ()=>{
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
          setLoading(false);
      }
     getProduct();
    }, [])
//    const Loading =()=>{
//        return(
//            <>
//          <div className="col-md-6">
//              <Skeleton height={400}/>
//          </div>
//          <div className="col-md-6" style={{lineHeight:2}}>
//              <Skeleton height={50} width={300}/>
//              <Skeleton height={75} />
//              <Skeleton height={25} width={150}/>
//              <Skeleton height={50} />
//              <Skeleton height={150} />
//              <Skeleton height={150} width={100}/>
//             {/* <Skeleton height={150} width={100} style={{marginLeft:6}}/>  */}
//          </div>
//            </>
//        )
//    } 
   const ShowProduct =()=>{
       return(
           <>
           <div className="col-md-4">
               <img src={product.image}alt={product.title} height="200px" width="180px"/>
           </div>
           <div className="col md-4">
               <h3>
                   {product.title}
                   </h3>
                   {/* <p className='lead fw-bold'>
                       {product.qty}x ${product.price} = $
                       {product.qty * product.price} 
                   </p>
            */}
                
               
               
           </div>
           </>
       )
   }
  
  return (
    
     <div className="container py-4">
          <div>
              {/* {<ShowProduct/>} */}
          
          </div>

       </div>
       
  )

  }
export default Cart
