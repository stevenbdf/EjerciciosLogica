import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default class Ejercicio4 extends Component {
    state = {
        persona1: 0,
        persona2: 0,
        persona3: 0,
        porcentaje1: 0,
        porcentaje2: 0,
        porcentaje3: 0,
        totalInvertido: undefined
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
        let st = this.state
        if (st.persona1 && st.persona2 && st.persona3) {
            let totalInvertido = parseFloat(st.persona1) + parseFloat(st.persona2) + parseFloat(st.persona3)
            let porcentaje1 = (parseFloat(st.persona1) * 100) / totalInvertido
            let porcentaje2 = (parseFloat(st.persona2) * 100) / totalInvertido
            let porcentaje3 = (parseFloat(st.persona3) * 100) / totalInvertido

            this.setState({
                totalInvertido,
                porcentaje1,
                porcentaje2,
                porcentaje3
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 4</h1>
                    <p>Porcentaje de inversiones por persona</p>
                    <Row className="d-flex justify-content-between align-items-center mt-4">
                        <Col><p className="my-auto">Inversion 1 persona $</p></Col>
                        <Col><Form.Control type="number" name="persona1" value={this.state.persona1} onChange={this.handleChange} /></Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center mt-4">
                        <Col><p className="my-auto">Inversion 2 persona $</p></Col>
                        <Col><Form.Control type="number" name="persona2" value={this.state.persona2} onChange={this.handleChange} /></Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center mt-4">
                        <Col><p className="my-auto">Inversion 3 persona $</p></Col>
                        <Col><Form.Control type="number" name="persona3" value={this.state.persona3} onChange={this.handleChange} /></Col>
                    </Row>
                    {
                        this.state.totalInvertido
                            ?
                            <div>
                                <p className="mt-4">La inversion total es: <strong>${this.state.totalInvertido.toFixed(2)}</strong></p>
                                <p className="mt-4">% de inversion persona 1: <strong>%{this.state.porcentaje1.toFixed(2)}</strong></p>
                                <p className="mt-4">% de inversion persona 2: <strong>%{this.state.porcentaje2.toFixed(2)}</strong></p>
                                <p className="mt-4">% de inversion persona 3: <strong>%{this.state.porcentaje3.toFixed(2)}</strong></p>
                            </div>
                            :
                            <p className="mt-4">*Llena todos los campos correctamente</p>
                    }
                </Container>
            </div>
        )
    }
}