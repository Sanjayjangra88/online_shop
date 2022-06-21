import React,{useState,useEffect} from 'react'

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false)
    let componentMounted = true;
    useEffect(() => {
      const getProducts = async ()=>{

      
      getProducts();
      setLoading(true);
      const response = await fetch("http://fakestoreapi.com/products");
      if(componentMounted){
          setData(await response.clone().json());
          setFilter(await response.json());
          setLoading(false);
          console.log(filter);
      }
      return()=>{
          componentMounted = false;
      }
    }
    }, []);
    
  return (
    <div>
      
    </div>
  )
}

export default Products
