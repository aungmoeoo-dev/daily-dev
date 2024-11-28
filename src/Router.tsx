import { BrowserRouter, Route, Routes } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/home";
import Articles from "./pages/articles";
import Notes from "./pages/notes";

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
            <Route index element={<Notes />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
