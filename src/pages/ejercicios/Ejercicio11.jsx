import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default class Ejercicio11 extends Component {
    state = {
        catEmpleado: 0,
        horasExtra: 0,
        resultado: ''
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
        let catEmpleado = parseFloat(this.state.catEmpleado)
        let horasExtra = parseFloat(this.state.horasExtra)
        let resultado
        if (catEmpleado && horasExtra) {
            if (horasExtra > 30) {
                horasExtra = 30
            }
            if (catEmpleado === 1) {
                resultado = <p>Total a pagar es de: <strong>$ {horasExtra * 40}</strong></p>
            } else if (catEmpleado === 2) {
                resultado = <p>Total a pagar es de: <strong>$ {horasExtra * 50}</strong></p>
            } else if (catEmpleado === 3) {
                resultado = <p>Total a pagar es de: <strong>$ {horasExtra * 85}</strong></p>
            } else {
                resultado = <p>Los empleados con categoria mayor a 3 no reciben este beneficio</p>
            }
            this.setState({ resultado })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 11</h1>
                    <p>Calcular el pago de horas extras de un empleado</p>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Categoria del empleado</p>
                            </Col>
                            <Col>
                                <Form.Control name="catEmpleado" type="number"
                                    value={this.state.catEmpleado}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Horas extra</p>
                            </Col>
                            <Col>
                                <Form.Control name="horasExtra" type="number"
                                    value={this.state.horasExtra}
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