import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "@/pages/home";
import PostPage from "@/pages/post";
import NotFound from "@/pages/not-found";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
