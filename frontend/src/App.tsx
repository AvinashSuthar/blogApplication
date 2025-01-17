import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Auth auth="signin" />} />
          <Route path="/signup" element={<Auth auth="signup" />} />
          <Route path="/blogs" element={<Auth auth="signin" />} />
          <Route path="/blog/:id" element={<Auth auth="signin" />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
