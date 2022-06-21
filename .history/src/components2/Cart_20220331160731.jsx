import React from "react";
import { useSelector } from "react-redux";

import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { delCart, cart } from "../redux/action";
import { useParams } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handelCart);
  const { id } = useParams();

  const [product, setProduct] = useState([]);
const dispatch = useDispatch();

  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products${id}`);
    setProduct(await response.json());
  };
  getProduct();

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-4">
          <img
            src={product.image}
            alt={product.title}
            height="200px"
            width="180px"
          />
        </div>
        <div className="col md-4">
          <h3>{product.title}</h3>
        </div>
      </>
    );
  };

  return (
    //   <div className="container py-4">
    <div>{state !== 0 && state.map(ShowProduct)}</div>
    //   </div>
  );
};
export default Cart;
