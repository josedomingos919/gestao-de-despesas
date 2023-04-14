import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { MenuAdmin } from "./pages/menuAdmin";
import { AddDispesa } from "./pages/addDispesa";
import { MenuMorador } from "./pages/menuMorador";
import { Perfil } from "./pages/perfil";
import { AddUser } from "./pages/addUser";
import { Conta } from "./pages/conta";
import { PagarDispesa } from "./pages/pagarDispesa";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pagar-dispesa" element={<PagarDispesa />} />
        <Route path="/add-usuario" element={<AddUser />} />
        <Route path="/add-dispesa" element={<AddDispesa />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/admin" element={<MenuAdmin />} />
        <Route path="/menu-morador" element={<MenuMorador />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={() => "Página não encontrada"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
