import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default class Ejercicio14 extends Component {
    state = {
        notas: [0, 0, 0, 0, 0],
        style: ['white', 'white', 'white', 'white', 'white']
    }

    handleChange = async (event) => {
        let { value, name } = event.target
        let notas = await this.state.notas.map((it, ix) => ix === parseInt(name) ? parseInt(value) : it)
        await this.setState({ notas })
        let mayor = -1, menor = 1000000000000
        let mayorI = 0, menorI = 0
        await this.state.notas.map((it, ix) => { if (it > mayor) { mayor = it; mayorI = ix } if (it < menor) { menor = it; menorI = ix } })
        let style = await this.state.style.map((it, ix) => { if (ix === mayorI) { return 'green' } else if (ix === menorI) { return 'red' } else { return 'white' } })
        this.setState({ style })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 14</h1>
                    <p>Calcula nota mayor y menor de 5 estudiantes</p>
                    <Container className="mt-4">
                        {this.state.notas.map((item, index) =>
                            <Row key={index} className="mb-2 py-2" style={{ backgroundColor: this.state.style[index] }}>
                                <Col className="d-flex align-items-center">
                                    <p className="m-0 p-0">Alumno {index + 1}</p>
                                </Col>
                                <Col>
                                    <Form.Control name={index} type="number"
                                        value={this.state.notas[index]}
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </Row>)}
                        <Row className="mb-2 py-2">
                            <Col>
                                <p>La nota mayor se representa con color <strong style={{ color: 'green', }}>verde</strong>
                                    , y la menor con color <strong style={{ color: 'red', }}> rojo</strong>
                                </p>
                                <small>*Si hay notas iguales, se define la primera nota que concuerde ya sea mayor o menor</small>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}