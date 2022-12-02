import React, { useEffect, useState } from "react";
import AddCart from "./AddCart";

const Advertisement = () => {
  const [adds, setAdd] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAdd(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-4 mt-12">
        <p className="text-2xl font-bold text-purple-600">Advertisements</p>
      </div>
      <div className="grid  gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {" "}
        {adds.map((add) => (
          <AddCart key={add.service_id} add={add}></AddCart>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
