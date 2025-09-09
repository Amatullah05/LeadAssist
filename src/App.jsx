import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import 'swiper/css'
import 'swiper/css/free-mode'
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
