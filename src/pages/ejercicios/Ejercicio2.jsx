import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import { Container, Form } from 'react-bootstrap'

export default class Ejercicio2 extends Component {
    state = {
        sueldo: 0,
        descuento: undefined,
        sueldoNeto: undefined
    }
    
    handleChange = (event) => {
        const value = event.target.value
        let descuento = value * 0.19
        let sueldoNeto = value - descuento
        this.setState({
            sueldo: value,
            descuento,
            sueldoNeto
        })
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <h1 className="w-100 text-center mt-4">Ejercicio 2</h1>
                    <p>Ingresa tu sueldo sin descuentos ($):</p>
                    <div className="d-flex justify-content-center">
                        <Form.Control value={this.state.sueldo} onChange={this.handleChange} />
                    </div>
                    {
                        this.state.sueldoNeto
                        ?
                        <div>
                            <p className="mt-4">Su sueldo neto es: <strong>${this.state.sueldoNeto.toFixed(2)}</strong></p>
                            <p className="mt-4">Se te descuenta un total de : <strong>${this.state.descuento.toFixed(2)}</strong></p>
                        </div>
                        :
                        <p className="mt-4">No es un número</p>
                    }
                </Container>
            </div>
        )
    }
}