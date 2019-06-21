import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Form } from 'react-bootstrap'

export default class Ejercicio1 extends Component {
    state = {
        Fa: 0,
        Cel: undefined
    }

    handleChange = (event) => {
        const value = event.target.value
        let cel = undefined;
        cel = ((value - 32) * (5 / 9))
        this.setState({
            Fa: value,
            Cel: cel
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 1</h1>
                    <p>Ingresa grados Farenheit para convertirlos a Celcius:</p>
                    <div className="d-flex justify-content-center">
                        <Form.Control type="number" value={this.state.Fa} onChange={this.handleChange} />
                    </div>
                    {
                        this.state.Cel
                            ?
                            <p className="mt-4">El valor en Celcius es: <strong>{this.state.Cel.toFixed(2)}</strong></p>
                            :
                            <p className="mt-4">No es un número</p>
                    }
                </Container>
            </div>
        )
    }
}