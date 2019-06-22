import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

export default class Ejercicio8 extends Component {
    state = {
        salario: 0,
        resultado: ''
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
        let salario = parseFloat(this.state.salario)
        let resultado
        if (salario < 300) {
            resultado = <p>El nuevo salario es: $ {(salario * 1.12).toFixed(2)}</p>
        } else if (300 <= salario && salario <= 500) {
            resultado = <p>El nuevo salario es: $ {(salario * 1.08).toFixed(2)}</p>
        } else if (500 < salario && salario <= 800) {
            resultado = <p>El nuevo salario es: $ {(salario * 1.07).toFixed(2)}</p>
        } else {
            resultado = <p>El nuevo salario es: $ {(salario * 1.06).toFixed(2)}</p>
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
                    <h1 className="w-100 text-center mt-4">Ejercicio 8</h1>
                    <p>Calcular el incremento del salario</p>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Salario del empleado: $</p>
                            </Col>
                            <Col>
                                <Form.Control name="salario" type="number"
                                    value={this.state.salario}
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