import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/home";
import Articles from "./pages/articles";
import ViewNotePage from "./pages/notes/ViewNotePage";
import AddNotePage from "./pages/notes/AddNotePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="articles">
            <Route index element={<Articles />} />
          </Route>
          <Route path="notes">
            <Route index element={<ViewNotePage />} />
            <Route path="new" element={<AddNotePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
