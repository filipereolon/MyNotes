import { Container, Form } from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { FiArrowLeft } from "react-icons/fi"
import { NoteItem} from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function NewNote () {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/"><FiArrowLeft/></Link>
          </header>
          <Input placeholder='Title'></Input>
          <Textarea placeholder='Observations'></Textarea>
          <Section title='Useful Links'>
            <NoteItem value='https://rocketseat.com.br'/>
            <NoteItem isNew placeholder='New link'/>
          </Section>
          <Section title='Tags'>
            <div className="tags">
              <NoteItem value='React'></NoteItem>
              <NoteItem isNew placeholder='New tag'></NoteItem>
            </div>
          </Section>
          <Button label='Save' />
        </Form>
      </main>
    </Container>
  )
}
