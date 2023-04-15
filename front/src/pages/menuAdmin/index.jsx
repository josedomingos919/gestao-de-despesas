import {
  FormGroup,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "reactstrap";
import { useApp } from "../../context";

export const MenuAdmin = () => {
  const { user } = useApp();

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
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
          <h3>Menu</h3>
          <hr />
        </FormGroup>

        <ListGroup>
          <ListGroupItem>
            <a href="/add-dispesa">Criar Dispesas</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/listar-dispesa">Listar Dispesas</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/add-usuario">Criar Utilizador</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/listar-moradores">Listar Utilizador</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/perfil">Meu Perfil</a>
          </ListGroupItem>
        </ListGroup>

        <Row className="mt-3">
          <Col>
            <Button onClick={logout} color="danger">
              Sair
            </Button>
          </Col>
          <Col>
            <div style={{ textAlign: "right" }}>
              {user?.name} | {user?.email}
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
