import { useEffect, useState } from "react";
import { FormGroup, Input, Label, Card, Button } from "reactstrap";
import { useApp } from "../../context";

import axios from "axios";

export const Conta = () => {
  const { user } = useApp();

  const [conta, setConta] = useState({});
  const [saldo, setSaldo] = useState(0);

  const getAccountData = async () => {
    const response = await axios.get("http://localhost:3333/conta/" + user?.id);

    setSaldo(response?.data?.saldo || 0);
    setConta(response?.data || {});
  };

  useEffect(() => {
    if (user?.id) getAccountData();
  }, [user]);

  const handleSave = async () => {
    const response = await axios.put("http://localhost:3333/conta", {
      ...conta,
      saldo,
    });

    if (response.status === 200) {
      alert("Saldo atualizado com sucesso!");
      history.go(-1);
    } else {
      alert("Falha ao atualizar o saldo!");
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
          <h3>Conta</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Label>Saldo</Label>
          <Input
            type="number"
            value={saldo}
            onChange={(e) => setSaldo(e?.target?.value)}
          />
        </FormGroup>
        {/* <hr />
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
        </FormGroup> */}
        <FormGroup>
          <Button onClick={handleSave} color="success">
            Salvar
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
};
