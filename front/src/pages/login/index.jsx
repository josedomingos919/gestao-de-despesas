import { FormGroup, Input, Label, Card, Button } from "reactstrap";

export const Login = () => {
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
          <h3>Login</h3>
          <hr />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input id="exampleEmail" name="email" placeholder="" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Senha</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder=""
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={() => (window.location.href = "/admin")}
            color="success"
          >
            Entrar
          </Button>
        </FormGroup>
      </Card>
    </div>
  );
};
