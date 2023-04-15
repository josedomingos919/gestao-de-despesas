import { FormGroup, Input, Label, Card, Button, Table } from "reactstrap";

import Select from "react-select";
import axios from "axios";
import { useState, useEffect } from "react";
import { useApp } from "../../context";

export const ListarDespesa = () => {
  const [dispesas, setDispesas] = useState([]);

  const getAll = async () => {
    const response = await axios.get("http://localhost:3333/dispesa");

    setDispesas(response?.data || []);
  };

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza de que quer eliminar um item ?")) return;

    const response = await axios.delete("http://localhost:3333/dispesa/" + id);

    if (response?.status == 200) {
      alert("Eliminado com sucesso!");
    } else {
      alert("Falha ao eliminar, tente mais tarde!");
    }

    getAll();
  };

  useEffect(() => {
    getAll();
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
                <th>Tipo</th>
                <th>Morador</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {dispesas.length ? (
                dispesas.map((dispesa) => {
                  return (
                    <tr>
                      <th scope="row">{dispesa?.id}</th>
                      <td>{dispesa?.descricao}</td>
                      <td>{dispesa?.data}</td>
                      <td>{dispesa?.tipo}</td>
                      <td>{dispesa?.usuario?.name}</td>
                      <td>{dispesa?.total}</td>

                      <td>
                        <Button
                          onClick={() => handleDelete(dispesa?.id)}
                          color="danger"
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    Nenhuma dispesa encontrada!
                  </td>
                </tr>
              )}
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
