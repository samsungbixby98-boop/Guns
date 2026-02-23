import StatsCards from "../components/StatsCard";
import SalesChart from "../components/SalesChart";

export default function Home() {
  return (
    <div>
      <h2>Dashboard</h2>
      <StatsCards />
      <SalesChart />
    </div>
  );
}