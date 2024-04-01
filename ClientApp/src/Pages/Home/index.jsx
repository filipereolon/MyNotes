import { Container, Brand, Menu, Search, Content, NewNotes } from './styles'
import { Header } from './../../components/Header/index'
import { ButtonText } from './../../components/ButtonText/index'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input/index'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
	return (
		<Container>
			<Brand>
				<h1>My notes</h1>
			</Brand>
			<Header />

			<Menu>
				<li>
					<ButtonText $isActive label={'Todos'}></ButtonText>
				</li>
				<li>
					<ButtonText label={'React'}></ButtonText>
				</li>
				<li>
					<ButtonText label={'NodeJS'}></ButtonText>
				</li>
			</Menu>

			<Search>
        <Input placeholder={'Search by Title'} icon={FiSearch}/>
      </Search>

			<Content>
        <Section title={'My Notes'}>
          <Note data={{title: 'React', tags: [{id: 1, name: 'React'}, {id: 2, name: 'Node'}]}} />
        </Section>
      </Content>

			<NewNotes to='/new'>
        <FiPlus />
        Create New Note
      </NewNotes>
		</Container>
	)
}
