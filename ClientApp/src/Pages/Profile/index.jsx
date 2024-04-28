import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
	const { user, updateProfile } = useAuth()
	const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [currentPassword, setCurrentPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [avatar, setAvatar] = useState(avatarURL)
	const [avatarFile, setAvatarFile] = useState(null)

	const handleChange = event => {
		const { name, value } = event.target

		switch (name) {
			case 'name':
				setName(value)
				break
			case 'email':
				setEmail(value)
				break
			case 'currentPassword':
				setCurrentPassword(value)
				break
			case 'newPassword':
				setNewPassword(value)
				break
			case 'avatar':
				setAvatarFile(event.target.files[0])
				setAvatar(URL.createObjectURL(event.target.files[0]))
				break
			default:
				break
		}
	}

	async function handleUpdate() {
		const user = {
      name,
			email,
			currentPassword,
			newPassword
		}
		await updateProfile({ user, avatarFile })
	}

	return (
		<Container>
			<header>
				<Link to='/'>
					<FiArrowLeft />
				</Link>
			</header>

			<Form>
				<Avatar>
					<img src={avatar} alt='user image' />
					<label htmlFor='avatar'>
						<FiCamera />
					</label>
					<input id='avatar' type='file' name='avatar' onChange={handleChange} />
				</Avatar>
				<Input
					placeholder='Name'
					type='text'
					icon={FiUser}
					value={name}
					name='name'
					onChange={handleChange}
				/>
				<Input
					placeholder='E-mail'
					type='text'
					icon={FiMail}
					value={email}
					name='email'
					onChange={handleChange}
				/>
				<Input
					placeholder='Current password'
					type='password'
					icon={FiLock}
					name='currentPassword'
					onChange={handleChange}
				/>
				<Input
					placeholder='New password'
					type='password'
					icon={FiLock}
					name='newPassword'
					onChange={handleChange}
				/>
				<Button label='Save' onClick={handleUpdate} />
			</Form>
		</Container>
	)
}
