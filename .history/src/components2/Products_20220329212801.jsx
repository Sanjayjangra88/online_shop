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
        <div className="buttons d-flex flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">ALL</button>
          <button className="btn btn-outline-dark me-2">Mens,s Clothes</button>
          <button className="btn btn-outline-dark me-2">Women,s Clothes</button>
          <button className="btn btn-outline-dark me-2">Jeweley</button>
          <button className="btn btn-outline-dark me-2">Electronics</button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card">
                  <img src={product.image} className="card-img-top" alt={product.tittle} />
                  <div className="card-body">
                    <h5 className="card-title">{product.tittle}</h5>
                    <p className="card-text">
              .    ${product.price}
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
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
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
