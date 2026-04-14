import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex h-screen flex-col items-center pt-40">
      <h1 className="text-4xl font-bold">Not Found</h1>
      <Link to="/">Go to Home</Link>
    </section>
  );
}
