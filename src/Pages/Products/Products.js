import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const { title, items } = useLoaderData();

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={items.product1?.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{items.product1?.title}</h2>
          <p className="text-2xl text-orange-600 font-semibold">
            Price: ${items.product1?.price}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/products/`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={items.product2?.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{items.product2?.title}</h2>
          <p className="text-2xl text-orange-600 font-semibold">
            Price: ${items.product2?.price}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/products/`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
