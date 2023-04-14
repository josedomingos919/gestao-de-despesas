import { FormGroup, Input, Label, Card, Button } from "reactstrap";

import Select from "react-select";

export const metodoPagamento = [
  {
    label: "Conta",
    value: "Conta",
  },
  {
    label: "Cash",
    value: "Cash",
  },
];

export const PagarDispesa = () => {
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
          <h3>Pagar Dispesa</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Label>Dispesa</Label>
          <Select options={[]} />
        </FormGroup>
        <FormGroup>
          <Label>Total (Akz)</Label>
          <Input disabled={true} type="number" />
        </FormGroup>
        <FormGroup>
          <Label>Método de Pagamento</Label>
          <Select options={metodoPagamento} />
        </FormGroup>
        <FormGroup>
          <Label>Valor (Akz)</Label>
          <Input type="number" />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={() => (window.location.href = "/menu-morador")}
            color="success"
          >
            Salvar
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
};
