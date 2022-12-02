import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-4 mt-12">
        <p className="text-2xl font-bold text-purple-600">Cetagories</p>
        <h2 className="text-5xl font-semibold">Best Car collection in BD</h2>
      </div>
      <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
