import React from "react";

function FormInput({ register, name }) {
  return (
    <input
      className="border w-full border-amber-950 rounded-md p1 px-4 py-1"
      placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
      type="text"
      {...register(name)}
    />
  );
}

export default FormInput;
