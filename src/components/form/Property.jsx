"use client";
import { useState, useEffect } from "react";
import { Home, Building2, School, Warehouse } from "lucide-react";
import { PropertyData } from "../../data/formdata";

export default function Property({
  register,
  errors,
  setValue,
  getValues,
  propertyOptions,
}) {
  const [loading, setloading] = useState(false);

  const [selected, setSelected] = useState("");

  useEffect(() => {
    const current = getValues ? getValues("property") : "";
    if (current) setSelected(current);
  }, [getValues]);

  const handleSelect = (name) => {
    setSelected(name);
    setValue("property", name, { shouldValidate: true });
    console.log("Selected property:", name); // Log the selected property
  };

  return (
    <div className="property-form w-full">
      <h2 className="formHeading col-span-4 mb-4">Choose the property</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {propertyOptions?.map((property, index) => (
          <label
            key={index}
            onClick={() => handleSelect(property.name)}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border p-4
              ${
                selected === property.name
                  ? "border-gray-600 bg-gray-500 text-white-1"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {/* <div className="mb-2">{property.icon}</div> */}
            <i className={`${property.icon} text-4xl font-medium `} size={80}></i>
            <span className="text-lg font-medium">{property.name}</span>
            <input
              type="radio"
              value={property.name}
              {...register("property", {
                required: "Please select a property type",
              })}
              className="hidden"
              checked={selected === property.name}
              readOnly
            />
          </label>
        ))}
      </div>

      {errors.property && (
        <p className="mt-2 text-red-500">{errors.property.message}</p>
      )}
    </div>
  );
}
