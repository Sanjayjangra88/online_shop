import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
import {addCart,delCart} from '../redux/action';


const Cart=()=> {
    const state = useSelector((state)=>state.handelCart);
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
     const addProduct =(product)=>{
         dispatch(addCart(product));
     }
     const subProduct =(product)=>{
        dispatch(delCart(product));
    }
    useEffect(() => {
      const getProduct = async ()=>{
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
          }
      
     getProduct();
   
    },[])
    const ShowProducts = () => {
        return (
          <>
            
            {state.map((product) => {
              return (
                <>
                <div className="row md-6">
                <div className="col-md-4">
                    <img src={product.image}alt={product.title} height="200px" width="180px"/>
                </div>
                <div className="col md-4">
                    <h3 >{product.title}
                        </h3>
                        <p className='lead fw-bold'>
                            {product.qty}X ${product.price} = $
                            {product.qty*product.price}
                        </p>
                        <button disabled={product.qty<1} className="btn btn-outline-dark me-4"
                       onClick={()=>subProduct(product.id)} >
                            <i className="fa fa-minus"></i>
                        </button>
                        <button className="btn btn-outline-dark "onClick={()=>addProduct(product.id)}>
                            
                            <i className="fa fa-plus"></i>
                        </button>
                   {console.log("jjj")}
                </div>
                </div>
                </>
              );
            })}
          </>
        );
      };
      return (
        <div>
      
            <div className="row justify-content-center">
              { <ShowProducts />}
            </div>
          </div>
        
      );
    }
  
   
  


  
export default Cart
