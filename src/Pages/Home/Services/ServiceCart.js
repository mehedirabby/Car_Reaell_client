import React from "react";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { img, title, price, _id, items } = service;
  console.log(items);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/products/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
