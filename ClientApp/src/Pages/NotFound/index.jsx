import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function NotFound() {
	const navigate = useNavigate()
	return (
		<Container>
			<h1>404 Not Found</h1>
			<p>The page you are looking for does not exist.</p>
      <Button label='Go to Home' onClick={() => navigate('/')} />
		</Container>
	)
}
