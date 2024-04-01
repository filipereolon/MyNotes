import { Container, Form, Avatar } from "./styles"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function Profile () {
  return (
    <Container>
      <header>
        <Link to="/"><FiArrowLeft/></Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/filipereolon.png" alt="user image" />
          <label htmlFor="avatar">
            <FiCamera />
          </label>
          <input id='avatar' type='file'/>
        </Avatar>
        <Input
          placeholder='Name'
          type='text'
          icon={FiUser}
        />
        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
        />
        <Input
          placeholder='Current password'
          type='password'
          icon={FiLock}
        />
        <Input
          placeholder='New password'
          type='password'
          icon={FiLock}
        />
        <Button label='Save' />
      </Form>
    </Container>
  )
}