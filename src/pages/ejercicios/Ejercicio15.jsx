import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class Ejercicio15 extends Component {
    state = {
        resultado: ''
    }

    calcularNotas = async () => {
        let r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0
        let run = true
        while (run) {
            let nota = prompt('Ingresa una nota del 1 al 10, 0 para terminar el programa')
            if (parseFloat(nota) !== 0) {
                nota = parseFloat(nota)
                if (1 <= nota && nota <= 3.9) {
                    r1++
                } else if (4 <= nota && nota <= 5.9) {
                    r2++
                } else if (6 <= nota && nota <= 7.9) {
                    r3++
                } else if (8 <= nota && nota <= 8.9) {
                    r4++
                } else if (9 <= nota && nota <= 10) {
                    r5++
                }
            } else {
                run = false
            }
        }

        let resultado =
            <div>
                <p>1 - 3.9 hay : {r1} notas</p>
                <p>4 - 5.9 hay : {r2} notas</p>
                <p>6 - 7.9 hay : {r3} notas</p>
                <p>8 - 8.9 hay : {r4} notas</p>
                <p>9 - 10. hay : {r5} notas</p>
            </div>
        this.setState({ resultado })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 15</h1>
                    <p>Rango de notas </p>
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