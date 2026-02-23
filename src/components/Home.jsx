import StatsCard from "../components/StatsCard";

export default function Home() {
  return (
    <div className="stats-grid">
      <StatsCard title="Total Products" value="4" />
      <StatsCard title="Revenue" value="₹45,750" />
    </div>
  );
}