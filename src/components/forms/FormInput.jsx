import React from "react";

function FormInput({ register, name, type="text", errors }) {
    // console.log(errors[name])
  return (
    <div>
    <input
      className="border w-full border-amber-950 rounded-md p1 px-4 py-1"
      placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
      type={type}
      {...register(name)}
    />
    {
        errors[name] && <p className="text-red-600 text-xs font-extralight">{errors[name].message}</p>
    }
    </div>
  );
}

export default FormInput;
