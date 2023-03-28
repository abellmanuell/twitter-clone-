import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Modules
import Layout from "./module/Layout";
import Home from "./module/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Page not found.</p>
    </div>
  );
}
