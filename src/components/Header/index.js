import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand as={Link} to="/">
						Travel
					</Navbar.Brand>
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
					>
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/booking">
							Booking
						</Nav.Link>
						<Nav.Link as={Link} to="/packages">
							Packages
						</Nav.Link>
						<Nav.Link as={Link} to="/services">
							Services
						</Nav.Link>
						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/signup">
							Sign Up
						</Nav.Link>
						<Nav.Link as={Link} to="/login">
							Login
						</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2 text:white"
							aria-label="Search"
						/>
						<Button variant="warning">Search</Button>
					</Form>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
