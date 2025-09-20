// src/pages/CarListPage.jsx
import React, { useEffect, useState, useCallback } from "react";
import CarList from "../components/CarList";

function CarListPage() {
  const [cars, setCars] = useState([]);

  // useCallback prevents unnecessary re-creations of fetchCars
  const fetchCars = useCallback(async () => {
    try {
      const res = await fetch("/api/cars");
      const data = await res.json();
      setCars(data);
    } catch (err) {
      console.error("Error fetching cars:", err);
    }
  }, []);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
          Available Cars
        </h1>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <CarList cars={cars} />
        </div>
      </div>
    </div>
  );
}

export default CarListPage;

