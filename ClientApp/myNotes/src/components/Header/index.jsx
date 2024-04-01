import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
	return (
		<Container>
			<Profile to='/profile'>
				<img src='  ' alt='User Image' />
				<div>
					<span>Bem-Vindo</span>
					<strong>Filipe Reolon</strong>
				</div>
			</Profile>
      <Logout>
        <RiShutDownLine></RiShutDownLine>
      </Logout>
		</Container>
	)
}
