import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}