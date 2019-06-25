import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class Ejercicio17 extends Component {
    state = {
        numeros: [],
        resultado: ''
    }

    calcularNumeros = async () => {
        let run = 0, numeros = []
        while (run < 10) {
            let numEntero = prompt('Ingresa un numero entero')
            numEntero = parseFloat(numEntero)
            numeros.push(numEntero)
            run++
        }
        await this.setState({ numeros })
        let impar = 0, par = 0, nulo = 0
        this.state.numeros.map(item => {
            if (item === 0) {
                nulo++
            } else if (item % 2) {
                impar++
            } else {
                par++
            }
        })

        let resultado =
            <div>
                <p>Hay <strong>{par}</strong> numeros pares</p>
                <p>Hay <strong>{impar}</strong> numeros impares</p>
                <p>Hay <strong>{nulo}</strong> numeros nulos</p>
            </div>
        this.setState({ resultado })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 17</h1>
                    <p>¿Pares, Impares o Nulos? </p>
                    <Container className="mt-4">
                        <Row className="mb-2 py-2">
                            <Col className="d-flex justify-content-center">
                                <Button variant="outline-primary" onClick={this.calcularNumeros}>Calcular</Button>
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