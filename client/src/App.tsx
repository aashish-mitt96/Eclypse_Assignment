import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Checkout from "./pages/Checkout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/checkout" element={<Checkout/>} />

      </Routes>
  );
}

export default App;
