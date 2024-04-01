import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
export function SignUp() {
	return (
		<Container>
      <Background />
			<Form>
				<h1>My Notes</h1>
				<p>App to save and manage important links</p>
        <h2>Create account</h2>
				<Input placeholder='Name' type='text' icon={FiUser} />
				<Input placeholder='E-mail' type='text' icon={FiMail} />
				<Input placeholder='Password' type='password' icon={FiLock} />
				<Button label='Create' />
        <Link to="/">Go bLinkck to signup page</Link>
			</Form>
		</Container>
	)
}
