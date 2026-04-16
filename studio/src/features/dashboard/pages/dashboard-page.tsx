import { Link } from "react-router-dom";
export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
        <Link to="/">Go back to Home</Link>
    </div>
  );
}
