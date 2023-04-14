import { FormGroup, Input, Label, Card, Button, Table } from "reactstrap";

export const Conta = () => {
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
          <h3>Conta</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Label>Saldo</Label>
          <Input type="number" />
        </FormGroup>
        <hr />
        <h5 className="p-2">Histórico</h5>
        <FormGroup>
          <Table>
            <tbody>
              <tr>
                <td scope="row">Movimento de dados 445</td>
              </tr>
              <tr>
                <td scope="row">Movimento de dados 445</td>
              </tr>
              <tr>
                <td scope="row">Movimento de dados 445</td>
              </tr>
              <tr>
                <td scope="row">Movimento de dados 445</td>
              </tr>
            </tbody>
          </Table>
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
