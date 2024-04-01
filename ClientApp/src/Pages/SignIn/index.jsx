import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
export function SignIn() {
	return (
		<Container>
			<Form>
				<h1>My Notes</h1>
				<p>App to save and manage important links</p>
				<h2>Sign In</h2>
				<Input placeholder='E-mail' type='text' icon={FiMail} />
				<Input placeholder='Password' type='password' icon={FiLock} />
				<Button label='Sign In' />
				<Link to='/signup'>Or create an account</Link>
			</Form>
			<Background />
		</Container>
	)
}
