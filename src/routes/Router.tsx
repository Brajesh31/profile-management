import { Routes, Route, Navigate } from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import FormPage from "../pages/FormPage";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile-form" element={<FormPage />} />
      <Route path="/" element={<Navigate to="/profile-form" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
