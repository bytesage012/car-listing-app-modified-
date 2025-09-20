import React, { useState } from "react";

function CarForm({ onCarAdded }) {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, value)
    );
    if (image) data.append("image", image);

    try {
      const res = await fetch("/api/cars", {
        method: "POST",
        body: data,
      });

      let result;
      try {
        result = await res.json(); // try to parse JSON
      } catch {
        result = {}; // backend didn’t return JSON
      }

      if (res.ok) {
        alert(result.message || "✅ Car added!");
        
        // 🔄 Refresh parent list if provided
        if (typeof onCarAdded === "function") {
          onCarAdded();
        }

        // Reset form
        setFormData({
          make: "",
          model: "",
          year: "",
          price: "",
          description: "",
        });
        setImage(null);
      } else {
        alert(result.error || "❌ Failed to add car");
      }
    } catch (err) {
      console.error("Form error:", err);
      alert("❌ Network or server error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded-lg mb-6"
    >
      <h2 className="text-lg font-semibold mb-4">Add a Car</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="make"
          placeholder="Make"
          value={formData.make}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={formData.model}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full mt-4"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
        className="mt-4"
      />
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default CarForm;

