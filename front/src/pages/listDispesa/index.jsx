import { FormGroup, Input, Label, Card, Button, Table } from "reactstrap";

import Select from "react-select";

export const tipoDespesa = [
  { value: "1", label: "Recorrente" },
  { value: "0", label: "Extraordinária" },
];

export const ListarDespesa = () => {
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
          <h3>Listar Despesa</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Descrição</th>
                <th>Data</th>
                <th>Nome do usuário</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo2</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat2</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </FormGroup>
        <FormGroup>
          <Label>Tipo de Despesa</Label>
          <Select options={tipoDespesa} defaultValue={tipoDespesa[0]} />
        </FormGroup>
        <FormGroup>
          <Button onClick={() => history.go(-1)}>Voltar</Button>
        </FormGroup>
      </Card>
    </div>
  );
};
