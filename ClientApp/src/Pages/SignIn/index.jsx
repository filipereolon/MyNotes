import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import React from 'react'

export function SignIn() {
	const { signIn } = useAuth()
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const handleChange = e => {
		const { name, value } = e.target
		if (name === 'email') setEmail(value)
		if (name === 'password') setPassword(value)
	}

	const handleSignIn = () => {
		signIn({ email, password })
	}

	return (
		<Container>
			<Form>
				<h1>My Notes</h1>
				<p>App to save and manage important links</p>
				<h2>Sign In</h2>
				<Input onChange={handleChange} name='email' placeholder='E-mail' type='text' icon={FiMail} />
				<Input onChange={handleChange} name='password' placeholder='Password' type='password' icon={FiLock} />
				<Button onClick={handleSignIn} label='Sign In' />
				<Link to='/signup'>Or create an account</Link>
			</Form>
			<Background />
		</Container>
	)
}
