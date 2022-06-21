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
                  <div className="col-md-3 mb-4">
                    <div className="card h-100 text-center p-4"key={product.id}>
                      <img src={product.image} className="card-img-top" alt={product.title}height="250px" />
                      <div className="card-body">
                        <h5 className="card-title mb-0">{product.title.substring(0,12)}</h5>
                        <p className="card-text lead fw-bold">
                  .    ${product.price}
                        </p>
                        <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
                          Buy now
                        </Link>
                      </div>
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
