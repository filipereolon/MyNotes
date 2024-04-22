import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const { signOut, user } = useAuth()
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
	return (
		<Container>
			<Profile to='/profile'>
				<img src={avatarURL} alt='User Image' />
				<div>
					<span>Bem-Vindo</span>
					<strong>{user.name}</strong>
				</div>
			</Profile>
      <Logout onClick={signOut}>
        <RiShutDownLine></RiShutDownLine>
      </Logout>
		</Container>
	)
}
