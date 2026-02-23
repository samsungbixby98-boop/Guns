import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🛒 Gunzon Admin</h2>
      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Feedback</Link>
    </div>
  );
}