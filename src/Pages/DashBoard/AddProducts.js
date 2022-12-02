import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const { data: specialties, isLoading } = useQuery({
  //     queryKey: ["specialty"],
  //     queryFn: async () => {
  //       const res = await fetch("https://car-rent-server-two.vercel.app/appointmentSpecialty");
  //       const data = await res.json();
  //       return data;
  //     },
  //   });
  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Product</h2>
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {" "}
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            {...register("productName", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {" "}
            <span className="label-text">Product Type</span>
          </label>
          <select
            {...register("role")}
            name="pType"
            className="select select-bordered w-full"
          >
            <option>Private car</option>
            <option>Truck</option>
            <option>Micro Bus</option>
            <option>Bus</option>
            <option>Pick Up</option>
          </select>
          <label className="label">
            {" "}
            <span className="label-text">Condition</span>
          </label>
          <select
            {...register("role")}
            name="Condition"
            className="select select-bordered w-full"
          >
            <option>Execellent</option>
            <option>Good</option>
            <option>fair</option>
          </select>
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            placeholder="Location...!"
            {...register("location", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {" "}
            <span className="label-text">Original Price</span>
          </label>
          <input
            type="text"
            {...register("originalPrice", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {" "}
            <span className="label-text">New Price</span>
          </label>
          <input
            type="text"
            {...register("newPrice", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            {" "}
            <span className="label-text">Years Of use</span>
          </label>
          <input
            type="text"
            {...register("yOu", {
              required: true,
            })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-info w-full mt-4"
          value="Add Product"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;
