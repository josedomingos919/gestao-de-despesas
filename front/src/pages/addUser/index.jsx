import { FormGroup, Input, Label, Card, Button } from "reactstrap";

import axios from "axios";
import Select from "react-select";

import { useState } from "react";
import { useApp } from "../../context";

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

export const AddUser = () => {
  const { user } = useApp();

  const [tipo, setTipo] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSave = async () => {
    if (!email) return alert("Campo email é obrigatório!");
    if (!senha) return alert("Campo senha é obrigatório!");
    if (!tipo) return alert("Campo tipo é obrigatório!");
    if (!name) return alert("Campo nome é obrigatório!");

    const response = await axios.post("http://localhost:3333/user", {
      email,
      name,
      senha,
      tipo: tipo?.value,
    });

    if (response?.status === 201) {
      alert("Usuário criado com sucesso!");
      history.go(-1);
    } else {
      alert("Falha ao criar usuário, tente mais tarde!");
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
          <h3>Adicionar Usuário</h3>
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
          <Select value={tipo} onChange={setTipo} options={tipoUsuario} />
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
