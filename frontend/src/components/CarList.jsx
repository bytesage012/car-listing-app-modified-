import React from "react";

function CarList({ cars }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          {car.image && (
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h3 className="font-bold text-lg">
              {car.make} {car.model} ({car.year})
            </h3>
            <p className="text-gray-600 mb-2">${car.price}</p>
            <p className="text-sm text-gray-700">{car.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarList;
