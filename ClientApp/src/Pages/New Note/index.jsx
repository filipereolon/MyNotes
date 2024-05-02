import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { FiArrowLeft } from 'react-icons/fi'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function NewNote() {
	const [links, setLinks] = useState([])
	const [newLink, setNewLink] = useState('')
	const [tags, setTags] = useState([])
	const [newTag, setNewTag] = useState('')
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const navigate = useNavigate()

	const handleChange = event => {
		const { name, value } = event.target
		switch (name) {
			case 'title':
				setTitle(value)
				break
			case 'description':
				setDescription(value)
				break
			case 'link':
				setNewLink(value)
				break
			case 'tag':
				setNewTag(value)
				break
			default:
				break
		}
	}
	const handleAddLink = () => {
		setLinks(prev => [...prev, newLink])
		setNewLink('')
	}
	const handleRemove = (index, type) => {
		if (type === 'link') {
			setLinks(prev => prev.filter((_, i) => i !== index))
		} else {
			setTags(prev => prev.filter((_, i) => i !== index))
		}
	}
	const handleAddTag = () => {
		setTags(prev => [...prev, newTag])
		setNewTag('')
	}
	const handleNewNote = async () => {
    if (!title) {
      return alert('Title is required, please add a title before saving the note')
    }
    if(newLink) {
      return alert('You need to add the link before saving the note')
    }
    if (newTag) {
      return alert('You need to add the tag before saving the note')
    }
		await api.post('/notes', {
			title,
			description,
			tags,
			links,
		})
		alert('Note created successfully')
		navigate('/')
	}
	return (
		<Container>
			<Header />
			<main>
				<Form>
					<header>
						<h1>Create note</h1>
						<Link to='/'>
							<FiArrowLeft />
						</Link>
					</header>
					<Input name='title' value={title} onChange={handleChange} placeholder='Title'></Input>
					<Textarea
						name='description'
						value={description}
						onChange={handleChange}
						placeholder='Description'
					></Textarea>
					<Section title='Useful Links'>
						{links.map((link, index) => (
							<NoteItem
								key={index}
								value={link}
								onClick={() => handleRemove(index, 'link')}
							></NoteItem>
						))}
						<NoteItem
							name='link'
							value={newLink}
							onChange={handleChange}
							onClick={handleAddLink}
							isnew
							placeholder='New link'
						/>
					</Section>
					<Section title='Tags'>
						<div className='tags'>
							{tags.map((tag, index) => (
								<NoteItem
									key={index}
									value={tag}
									onClick={() => handleRemove(index, 'tag')}
								></NoteItem>
							))}
							<NoteItem
								name='tag'
								value={newTag}
								onChange={handleChange}
								onClick={handleAddTag}
								isnew
								placeholder='New tag'
							></NoteItem>
						</div>
					</Section>
					<Button onClick={handleNewNote} label='Save' />
				</Form>
			</main>
		</Container>
	)
}
