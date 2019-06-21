import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

export default class Ejercicio6 extends Component {
    state = {
        operacion: 0,
        valor1: 0,
        valor2: 0,
        resultado: undefined,
        potencias: {
            valSqr: 0,
            resSqr: '',
            valCbe: 0,
            resCbe: ''
        }
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
    }

    calcularOperacion = () => {
        let operacion = parseInt(this.state.operacion)
        let resultado
        switch (operacion) {
            case 1:
                let suma = parseFloat(this.state.valor1) + parseFloat(this.state.valor2)
                resultado = <p>El resultado de la Suma es: {suma}</p>
                break
            case 2:
                let resta = parseFloat(this.state.valor1) - parseFloat(this.state.valor2)
                resultado = <p>El resultado de la Resta es: {resta}</p>
                break
            case 3:
                let multi = parseFloat(this.state.valor1) * parseFloat(this.state.valor2)
                resultado = <p>El resultado de la Multiplicación es: {multi}</p>
                break
            case 4:
                let div = parseFloat(this.state.valor1) / parseFloat(this.state.valor2)
                resultado = <p>El resultado de la Divición es: {div}</p>
                break
            case 5:
                let mod = parseFloat(this.state.valor1) % parseFloat(this.state.valor2)
                resultado = <p>El resultado de el modulo es: {mod}</p>
                break
            case 6:
                let pow = Math.pow(parseFloat(this.state.valor1), parseFloat(this.state.valor2))
                resultado = <p>El resultado de la potencia es: {pow}</p>
                break
            default:
                resultado = <p>Selecciona una operación valida</p>
                break
        }
        this.setState({
            resultado
        })
    }

    handleChangePows = event => {
        const value = event.target.value
        const name = event.target.name
        if (name === 'cuadrada') {
            let resSqr = Math.sqrt(parseFloat(value)).toFixed(2)
            this.setState({
                potencias: {
                    valSqr: value,
                    resSqr,
                    valCbe: this.state.potencias.valCbe,
                    resCbe: this.state.potencias.resCbe
                }
            })
        } else {
            let resCbe = Math.cbrt(parseFloat(value)).toFixed(2)
            this.setState({
                potencias: {
                    valSqr: this.state.potencias.valSqr,
                    resCbe,
                    valCbe: value,
                    resSqr: this.state.potencias.resSqr
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 6</h1>
                    <p>Operaciones Matematicas</p>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col>
                                <Form.Control as={'select'}
                                    className="form-control"
                                    name="operacion"
                                    value={this.state.operacion}
                                    onChange={this.handleChange}
                                >
                                    <option value="0">Selecciona una operación</option>
                                    <option value="1">Sumar</option>
                                    <option value="2">Restar</option>
                                    <option value="3">Multiplicar</option>
                                    <option value="4">Dividir</option>
                                    <option value="5">Modulo</option>
                                    <option value="6">Potencia</option>
                                </Form.Control>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Form.Control name="valor1" value={this.state.valor1} onChange={this.handleChange} />
                            </Col>
                            <Col>
                                <Form.Control name="valor2" value={this.state.valor2} onChange={this.handleChange} />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col xs={{ span: 4, offset: 4 }} >
                                <Button variant="outline-primary" onClick={this.calcularOperacion}>Calcular</Button>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                {this.state.resultado}
                            </Col>
                        </Row>
                        <h4>Raices</h4>
                        <Row className="mb-4">
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Cuadrada</p>
                            </Col>
                            <Col>
                                <Form.Control name="cuadrada" value={this.state.potencias.valSqr} onChange={this.handleChangePows} />
                            </Col>
                            <Col>
                                {this.state.potencias.resSqr}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex align-items-center">
                                <p className="m-0 p-0">Cubica</p>
                            </Col>
                            <Col>
                                <Form.Control name="cubica" value={this.state.potencias.valCbe} onChange={this.handleChangePows} />
                            </Col>
                            <Col>
                                {this.state.potencias.resCbe}
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}