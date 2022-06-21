import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';


const Cart=()=> {
    const state = useSelector((state)=>state.handelCart);
    const {id} = useParams();
    const [product, setProduct] = useState([]);
   
    useEffect(() => {
      const getProduct = async ()=>{
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
          }
      
     getProduct();
     console.log(product.title);
    },[])
    const ShowProducts = () => {
        return (
          <>
            
            {state.map((product) => {
              return (
                <>
                <div className="col-md-6">
                    <img src={product.image}alt={product.title} height="400px" width="480px"/>
                </div>
                <div className="col md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                        </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                     <h3 className='display-6 fw-bolder my-4'>$ {product.price}
                     </h3>
                     <p className='lead'>{product.description}</p>
                   
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
