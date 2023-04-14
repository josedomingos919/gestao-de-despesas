import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { MenuAdmin } from "./pages/menuAdmin";
import { AddDispesa } from "./pages/addDispesa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-dispesa" element={<AddDispesa />} />
        <Route path="/admin" element={<MenuAdmin />} />
        <Route path="*" element={() => "Página não encontrada"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
