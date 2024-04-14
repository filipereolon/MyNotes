import { Container } from './styles'

export function Button({ label, loading = false, ...rest }) {
	return (
    <Container 
      type='button'
      disabled={loading}
      {...rest}
    >
        {loading ? 'Loading...' : label}
    </Container>)
}
