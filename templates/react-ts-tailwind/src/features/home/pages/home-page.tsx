import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">app-name</h1>
      <div className="mt-4 flex flex-col gap-5 space-x-4">
        <p>
          This{" "}
          <span className="bg-black/10 px-3 font-semibold text-blue-800">
            react-ts-tailwind
          </span>{" "}
          template is created by spark cli
        </p>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
}
