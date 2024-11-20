import { Routes, Route } from "react-router-dom";

import Home from "@/pages/home";
import PostPage from "@/pages/post";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
