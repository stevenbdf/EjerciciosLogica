import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

export default class Ejercicio7 extends Component {
    state = {
        distancia: 0,
        dias: 0,
        resultado: ''
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
    }

    calcularBoleto = () => {
        let distancia = parseFloat(this.state.distancia)
        let dias = parseFloat(this.state.dias)
        let resultado
        if (dias > 10 && distancia > 300) {
            resultado = <p>El precio del boleto (ida y vuelta) es: $ {((distancia * 0.15) * 0.70).toFixed(2)}</p>
        } else {
            resultado = <p>El precio del boleto (ida y vuelta) es: $ {(distancia * 0.15).toFixed(2)}</p>
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
                    <h1 className="w-100 text-center mt-4">Ejercicio 7</h1>
                    <p>Calcular el precio del boleto de ida y vuelta en autobús</p>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Distancia ida y vuelta (Km.)</p>
                            </Col>
                            <Col>
                                <Form.Control name="distancia" type="number"
                                    value={this.state.distancia}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Estancia (dias)</p>
                            </Col>
                            <Col>
                                <Form.Control name="dias" type="number"
                                    value={this.state.dias}
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={{ span: 4, offset: 4 }} >
                                <Button variant="outline-primary" onClick={this.calcularBoleto}>Calcular</Button>
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