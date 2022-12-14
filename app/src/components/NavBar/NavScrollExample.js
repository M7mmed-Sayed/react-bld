import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../../Css/NavBar/NavBar.css'

function NavScrollExample(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Brand href="#">
                    <img
                        width="80"
                        height="33"
                        src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="navbarScroll" className="navbarScroll">
                    <Nav
                        className="menu"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" className="item">
                            categories
                        </Nav.Link>
                        <Form className="d-flex flex-md-grow-1">
                            <Button
                                variant="outline-succes"
                                className="searchBtn"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Button>
                            <input
                                ref={props.inputEl}
                                value={props.term}
                                onChange={(e) => props.searchFunction(e.target.value)}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <Nav.Link href="#action2" className="item">
                            Udemy Business
                        </Nav.Link>
                        <Nav.Link href="#action2" className="item">
                            Teach on Udemy
                        </Nav.Link>
                        <Nav.Link className="item">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Nav.Link>
                        <button className="btn  border-dark login">
                            Log In
                        </button>
                        <button className="btn btn-dark singup">Sign Up</button>
                        <button className="btn border-dark lang-icon">
                            <i className="fa-solid fa-globe"></i>
                        </button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavScrollExample
