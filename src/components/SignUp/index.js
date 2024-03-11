import React from "react";
import { Form } from "react-bootstrap";

function SignUp() {
	return (
		<Form className="m-5">
			<Form.Group className="mb-3" controlId="formGroupEmail">
				<Form.Label>First Name</Form.Label>
				<Form.Control type="text" placeholder="First Name" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formGroupEmail">
				<Form.Label>Last Name</Form.Label>
				<Form.Control type="text" placeholder="Last Name" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formGroupEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formGroupPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
		</Form>
	);
}

export default SignUp;
