import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
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
           Loading....
           </>
       )
   } 
   const ShowProduct =()=>{
       return(
           <>
           <div className="col-md-">
               <img src={product.image}alt={product.tittle}height="400px"width="480px"/>
           </div>
           <div className="col md-6">
               <h4 className='text-uppercase text-black-50'>{product.category}</h4>
               <h1 className='display-5'>{product.tittle}</h1>
               <p1 className="lead fw-bolder">
                   Rating {product.rating && product.rating.rate}
                   <i className="fa fa-star"></i>
               </p1>
                <h3 className='display-6 fw-bolder'></h3>
           </div>
           </>
       )
   }
  return (
    <div>
      <div className="container">
          <div className="row">
              {loading ? <Loading/>:<ShowProduct/>}
          </div>
      </div>
    </div>
  )
}

export default Product
