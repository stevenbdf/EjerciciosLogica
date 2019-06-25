import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class Ejercicio20 extends Component {
    state = {
        resultado: ''
    }

    calcularVentas = async () => {
        let mes = 0
        let notas = []

        while (mes < 3) {
            let est1 = parseFloat(prompt('Ingrese la nota del estudiante 1 del mes : ' + (mes + 1)))
            let est2 = parseFloat(prompt('Ingrese la nota del estudiante 2 del mes : ' + (mes + 1)))
            let est3 = parseFloat(prompt('Ingrese la nota del estudiante 3 del mes : ' + (mes + 1)))
            let est4 = parseFloat(prompt('Ingrese la nota del estudiante 4 del mes : ' + (mes + 1)))
            let est5 = parseFloat(prompt('Ingrese la nota del estudiante 5 del mes : ' + (mes + 1)))
            notas.push({ est1, est2, est3, est4, est5 })
            mes++
        }
        let mayores = ['', '', '']
        notas.map((item, index) => {
            let { est1, est2, est3, est4, est5 } = item
            if (est1 >= est2 && est1 >= est3 && est1 >= est4 && est1 >= est5) {
                mayores[index] = `Estudiante 1 con calificación : ${est1}`
            } else if (est2 >= est1 && est2 >= est3 && est2 >= est4 && est2 >= est5) {
                mayores[index] = `Estudiante 2 con calificación : ${est2}`
            } else if (est3 >= est1 && est3 >= est2 && est3 >= est4 && est3 >= est5) {
                mayores[index] = `Estudiante 3 con calificación : ${est3}`
            } else if (est4 >= est1 && est4 >= est2 && est4 >= est3 && est4 >= est5) {
                mayores[index] = `Estudiante 4 con calificación : ${est4}`
            } else {
                mayores[index] = `Estudiante 5 con calificación : ${est5}`
            }
        })

        let menores = ['', '', '']
        notas.map((item, index) => {
            let { est1, est2, est3, est4, est5 } = item
            if (est1 <= est2 && est1 <= est3 && est1 <= est4 && est1 <= est5) {
                menores[index] = `Estudiante 1 con calificación : ${est1}`
            } else if (est2 <= est1 && est2 <= est3 && est2 <= est4 && est2 <= est5) {
                menores[index] = `Estudiante 2 con calificación : ${est2}`
            } else if (est3 <= est1 && est3 <= est2 && est3 <= est4 && est3 <= est5) {
                menores[index] = `Estudiante 3 con calificación : ${est3}`
            } else if (est4 <= est1 && est4 <= est2 && est4 <= est3 && est4 <= est5) {
                menores[index] = `Estudiante 4 con calificación : ${est4}`
            } else {
                menores[index] = `Estudiante 5 con calificación : ${est5}`
            }
        })

        let resultado =
            <div>
                <p><strong>Mes 1</strong></p>
                <p>Mayor calificación:  <strong>{mayores[0]}</strong></p>
                <p>Menor calificación:  <strong>{menores[0]}</strong></p>
                <p><strong>Mes 2</strong></p>
                <p>Mayor calificación:  <strong>{mayores[1]}</strong></p>
                <p>Menor calificación:  <strong>{menores[1]}</strong></p>
                <p><strong>Mes 3</strong></p>
                <p>Mayor calificación:  <strong>{mayores[2]}</strong></p>
                <p>Menor calificación:  <strong>{menores[2]}</strong></p>
            </div>
        this.setState({ resultado })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 20</h1>
                    <p>English For Us</p>
                    <Container className="mt-4">
                        <Row className="mb-2 py-2">
                            <Col className="d-flex justify-content-center">
                                <Button variant="outline-primary" onClick={this.calcularVentas}>Calcular Notas</Button>
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