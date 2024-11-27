import { BrowserRouter, Routes, Route } from "react-router";

import Home from "@/pages/home";
import PostPage from "@/pages/post";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
