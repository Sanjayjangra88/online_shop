import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
 import { useDispatch } from 'react-redux';
 import { useEffect } from 'react';


const Cart=()=> {
    // const state = useSelector((state)=>state.handelCart)
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
     const dispatch = useDispatch();
     const handelButton =(product)=>{
         dispatch(delCart(product));
     }
    useEffect(() => {
      const getProduct = async ()=>{
          setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
          setLoading(false);
      }
     getProduct();
    }, [])
   const Loading =()=>{
       return(
           <>
         <div className="col-md-6">
             <Skeleton height={400}/>
         </div>
         <div className="col-md-6" style={{lineHeight:2}}>
             <Skeleton height={50} width={300}/>
             <Skeleton height={75} />
             <Skeleton height={25} width={150}/>
             <Skeleton height={50} />
             <Skeleton height={150} />
             <Skeleton height={150} width={100}/>
            {/* <Skeleton height={150} width={100} style={{marginLeft:6}}/>  */}
         </div>
           </>
       )
   } 
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
                   <p className='lead fw-bold'>
                       {product.qty}X ${product.price} = ${product.qty * product.price} 
                   </p>
           
                  <button className='btn btn-outline-dark me -4'onClick={()=>handelButton(product)}>
                     <i className='fa fa-minus'></i>
                 </button>
                 <button className='btn btn-outline-dark me -4'onClick={()=>handelButton(product)}>
                     <i className='fa fa-plus'></i>
                 </button> 
               
               
               
           </div>
           </>
       )
   }
  return (
    
      <div className="container py-4">
          <div className="row py-4">
              {loading ? <Loading/>:<ShowProduct/>}
          </div>
      </div>
  )
}

export default Cart
