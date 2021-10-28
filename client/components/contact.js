import React from 'react'
import {Form, Input, TextArea, Button} from 'semantic-ui-react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

const userId = 'user_lQpVcq9iHhvOposOKJnmO'
const serviceId = 'service_ivyebii'
const templateId = 'template_pwgt98q'

const Contact = props => {
  const handleSubmit = e => {
    e.preventDefault()
    emailjs.sendForm(serviceId, templateId, e.target, userId).then(
      result => {
        console.log(result.text)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent! Thank You!'
        })
      },
      error => {
        console.log(error.text)
        Swal.fire({
          icon: 'error',
          title: 'Error Sending Message:',
          text: error.text
        })
      }
    )
    e.target.reset()
  }
  return (
    <div>
      <h1>📇 Contact Me:</h1>
      <h3>Please Reach Out Using the Form Below. I Will Respond ASAP</h3>
      <div className="contact-form">
        <Form onSubmit={handleSubmit}>
          <Form.Field
            id="email-entry"
            control={Input}
            label="E-mail"
            name="user_email"
            placeholder="Email"
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="name-entry"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Name"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="message-entry"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Reason for Reaching Out"
            required
          />
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Contact
