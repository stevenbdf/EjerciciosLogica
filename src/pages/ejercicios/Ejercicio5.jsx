import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Button, Container } from 'react-bootstrap'

export default class Ejercicio5 extends Component {
    state = {
        triangulo: '',
        circulo: '',
        trapecio: '',
        rombo: ''
    }

    calcularTriangulo = () => {
        let base = parseFloat(prompt('Ingresa la base del triangulo'))
        let altura = parseFloat(prompt('Ingresa la altura'))
        let lado1 = parseFloat(prompt('Ingresa lado 1 '))
        let lado2 = parseFloat(prompt('Ingresa lado 2'))
        let perimetro = lado1 + lado2 + base
        let area = (base * altura) / 2
        let triangulo = (<div>
            <p className="mt-3">El área es <strong>{area}</strong></p>
            <p className="mt-3">El perimetro es <strong>{perimetro}</strong></p>
        </div>)
        this.setState({
            triangulo
        })
    }

    calcularCirculo = () => {
        let radio = parseFloat(prompt('Ingresa el radio del circulo'))
        let perimetro = radio * 3.14 * 2
        let area = Math.pow(radio, 2) * 3.14
        let circulo = (<div>
            <p className="mt-3">El área es <strong>{area}</strong></p>
            <p className="mt-3">El perimetro es <strong>{perimetro}</strong></p>
        </div>)
        this.setState({
            circulo
        })
    }

    calcularTrapecio = () => {
        let baseMayor = parseFloat(prompt('Ingresa la base mayor'))
        let baseMenor = parseFloat(prompt('Ingresa la base menor'))
        let ladoIzq = parseFloat(prompt('Ingresa el lado izquierdo del trapecio'))
        let ladoDch = parseFloat(prompt('Ingresa el lado derecho del trapecio'))
        let altura = parseFloat(prompt('Ingresa la altura del trapecio'))

        let perimetro = baseMayor + baseMenor + ladoDch + ladoIzq
        let area = ((baseMayor + baseMenor) * altura) / 2

        let trapecio = (<div>
            <p className="mt-3">El área es <strong>{area}</strong></p>
            <p className="mt-3">El perimetro es <strong>{perimetro}</strong></p>
        </div>)
        this.setState({
            trapecio
        })
    }

    calcularRombo = () => {
        let dMayor = parseFloat(prompt('Ingrese el diametro mayor'))
        let dMenor = parseFloat(prompt('Ingrese el diametro menor'))

        let lado1 = parseFloat(prompt('Ingrese lado 1'))
        let lado2 = parseFloat(prompt('Ingrese lado 2'))
        let lado3 = parseFloat(prompt('Ingrese lado 3'))
        let lado4 = parseFloat(prompt('Ingrese lado 4'))

        let perimetro = lado1 + lado2 + lado3 + lado4
        let area = (dMayor * dMenor) / 2
        let rombo = (<div>
            <p className="mt-3">El área es <strong>{area}</strong></p>
            <p className="mt-3">El perimetro es <strong>{perimetro}</strong></p>
        </div>)
        this.setState({
            rombo
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 5</h1>
                    <p>Triangulo:</p>
                    <Button variant="outline-primary" onClick={this.calcularTriangulo}>Calcular Área y Perimetro</Button>
                    {this.state.triangulo}

                    <p className="mt-4">Circulo:</p>
                    <Button variant="outline-primary" onClick={this.calcularCirculo}>Calcular Área y Perimetro</Button>
                    {this.state.circulo}

                    <p className="mt-4">Trapecio:</p>
                    <Button variant="outline-primary" onClick={this.calcularTrapecio}>Calcular Área y Perimetro</Button>
                    {this.state.trapecio}

                    <p className="mt-4">Rombo:</p>
                    <Button variant="outline-primary" onClick={this.calcularRombo}>Calcular Área y Perimetro</Button>
                    {this.state.rombo}
                </Container>
            </div>
        )
    }
}