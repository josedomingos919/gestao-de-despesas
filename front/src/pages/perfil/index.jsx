import { FormGroup, Input, Label, Card, Button } from "reactstrap";

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
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>Tipo</Label>
          <Select options={tipoUsuario} />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" />
        </FormGroup>
        <FormGroup>
          <Label>Senha</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder=""
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={() => (window.location.href = "/admin")}
            color="success"
          >
            Salvar
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
};
