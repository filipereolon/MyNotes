import { Container } from './styles'

export function ButtonText({ label, isActive = false, ...rest }) {
	return (
		<Container type='button' $isActive={isActive} {...rest}>
			{label}
		</Container>
	)
}
