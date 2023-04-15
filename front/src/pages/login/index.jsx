import axios from "axios";

import { useState } from "react";
import { FormGroup, Input, Label, Card, Button } from "reactstrap";
import { tipoUsuario } from "../addUser";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = async () => {
    if (!email) return alert("Campo email é obrigatório!");
    if (!password) return alert("Campo senha é obrigatório!");

    const response = await axios.post("http://localhost:3333/user/login", {
      email,
      password,
    });

    if (response.status === 201) {
      localStorage.setItem("user", JSON.stringify(response?.data));

      if (response.data.tipo == tipoUsuario[0].value)
        window.location.href = "/admin";
      else window.location.href = "/menu-morador";
    } else {
      alert("Usuário ou senha incorrecta tente mais tarde!");
    }
  };

  return (
    <div className="center-element">
      <Card
        style={{
          maxWidth: 600,
          width: "100%",
          marginTop: 40,
          background: "#F1F3F4",
        }}
        className="p-3"
      >
        <FormGroup>
          <h3>Login</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label>Senha</Label>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={handleSave} color="success">
            Entrar
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
};
