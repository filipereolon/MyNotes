import { Button } from '../../components/Button'
import { Header } from './../../components/Header/index'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'
import { Container, Links, Content } from './styles'

export function Details() {
	return (
		<Container>
			<Header />
			<main>
				<Content>
					<ButtonText label='Delete note'></ButtonText>
					<h1>Introduction to React</h1>

					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia amet
						nihil saepe deserunt expedita suscipit laborum officiis excepturi
						corporis, nostrum, delectus dicta natus, eius quos vero beatae!
						Asperiores ipsum obcaecati temporibus porro omnis saepe aperiam
						accusantium aut, eius quos, repudiandae vel dolorem dicta?
						Accusantium vero dicta ipsam? Possimus officia mollitia tenetur
						alias, harum, molestiae ipsum eius ex blanditiis facilis ut. Quasi
						impedit perferendis, consequuntur soluta doloremque libero odit.
						Fugit cumque similique est voluptatum nesciunt aspernatur repellat,
						fugiat saepe nisi quibusdam, blanditiis adipisci quae enim sapiente?
						Aliquam voluptatem error iste, neque eos praesentium velit modi fuga
						eum ullam, nisi autem tenetur.
					</p>
					<Section title='Useful Links'>
						<Links>
							<li>teste</li>
							<li>banana</li>
						</Links>
					</Section>

					<Section title='Marcadores'>
						<Tag title='express'></Tag>
						<Tag title='nodejs'></Tag>
					</Section>
					<Button label='Voltar'></Button>
				</Content>
			</main>
		</Container>
	)
}
