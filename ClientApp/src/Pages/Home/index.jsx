import { Container, Brand, Menu, Search, Content, NewNotes } from './styles'
import { Header } from './../../components/Header/index'
import { ButtonText } from './../../components/ButtonText/index'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Input } from '../../components/Input/index'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
	const [notes, setNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])
	const [tags, setTags] = useState([])
	const [activeTags, setActiveTags] = useState([])
	const [search, setSearch] = useState('')
  const navigate = useNavigate()

	const handleSelectTag = tag => {
		if (tag === 'All') {
			setActiveTags([])
		} else if (activeTags.includes(tag)) {
			setActiveTags(activeTags.filter(t => t !== tag))
		} else {
			setActiveTags([...activeTags, tag])
		}
	}
	const handleChangeSearch = event => {
		setSearch(event.target.value)
	}
  const handleDetails = id => {
    navigate(`/details/${id}`)
  }
	useEffect(() => {
		async function getTags() {
			const resTags = await api.get('/tags')
			if (resTags.status === 200) {
				setTags(resTags.data)
			}
		}
		async function getNotes() {
			const resNotes = await api.get('/notes')
			if (resNotes.status === 200) {
				setNotes(resNotes.data)
        setFilteredNotes(resNotes.data)
			}
		}
		getTags()
		getNotes()
	}, [])
  useEffect(() => {
    const filteredNotes = notes.filter(note => {
      const hasTag = activeTags.length === 0 || note.tags.some(tag => activeTags.includes(tag.name))
      const hasSearch = note.title.toLowerCase().includes(search.toLowerCase())
      return hasTag && hasSearch
    }
    )
    setFilteredNotes(filteredNotes)
  }, [activeTags, search])
	return (
		<Container>
			<Brand>
				<h1>My notes</h1>
			</Brand>
			<Header />

			<Menu>
				<li>
					<ButtonText
						onClick={() => handleSelectTag('All')}
						$isActive={activeTags.length === 0}
						label={'All'}
					></ButtonText>
				</li>
				{tags.map(tag => (
					<li key={tag.id}>
						<ButtonText
							$isActive={activeTags.includes(tag.name)}
							onClick={() => handleSelectTag(tag.name)}
							label={tag.name}
						></ButtonText>
					</li>
				))}
			</Menu>

			<Search>
				<Input onChange={handleChangeSearch} placeholder={'Search by Title'} icon={FiSearch} />
			</Search>

			<Content>
				<Section title={'My Notes'}>
					{filteredNotes.map(note => (
            <Note onClick={() => handleDetails(note.id)} key={note.id} data={note}></Note>
          ))
          }
				</Section>
			</Content>

			<NewNotes to='/new'>
				<FiPlus />
				Create New Note
			</NewNotes>
		</Container>
	)
}
