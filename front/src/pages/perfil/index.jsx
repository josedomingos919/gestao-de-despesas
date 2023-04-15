import { FormGroup, Input, Label, Card, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useApp } from "../../context";

import axios from "axios";
import Select from "react-select";

export const tipoUsuario = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "morador",
    label: "Morador",
  },
];

export const Perfil = () => {
  const { user, setUser } = useApp();
  const { id } = useParams();

  const [tipo, setTipo] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const isAdmin = () => {
    return user?.tipo == tipoUsuario[0]?.value;
  };

  const handleSave = async () => {
    if (!email) return alert("Campo email é obrigatório!");
    if (!senha) return alert("Campo senha é obrigatório!");
    if (!tipo) return alert("Campo tipo é obrigatório!");
    if (!name) return alert("Campo nome é obrigatório!");

    let response = {};

    try {
      const userObj = {
        id,
        email,
        name,
        senha,
        tipo: tipo?.value,
      };

      response = await axios.put("http://localhost:3333/user", userObj);
    } catch (error) {
      alert("Falha ao salvar usuário, tente mais tarde!");
      return;
    }

    if (response?.status === 200) {
      alert("Usuário salvo com sucesso!");

      if (user?.id === id) {
        localStorage.setItem("user", userObj);
        setUser(userObj);
      }

      history.go(-1);
    } else {
      alert("Falha ao salvar usuário, tente mais tarde!");
    }
  };

  const getUser = async () => {
    const response = await axios.get("http://localhost:3333/user/" + id);

    if (response?.status == 200) {
      const user = response.data;

      setTipo(tipoUsuario.find((e) => user?.tipo == e.value));
      setName(user?.name);
      setEmail(user?.email);
      setSenha(user?.senha);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
          <h3>Perfil</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Label>Nome</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label>Tipo</Label>
          <Select
            value={tipo}
            onChange={setTipo}
            options={tipoUsuario}
            isDisabled={!isAdmin()}
          />
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
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={handleSave} color="success">
            Salvar
          </Button>
          <Button style={{ marginLeft: 10 }} onClick={() => history.go(-1)}>
            Voltar
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
};
