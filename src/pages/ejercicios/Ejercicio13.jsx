import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class Ejercicio13 extends Component {
    state = {
        resultado: ''
    }

    handleChange = async (event) => {
        const value = event.target.value
        const name = event.target.name
        await this.setState({
            [name]: value
        })
    }

    calcularPromedio = async () => {
        let notas = []
        let run = true
        while (run) {
            let nota = prompt('Ingresa una nota del 1 al 10, 0 para terminar el programa')
            if (parseFloat(nota) !== 0) {
                notas.push(nota)
            } else {
                run = false
            }
        }
        let sumNotas = 0
        await notas.map(item => sumNotas += parseFloat(item))
        let resultado = <p>El promedio de las <strong>{notas.length}</strong> notas es: <strong>{sumNotas / notas.length}</strong></p>
        this.setState({ resultado })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 13</h1>
                    <p>Calcular promedio de X calificaciones</p>
                    <p>Para iniciar, presiona el boton de abajo, para terminar de calcular ingresa 0</p>
                    <Container className="mt-4">
                        <Row className="mb-4">
                            <Col className="d-flex justify-content-center">
                                <Button variant="outline-primary" onClick={this.calcularPromedio}>Iniciar calculo</Button>
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