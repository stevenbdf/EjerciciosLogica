import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default class Ejercicio9 extends Component {
    state = {
        lado1: 0,
        lado2: 0,
        lado3: 0,
        resultado: ''
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
        let lado1 = parseFloat(this.state.lado1)
        let lado2 = parseFloat(this.state.lado2)
        let lado3 = parseFloat(this.state.lado3)
        let resultado
        if (lado1 && lado2 && lado3) {
            if (lado1 === lado2 && lado1 === lado3) {
                resultado = <p>El triangulo es <strong>Equilatero</strong></p>
            } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
                resultado = <p>El triangulo es <strong>Isoceles</strong></p>
            } else {
                resultado = <p>El triangulo es <strong>Escaleno</strong></p>
            }
            this.setState({
                resultado
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 9</h1>
                    <p>Calcular tipo de triangulo</p>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Lado 1: </p>
                            </Col>
                            <Col>
                                <Form.Control name="lado1" type="number"
                                    value={this.state.lado1}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Lado 2: </p>
                            </Col>
                            <Col>
                                <Form.Control name="lado2" type="number"
                                    value={this.state.lado2}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Lado 3: </p>
                            </Col>
                            <Col>
                                <Form.Control name="lado3" type="number"
                                    value={this.state.lado3}
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