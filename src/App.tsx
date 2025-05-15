
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Windows95App from "./components/Windows95App";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Windows95App />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
