import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { Toaster } from "sonner";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Auth auth="signin" />} />
          <Route path="/signup" element={<Auth auth="signup" />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
