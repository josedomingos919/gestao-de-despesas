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

export const MenuMorador = () => {
  const { user } = useApp();

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
            <a href="/conta">Conta</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/list-dispesa">Dispesas</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="/pagar-dispesa">Pagar dispesa</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href={"/perfil/" + user?.id}>Meu Perfil</a>
          </ListGroupItem>
        </ListGroup>
        <Row className="mt-3">
          <Col>
            <Button
              onClick={() => (window.location.href = "/login")}
              color="danger"
            >
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
