import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class Ejercicio18 extends Component {
    state = {
        resultado: ''
    }

    calcularNotas = async () => {
        let run = 0, numeros = [], total = 0
        while (run < 10) {
            let numReal = prompt('Ingresa una nota 1 al 10')
            numReal = parseFloat(numReal)
            numeros.push(numReal)
            total += numReal
            run++
        }
        let prom = total / 10
        let pasaron = 0
        await numeros.map(item => item >= 6 && pasaron++)
        let resultado =
            <div>
                <p>El promedio general del grupo es: <strong>{prom}</strong></p>
                <p>El # de estudiantes aprobados son: <strong>{pasaron}</strong></p>
                <p>Porcentaje de estudiantes aprobados %: <strong>{pasaron * 10}</strong></p>
            </div>
        this.setState({ resultado })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 18</h1>
                    <p>Examen de becas (10 estudiantes) </p>
                    <Container className="mt-4">
                        <Row className="mb-2 py-2">
                            <Col className="d-flex justify-content-center">
                                <Button variant="outline-primary" onClick={this.calcularNotas}>Calcular Notas</Button>
                            </Col>
                        </Row>
                        <Row className="mb-2 py-2">
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