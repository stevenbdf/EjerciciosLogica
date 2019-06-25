import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class Ejercicio16 extends Component {
    state = {
        resultado: ''
    }

    calcularNotas = async () => {
        let frq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let run = true
        while (run) {
            let nota = prompt('Ingresa una nota del 1 al 10, 0 para terminar el programa')
            if (parseFloat(nota) !== 0) {
                nota = parseFloat(nota)
                switch (nota) {
                    case 1: frq[0]++; break
                    case 2: frq[1]++; break
                    case 3: frq[2]++; break
                    case 4: frq[3]++; break
                    case 5: frq[4]++; break
                    case 6: frq[5]++; break
                    case 7: frq[6]++; break
                    case 8: frq[7]++; break
                    case 9: frq[8]++; break
                    case 10: frq[9]++; break
                    default: console.log('Error')
                }
            } else {
                run = false
            }
        }

        let menor = 10000, menorI = 0
        frq.map((item, index) => (item < menor) && (menor = item, menorI = index))
        let resultado =
            <div>
                <p>Nota 1 : hay {frq[0]}</p>
                <p>Nota 2 : hay {frq[1]}</p>
                <p>Nota 3 : hay {frq[2]}</p>
                <p>Nota 4 : hay {frq[3]}</p>
                <p>Nota 5 : hay {frq[4]}</p>
                <p>Nota 6 : hay {frq[5]}</p>
                <p>Nota 7 : hay {frq[6]}</p>
                <p>Nota 8 : hay {frq[7]}</p>
                <p>Nota 9 : hay {frq[8]}</p>
                <p>Nota 10: hay {frq[9]}</p>
                <p>La nota con menor frecuencia es:  {menorI + 1}</p>
            </div>
        this.setState({ resultado })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 16</h1>
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