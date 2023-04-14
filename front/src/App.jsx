import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { MenuAdmin } from "./pages/menuAdmin";
import { AddDispesa } from "./pages/addDispesa";
import { ListarDespesa } from "./pages/listDispesa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-dispesa" element={<AddDispesa />} />
        <Route path="/admin" element={<MenuAdmin />} />
        <Route path="/listar-dispesa" element={<ListarDespesa />} />
        <Route path="*" element={() => "Página não encontrada"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
