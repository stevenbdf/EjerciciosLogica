import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default class Ejercicio19 extends Component {
    state = {
        resultado: ''
    }

    calcularVentas = async () => {
        let mes = 0
        let leche = [0, 0, 0]
        let crema = [0, 0, 0]
        let queso = [0, 0, 0]

        while (mes < 3) {
            let ventasLeche = prompt('Ingrese la cantidad de LECHE vendida en el mes ' + (mes + 1))
            let ventasCrema = prompt('Ingrese la cantidad de CREMA vendida en el mes ' + (mes + 1))
            let ventasQueso = prompt('Ingrese la cantidad de QUESO vendida en el mes ' + (mes + 1))
            leche[mes] = parseFloat(ventasLeche)
            crema[mes] = parseFloat(ventasCrema)
            queso[mes] = parseFloat(ventasQueso)
            mes++
        }

        let totalTrimestre = (leche.reduce((a, b) => a + b)) + (crema.reduce((a, b) => a + b)) + (queso.reduce((a, b) => a + b))

        let ventasEnero = (leche[0] + crema[0] + queso[0])
        let ventasFebrero = (leche[1] + crema[1] + queso[1])
        let ventasMarzo = (leche[2] + crema[2] + queso[2])

        let masVendidos = ['', '', '']
        for (let i = 0; i < 3; i++) {
            if (leche[i] >= crema[i] && leche[i] >= queso[i]) {
                masVendidos[i] = 'Leche'
            } else if (crema[i] > leche[i] && crema[i] > queso[i]) {
                masVendidos[i] = 'Crema'
            } else {
                masVendidos[i] = 'Queso'
            }
        }

        let resultado =
            <div>
                <p>Venta total del trimestre: $<strong>{totalTrimestre}</strong></p>
                <p>Venta total de Enero: $<strong>{ventasEnero}</strong></p>
                <p>Venta total de Febrero: $<strong>{ventasFebrero}</strong></p>
                <p>Venta total de Marzo: $<strong>{ventasMarzo}</strong></p>
                <p><strong>Más Vendido de Cada Mes</strong></p>
                <p>Enero: <strong>{masVendidos[0]}</strong></p>
                <p>Febrero: <strong>{masVendidos[1]}</strong></p>
                <p>Marzo: <strong>{masVendidos[2]}</strong></p>
            </div>
        this.setState({ resultado })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 19</h1>
                    <p>La vaquita feliz</p>
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