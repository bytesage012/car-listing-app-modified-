import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCar from "./pages/AddCar";
import CarListPage from "./pages/CarListPage";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 mb-4">
        <Link to="/" className="mr-4 font-semibold">Car List</Link>
        <Link to="/add" className="font-semibold">Add Car</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CarListPage />} />
        <Route path="/add" element={<AddCar />} />
      </Routes>
    </Router>
  );
}

export default App;

