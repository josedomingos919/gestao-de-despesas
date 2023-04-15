import { FormGroup, Input, Label, Card, Button } from "reactstrap";

import Select from "react-select";

export const AddDispesa = () => {
  const salvar = () => {};

  const usuarios = [
    { value: "chocolate", label: "José Ndonge" },
    { value: "strawberry", label: "Rui Malemba" },
    { value: "vanilla", label: "Julia Camana" },
  ];

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
          <h3>Dispesa</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Label>Data</Label>
          <Input type="date" />
        </FormGroup>
        <FormGroup>
          <Label>Tipo</Label>
          <Select isMulti={true} options={usuarios} />
        </FormGroup>
        <FormGroup>
          <Label>Descrição</Label>
          <Input type="textarea" />
        </FormGroup>
        <FormGroup>
          <Label>Total (Akz)</Label>
          <Input type="number" />
        </FormGroup>
        <FormGroup>
          <Label>Moradores</Label>
          <Select isMulti={true} options={usuarios} />
        </FormGroup>
        <FormGroup style={{ marginTop: 10 }}>
          <Button
            style={{
              marginRight: 20,
            }}
            onClick={() => salvar()}
            color="success"
          >
            Salvar
          </Button>
          <Button onClick={() => history.go(-1)} color="danger">
            Cancelar
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
};
