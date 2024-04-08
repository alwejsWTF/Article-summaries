import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export default function RegisterPage() {
	return (
		<Container fluid="md" className="d-flex justify-content-center">
			<Form className="px-5 d-flex flex-column my-5 border py-3 justify-content-center">
				<h1 className="text-center mb-5">Register</h1>
				<Form.Group className="mb-5">
					<Form.Label>Email: </Form.Label>
					<Form.Control placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="mb-5">
					<Form.Label>Nickname: </Form.Label>
					<Form.Control placeholder="Enter nickname" />
				</Form.Group>
				<Form.Group className="mb-5">
					<Form.Label>Password: </Form.Label>
					<Form.Control type="password" placeholder="Enter password" />
				</Form.Group>
				<Form.Text className="mb-3 text-center">Already have an account?
					<Nav.Link to="/login" as={NavLink}>
						<span type="button" className="text-primary" href="/login"> Login</span>
					</Nav.Link>
				</Form.Text>
				<Button>Submit</Button>
			</Form>
		</Container>
	)
}