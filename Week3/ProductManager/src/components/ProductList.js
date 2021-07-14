import React from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductList = (props) => {
  const { removeFromDom } = props;
  const deleteProduct = (productId) => {
    axios.delete("http://localhost:8000/api/product/" + productId)
      .then(res => {
        removeFromDom(productId)
      });
  };
  return (
    <div>
      {props.product.map((product, index) => {
        return (
          <p key={index}>
            <Link to={"/product/" + product._id +"/edit"}>
              {product.title}, {product.price}, {product.description}
            </Link>
            <button
              onClick={(e) => {
                deleteProduct(product._id);
              }}
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default ProductList;
