import { useEffect, useState } from "react";
import { useApp } from "../../context";
import Select from "react-select";
import { FormGroup, Input, Label, Card, Button } from "reactstrap";
import axios from "axios";

export const AddDispesa = () => {

  const [users, setUsers] = useState([]);

  const getAll = async () => {
    const response = await axios.get("http://localhost:3333/user");
    setUsers(response?.data || []);
  };


  const usuarios = [
    { value: "recorrente", label: "Recorrente" },
    { value: "extraordinaria", label: "Extraordinária" }
  ];

  const { user } = useApp();

  const [data, setData] = useState({});
  const [tipo, setTipo] = useState({});
  const [descricao, setDescricao] = useState("");
  const [total, setTotal] = useState(0);
  const [moradores, setMoradores] = useState([]);
  const [selectedMoradores, setSelectedMoradores] = useState([]);

  const salvar = async () => {
    if (!data) return alert("Campo data é obrigatório!");
    if (!tipo) return alert("Campo tipo é obrigatório!");
    if (!descricao) return alert("Campo descricao é obrigatório!");
    if (!total) return alert("Campo total é obrigatório!");
    if (!selectedMoradores.length) return alert("Campo moradores é obrigatório!");

    for (let i = 0; i < selectedMoradores.length; i++) {
      const response = await axios.post("http://localhost:3333/dispesa", {
        data,
        descricao,
        total: total / selectedMoradores.length,
        usuarioId: selectedMoradores[i]?.value,
      });
    }

    alert("Dispesa criada com sucesso!");
    history.go(-1);
  };
  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    setMoradores(users.filter((e) => {
      return (
        e.tipo == "morador"
      )
    }).map((e) => {
      return ({
        label: e.name,
        value: e.id,
      })
    }))
  }, [users]);
  useEffect(() => {
    console.table(selectedMoradores);
  }, [selectedMoradores]);
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
          <Input type="date" value={data}
            onChange={(e) => setData(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Tipo</Label>
          <Select value={tipo}
            onChange={setTipo} options={usuarios} />
        </FormGroup>
        <FormGroup>
          <Label>Descrição</Label>
          <Input type="textarea" value={descricao}
            onChange={(e) => setDescricao(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Total (Akz)</Label>
          <Input type="number" value={total}
            onChange={(e) => setTotal(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Moradores</Label>
          <Select value={selectedMoradores}
            onChange={setSelectedMoradores} isMulti={true} options={moradores} />
        </FormGroup>
        <FormGroup style={{ marginTop: 10 }}>
          <Button
            style={{
              marginRight: 20,
            }}
            onClick={salvar}
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
