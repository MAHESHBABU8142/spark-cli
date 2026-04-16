import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./features/home/pages/home-page";
import DashboardPage from "./features/dashboard/pages/dashboard-page";
import NotFoundPage from "./features/not-found/pages/not-found-page";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
