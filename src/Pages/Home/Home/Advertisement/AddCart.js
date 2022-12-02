import React from "react";

const AddCart = ({ add }) => {
  const { title, img, price, sellerEmail, userIn } = add;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Seller Email:{sellerEmail}</p>
        <p>Price: ${price}</p>
        <p>Seller Email: {sellerEmail}</p>
        <p>Product Used: {userIn}</p>
      </div>
    </div>
  );
};

export default AddCart;
