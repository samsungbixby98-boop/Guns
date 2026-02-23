// src/components/SalesChart.jsx
import { salesData } from "../data/salesData";

const SalesChart = () => {
  return (
    <div className="product-card">
      <h3>Monthly Sales (Bar Chart)</h3>

      <div style={{ display: "flex", alignItems: "flex-end", gap: "10px", height: "200px" }}>
        {salesData.map((d) => (
          <div key={d.month}>
            <div
              style={{
                height: d.sales / 50,
                width: "30px",
                background: "#2563eb",
                borderRadius: "5px",
              }}
            ></div>
            <p>{d.month}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;