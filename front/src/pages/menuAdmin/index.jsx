import {
  FormGroup,
  Input,
  Label,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "reactstrap";

export const MenuAdmin = () => {
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
            <a href="">Criar Moradores</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="">Listar Moradores</a>
          </ListGroupItem>
          <ListGroupItem>
            <a href="">Meu Perfil</a>
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
            <div style={{ textAlign: "right" }}>José Ndonge</div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
