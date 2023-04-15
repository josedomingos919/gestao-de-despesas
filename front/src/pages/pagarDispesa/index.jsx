import { FormGroup, Input, Label, Card, Button } from "reactstrap";
import { useEffect, useState } from "react";
import { useApp } from "../../context";

import Select from "react-select";
import axios from "axios";

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
  const { user } = useApp();
  const [dispesas, setDispesas] = useState([]);
  const [dispesa, setDispesa] = useState({});
  const [pagamento, setPagamento] = useState({});
  const [valor, setValor] = useState(0);

  const getAllDispesas = async () => {
    const response = await axios.get("http://localhost:3333/dispesa");

    setDispesas(response?.data.filter((e) => e?.usuarioId == user?.id) || []);
  };

  const [conta, setConta] = useState({});

  const getAccountData = async () => {
    const response = await axios.get("http://localhost:3333/conta/" + user?.id);
    setConta(response?.data || {});
  };

  const salvar = async () => {
    if (!user?.id) return alert("Nenhum user encontrado!");
    if (!dispesa?.value) return alert("Campo dispesa é obrigatório!");
    if (!pagamento?.value) return alert("Campo pagamento é obrigatório!");

    const saldoConta = parseFloat(user?.Conta?.[0]?.saldo);
    let saldo = 0;

    if (pagamento?.value == "Cash") {
      if (valor < dispesa?.total) {
        return alert("Valor a pagar insuficiente!");
      }

      saldo = valor - dispesa?.total;
    } else {
      console.log({
        saldoConta,
        dispesa: dispesa?.total,
      });
      if (conta?.saldo < dispesa?.total) {
        return alert("Valor na conta é insuficiente!");
      }

      saldo = conta?.saldo - dispesa?.total;
    }

    const response = await axios.delete(
      "http://localhost:3333/dispesa/" + dispesa?.id
    );

    if (response?.status === 200) {
      alert("Pagamento feito com sucesso!");

      if (pagamento?.value != "Cash") {
        await axios.put("http://localhost:3333/conta", {
          ...conta,
          saldo,
        });
      }

      history.go(-1);
    }
  };

  useEffect(() => {
    if (user?.id) {
      getAccountData();
      getAllDispesas();
    }
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
          <h3>Pagar Dispesa</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Label>Dispesa</Label>
          <Select
            onChange={setDispesa}
            value={dispesa}
            options={dispesas.map((e) => ({
              ...e,
              label: e?.descricao,
              value: e?.id,
            }))}
          />
        </FormGroup>
        <FormGroup>
          <Label>Total (Akz)</Label>
          <Input value={dispesa?.total} disabled={true} type="number" />
        </FormGroup>
        <FormGroup>
          <Label>Método de Pagamento</Label>
          <Select
            value={pagamento}
            onChange={setPagamento}
            options={metodoPagamento}
          />
        </FormGroup>
        {pagamento?.value == "Cash" ? (
          <FormGroup>
            <Label>Valor (Akz)</Label>
            <Input
              value={valor}
              type="number"
              onChange={(e) => setValor(e?.target?.value)}
            />
          </FormGroup>
        ) : null}

        <FormGroup>
          <Button onClick={salvar} color="success">
            Salvar
          </Button>
          <Button
            style={{
              marginLeft: 10,
            }}
            onClick={() => history.go(-1)}
          >
            Voltar
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
};
