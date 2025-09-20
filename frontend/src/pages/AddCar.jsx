// src/pages/AddCar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import CarForm from "../components/CarForm";

function AddCar() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Add a New Car
        </h1>
        <CarForm
          onCarAdded={() => {
            // ✅ Redirect back to car list page
            navigate("/");
          }}
        />
      </div>
    </div>
  );
}

export default AddCar;

