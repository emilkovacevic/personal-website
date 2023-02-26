import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

// const sendimport 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import Headline from '../../components/headline/Headline'
import Socials from '../../components/socials/Socials'

const Container = styled.div`
  margin: auto;
  padding-bottom: 10em;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  background-color: ${(props) => props.theme.contactPage__form_background};
  margin: 5% 0;
  font-family: 'RedWingBold', sans-serif;
  border-radius: 10px;
  color: ${(props) => props.theme.text_error};
  font-size: 1.2rem;
  letter-spacing: 2px;
  box-shadow: 5px 5px 10px ${(props) => props.theme.contactPage__form_shadow};
`

const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.contactPage__form_label__text};
`

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.contactPage__form_border};
  font-size: 1.2rem;
  background-color: ${(props) =>
    props.theme.contactPage__form_input__background};
`

const Textarea = styled.textarea`
  width: 100%;
  display: block;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.contactPage__form_border};
  font-size: 1.2rem;
  background-color: ${(props) =>
    props.theme.contactPage__form_input__background};
  min-height: 180px;
`

const Button = styled.input`
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.contactPage__form_button__background};
  color: ${(props) => props.theme.contactPage__form_button__text};
  border: none;
  font-size: 1.2rem;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.theme.contactPage__form_button__background__hover};
  }

  &:focus {
    outline-color: transparent;
  }
`

function Contact() {
  const [state, handleSubmit] = useForm('xpznlopp')

  if (state.succeeded) {
    toast.success('Message Sent Successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <main data-aos="fade-up">
      <ToastContainer />
      <Headline title="GET IN TOUCH" />
      <Container>
        <Socials />
        <Form onSubmit={handleSubmit} method="POST">
          <ValidationError prefix="NAME" field="NAME" errors={state.errors} />
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </FormGroup>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </FormGroup>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter the subject of your message"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
            />
          </FormGroup>
          <Button
            name="submit"
            id="submit"
            type="submit"
            value="Send Message"
            className="btn"
          />
        </Form>
      </Container>
    </main>
  )
}

export default Contact
