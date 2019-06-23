import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default class Ejercicio10 extends Component {
    state = {
        llantas: 0,
        resultado: ''
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
        let llantas = parseInt(this.state.llantas)
        let resultado
        if (llantas <= 4) {
            resultado = <p>El total es: <strong>$ {llantas * 150}</strong></p>
        } else if (llantas >= 5 && llantas <= 10) {
            resultado = <p>El total es: <strong>$ {llantas * 125}</strong></p>
        } else {
            resultado = <p>El total es: <strong>$ {llantas * 100}</strong></p>
        }
        this.setState({
            resultado
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 10</h1>
                    <p>Calcular el costo de las llantas</p>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Cantidad de llantas compradas</p>
                            </Col>
                            <Col>
                                <Form.Control name="llantas" type="number"
                                    value={this.state.llantas}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                {this.state.resultado}
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}