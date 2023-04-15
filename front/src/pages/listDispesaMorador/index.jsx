import { FormGroup, Card, Button, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { useApp } from "../../context";

import axios from "axios";

export const tipoDespesa = [
  { value: "1", label: "Recorrente" },
  { value: "0", label: "Extraordinária" },
];

export const ListDispesaMorador = () => {
  const { user } = useApp();
  const [dispesas, setDispesas] = useState([]);

  const getAll = async () => {
    const response = await axios.get("http://localhost:3333/dispesa");

    setDispesas(response?.data.filter((e) => e?.usuarioId == user?.id) || []);
  };

  useEffect(() => {
    if (user?.id) getAll();
  }, [user]);

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
          <h3>Listar Dispesa</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Descrição</th>
                <th>Data</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {dispesas.map((e) => {
                return (
                  <tr>
                    <th scope="row">{e?.id}</th>
                    <td>{e?.descricao}</td>
                    <td>{new Date(e?.data).toLocaleDateString()}</td>
                    <td>{e?.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </FormGroup>
        <FormGroup>
          <Button onClick={() => history.go(-1)}>Voltar</Button>
        </FormGroup>
      </Card>
    </div>
  );
};
