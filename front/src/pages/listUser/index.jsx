import { FormGroup, Input, Label, Card, Button, Table } from "reactstrap";

export const ListarMorador = () => {
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
                    <h3>Listar Moradores</h3>
                    <hr />
                </FormGroup>
                <FormGroup>
                    <Table
                        striped>
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>
                                    Nome
                                </th>
                                <th>
                                    E-mail
                                </th>
                                <th>
                                    Tipo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    Mark
                                </td>
                                <td>
                                    Otto
                                </td>
                                <td>
                                    @mdo
                                </td>
                                <td>
                                    <Button
                                        onClick={() => (window.location.href = "/admin")}
                                        color="primary"
                                    >
                                        Editar
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() => (window.location.href = "/admin")}
                                        color="danger"
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2
                                </th>
                                <td>
                                    Jacob
                                </td>
                                <td>
                                    Thornton
                                </td>
                                <td>
                                    @fat
                                </td>

                                <td>
                                    <Button
                                        onClick={() => (window.location.href = "/admin")}
                                        color="primary"
                                    >
                                        Editar
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() => (window.location.href = "/admin")}
                                        color="danger"
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3
                                </th>
                                <td>
                                    Larry
                                </td>
                                <td>
                                    the Bird
                                </td>
                                <td>
                                    @twitter
                                </td>
                                <td>
                                    <Button
                                        onClick={() => (window.location.href = "/admin")}
                                        color="primary"
                                    >
                                        Editar
                                    </Button>
                                </td>
                                <td>
                                    <Button
                                        onClick={() => (window.location.href = "/admin")}
                                        color="danger"
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>


                        </tbody>
                    </Table>

                </FormGroup>

                <FormGroup>

                </FormGroup>

                <FormGroup>

                </FormGroup>


            </Card>
        </div>
    )
}