import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  const { items } = products;
  const { product1, product2 } = items;
  const [book, setBook] = useState(null);

  return (
    <div>
      <div>
        <h2 className="text-3xl text-orange-700">Available Options:</h2>
      </div>
      <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-24 lg:ml-48">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={items.product1?.img} alt="car" />
          </figure>
          <div className="card-body">
            <p>
              <small className="text-xl font-semibold">
                Location: {product1?.location}
              </small>
            </p>
            <p className="font-semibold">
              <small>Driver: {product1?.seller}</small>
            </p>
            <h2 className="card-title">{product1?.title}</h2>
            <p className="text-xl text-orange-600 font-semibold">
              Price: ${product1?.price} per Hour
            </p>
            {/* <p className="text-2xl text-info">
              Re-sell Price:${product1?.resellPrice}
            </p> */}

            <div className="card-actions justify-end">
              <label htmlFor="booking-modal" className="btn btn-primary">
                Book Now
              </label>
            </div>
            {/* <p>
              <small>Post Time:{product1?.postTime}</small>
            </p> */}
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product2?.img} alt="car" />
          </figure>
          <div className="card-body">
            <p>
              <small className="text-xl font-semibold">
                Location: {product2?.location}
              </small>
            </p>
            <p className="font-semibold">
              <small>Driver: {product2?.seller}</small>
            </p>
            <h2 className="card-title">{items.product2?.title}</h2>
            <p className="text-xl text-orange-600 font-semibold">
              Price: ${product2?.price} per Hour
            </p>
            {/* <p className="text-2xl text-info">
              Re-sell Price:${product2?.resellPrice}
            </p> */}
            <div className="card-actions justify-end">
              <label
                htmlFor="booking-modal"
                className="btn btn-primary"
                onClick={() => setBook(items)}
              >
                Book Now
              </label>
              {items && (
                <BookingModal
                  setBook={setBook}
                  book={book}
                  products={products}
                ></BookingModal>
              )}
            </div>
            <p>
              <small>Post Time:{product2?.postTime}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
