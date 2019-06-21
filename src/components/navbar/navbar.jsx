import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavbarComponent() {
    const links = [
        { title: 'Ejercicio 1', link: '1' },
        { title: 'Ejercicio 2', link: '2' },
        { title: 'Ejercicio 3', link: '3' },
        { title: 'Ejercicio 4', link: '4' },
        { title: 'Ejercicio 5', link: '5' },
        { title: 'Ejercicio 6', link: '6' },
        { title: 'Ejercicio 7', link: '7' },
        { title: 'Ejercicio 8', link: '8' },
        { title: 'Ejercicio 9', link: '9' },
        { title: 'Ejercicio 10', link: '10' },
        { title: 'Ejercicio 11', link: '11' },
        { title: 'Ejercicio 12', link: '12' },
        { title: 'Ejercicio 13', link: '13' },
        { title: 'Ejercicio 14', link: '14' },
        { title: 'Ejercicio 15', link: '15' },
        { title: 'Ejercicio 16', link: '16' },
        { title: 'Ejercicio 17', link: '17' },
        { title: 'Ejercicio 18', link: '18' },
        { title: 'Ejercicio 19', link: '19' },
        { title: 'Ejercicio 20', link: '20' }
    ]
    return(
        <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
            <Navbar.Brand><Nav.Link href={'./index.html'}><FontAwesomeIcon icon={faHome} /></Nav.Link></Navbar.Brand>
            <Navbar.Brand>Ejercicios</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container>
                    <Row>
                        {
                            links.map(item => {
                                return (
                                    <Col xs={6} key={item.link}>
                                        <p><Link to={item.link}>{item.title}</Link></p>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}