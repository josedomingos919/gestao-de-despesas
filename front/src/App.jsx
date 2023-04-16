import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { MenuAdmin } from "./pages/menuAdmin";
import { AddDispesa } from "./pages/addDispesa";
import { ListarDespesa } from "./pages/listDispesa";
import { MenuMorador } from "./pages/menuMorador";
import { Perfil } from "./pages/perfil";
import { AddUser } from "./pages/addUser";
import { Conta } from "./pages/conta";
import { PagarDispesa } from "./pages/pagarDispesa";
import { ListarMorador } from "./pages/listUser";
import { ListDispesaMorador } from "./pages/listDispesaMorador";
import { useApp } from "./context";

function App() {
  const { user } = useApp();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagar-dispesa" element={<PagarDispesa />} />
        <Route path="/add-usuario" element={<AddUser />} />
        <Route path="/add-dispesa" element={<AddDispesa />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/admin" element={<MenuAdmin />} />
        <Route path="/listar-dispesa" element={<ListarDespesa />} />
        <Route path="/list-dispesa" element={<ListDispesaMorador />} />
        <Route path="/listar-moradores" element={<ListarMorador />} />
        <Route path="/menu-morador" element={<MenuMorador />} />
        <Route path="/perfil/:id" element={<Perfil />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={"Página não encontrada"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
