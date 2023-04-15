import { useEffect, useState } from "react";
import { FormGroup, Card, Button, Table } from "reactstrap";

import axios from "axios";

export const ListarMorador = () => {
  const [users, setUsers] = useState([]);

  const getAll = async () => {
    const response = await axios.get("http://localhost:3333/user");

    setUsers(response?.data || []);
  };

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza de que quer eliminar um item ?")) return;

    const response = await axios.delete("http://localhost:3333/user/" + id);

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
          maxWidth: 700,
          width: "100%",
          marginTop: 40,
          background: "#F1F3F4",
        }}
        className="p-3"
      >
        <FormGroup>
          <h3>Listar Utilizadores</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {users.length ? (
                users.map((user) => {
                  return (
                    <tr>
                      <th scope="row">{user?.id}</th>
                      <td>{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.tipo}</td>
                      <td>
                        <Button
                          onClick={() =>
                            (window.location.href = "/perfil/" + user?.id)
                          }
                          color="primary"
                        >
                          Editar
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={() => handleDelete(user?.id)}
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
                    Nenhum usuário encontrado!
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
