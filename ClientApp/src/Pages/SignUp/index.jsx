import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { api } from '../../services/api'
export function SignUp() {
	const [name, setName] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')

	const handleChange = e => {
		const { name, value } = e.target
		if (name === 'name') setName(value)
		if (name === 'email') setEmail(value)
		if (name === 'password') setPassword(value)
	}

  const navigate = useNavigate()

	const handleSignUp = () => {
		if (!name || !email || !password) {
			alert('Fill in all fields')
			return
		}
		api.post('/users', { name, email, password })
			.then(() => {
				setName('')
				setEmail('')
				setPassword('')
				alert('User created successfully')
        navigate('/')
			})
			.catch(() => {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert('Failed to create user')
				}
			})
	}
	return (
		<Container>
			<Background />
			<Form>
				<h1>My Notes</h1>
				<p>App to save and manage important links</p>
				<h2>Create account</h2>
				<Input name='name' onChange={handleChange} value={name} placeholder='Name' type='text' icon={FiUser} />
				<Input name='email' onChange={handleChange} value={email} placeholder='E-mail' type='email' icon={FiMail} />
				<Input
					name='password'
					onChange={handleChange}
					value={password}
					placeholder='Password'
					type='password'
					icon={FiLock}
				/>
				<Button onClick={handleSignUp} label='Create' />
				<Link to='/'>Go back to signin page</Link>
			</Form>
		</Container>
	)
}
