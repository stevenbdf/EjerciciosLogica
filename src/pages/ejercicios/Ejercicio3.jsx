import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Form, Row, Col } from 'react-bootstrap'

export default class Ejercicio3 extends Component {
    state = {
        tareas: 0,
        portafolio: 0,
        laboratorio: 0,
        examen: 0,
        promedioFinal: undefined
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
        let st = this.state
        if (st.tareas && st.portafolio && st.laboratorio && st.examen) {
            let promedioFinal = (st.tareas * 0.2) + (st.portafolio * 0.25) + (st.laboratorio * 0.25) + (st.examen * 0.3)
            this.setState({
                promedioFinal
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 3</h1>
                    <p>Calcula tu promedio escolar</p>
                    <Row className="d-flex justify-content-between align-items-center mt-4">
                        <Col><p className="my-auto">Tareas 20%</p></Col>
                        <Col><Form.Control name="tareas" value={this.state.tareas} onChange={this.handleChange} /></Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center mt-4">
                        <Col><p className="my-auto">Portafolio 25%</p></Col>
                        <Col><Form.Control name="portafolio" value={this.state.portafolio} onChange={this.handleChange} /></Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center mt-4">
                        <Col><p className="my-auto">Laboratorio 25%</p></Col>
                        <Col><Form.Control name="laboratorio" value={this.state.laboratorio} onChange={this.handleChange} /></Col>
                    </Row>
                    <Row className="d-flex justify-content-between align-items-center mt-4">
                        <Col><p className="my-auto">Examen 20%</p></Col>
                        <Col><Form.Control name="examen" value={this.state.examen} onChange={this.handleChange} /></Col>
                    </Row>
                    {
                        this.state.promedioFinal
                            ?
                            <p className="mt-4">Tu promedio final es: <strong>{this.state.promedioFinal.toFixed(2)}</strong></p>
                            :
                            <p className="mt-4">*Llena todos los campos correctamente</p>
                    }
                </Container>
            </div>
        )
    }
}