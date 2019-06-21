import React, { Component } from 'react'
import Navbar from '../../components/navbar/navbar'
import './styles.css'
import logo from '../../images/logo.png'
import logoReact from '../../images/logoReact.PNG'
import logoCordova from '../../images/logoCordova.png'
import logoBootstrap from '../../images/logoBootstrap.png'
import { Container, Row, Col } from 'react-bootstrap'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1 className="title mt-2">{this.props.title}</h1>
                <div className="d-flex justify-content-center img-container">
                    <img src={logo} className="img" alt="logoRicaldone"/>
                </div>
                <p className="title mt-4">Steven Benjamin Diaz Flores</p>
                <p className="title mt-4">3ro Software 1</p>
                <Container>
                    <Row className="img-container">
                        <Col xs={6} className="img-container">
                            <img src={logoReact} className="img" alt="logoReact"/>
                        </Col>
                        <Col xs={6} className="img-container">
                            <img src={logoCordova} className="img" alt="logoCordova"/>
                        </Col>
                        <Col xs={6} className="img-container mt-3">
                            <img src={logoBootstrap} className="img" alt="logoBootstrap"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}