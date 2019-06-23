import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default class Ejercicio12 extends Component {
    state = {
        numeros: 0,
        resultado: ''
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
    }

    calcularSuma = () => {
        let numeros = parseInt(this.state.numeros)
        let sumaI = 0, sumaP = 0
        for (let i = 1; i <= numeros; i++) {
            if (i % 2) {
                sumaI += i
            } else {
                sumaP += i
            }
        }
        let resultado = <p>La suma de los pares es: {sumaP} y la de los impares es: {sumaI}</p>
        this.setState({ resultado })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 12</h1>
                    <p>Suma de numeros pares e impares</p>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Ingresa cuantos numeros</p>
                            </Col>
                            <Col>
                                <Form.Control name="numeros" type="number"
                                    value={this.state.numeros}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={{ span: 4, offset: 4 }}>
                                <Button variant="outline-primary" onClick={this.calcularSuma}>Calcular</Button>
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