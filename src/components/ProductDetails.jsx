import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  return (
    <div className="product-card">
      <h2>📦 Product Details</h2>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
    </div>
  );
};

export default ProductDetails;