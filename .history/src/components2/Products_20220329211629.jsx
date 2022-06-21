import React, { useState, useEffect } from "react";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      getProducts();
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
  }, []);

  const Loading = () => {
    return;
    <>Loading........</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons">
          <button className="btn btn-outline-dark me-2">ALL</button>
          <button className="btn btn-outline-dark me-2">Mens,s Clothes</button>
          <button className="btn btn-outline-dark me-2">Mens,s Clothes</button>
          <button className="btn btn-outline-dark me-2">Mens,s Clothes</button>
          <button className="btn btn-outline-dark me-2">Mens,s Clothes</button>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts/>}
        </div>
      </div>
    </div>
  );
}

export default Products;
