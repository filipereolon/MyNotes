import { Button } from '../../components/Button'
import { Header } from './../../components/Header/index'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'
import { Container, Links, Content } from './styles'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function Details() {
	const { id } = useParams()
	const [note, setNote] = useState({})
	const navigate = useNavigate()

	const handleDelete = async () => {
		const confirm = window.confirm('Are you sure you want to delete this note?')
		if (confirm) {
			const res = await api.delete(`/notes/${id}`)
			if (res.status === 200) {
				alert('Note deleted successfully')
				navigate(-1)
			}
		}
	}
  const handleBack = () => {
    navigate(-1)
  }
	useEffect(() => {
		async function getNote() {
			const resNote = await api.get(`/notes/${id}`)
			if (resNote.status === 200) {
				setNote(resNote.data)
			}
		}
		getNote()
	}, [id])
	return (
		<Container>
			<Header />
			<main>
				<Content>
					<ButtonText onClick={handleDelete} label='Delete note'></ButtonText>
					<h1>{note.title}</h1>

					<p>{note.description}</p>
					<Section title='Useful Links'>
						<Links>
							{note.links &&
								note.links.map(link => (
									<a key={link.id} href={link} target='_blank' rel='noreferrer'>
										{link.url}
									</a>
								))}
						</Links>
					</Section>

					<Section title='Tags'>
						{note.tags && note.tags.map(tag => <Tag key={tag.id} title={tag.name}></Tag>)}
					</Section>
					<Button onClick={handleBack} label='Go Back'></Button>
				</Content>
			</main>
		</Container>
	)
}
