import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "..//pages/Home";
import Catalog from "..//pages/Catalog";
import ProductDetail from "..//pages/ProductDetail";
import Checkout from "..//pages/Checkout";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
