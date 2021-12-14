import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import "./contact.css"
const Contact = () => {
  const initialValues = {
    email: "",
    subject: "",
    message: "",
  }
  const onSubmit = () => {}
  return (
    <div className='contact'>
      <div className='contactHeader'>
        <h1>Contact Us</h1>
        <p className='contactP'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          pharetra, sapien sit amet venenatis feugiat, diam urna cursus augue,
          sit amet condimentum odio diam vitae felis. Nulla porta velit id
          varius interdum.
        </p>
      </div>
      <div className='contactBody'>
        <div className='formContainer'>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form className='contactForm'>
              <label> Email</label>
              <Field type='text' name='email' autoComplete='off' />
              <label> Subject</label>
              <Field type='text' name='subject' autoComplete='off' />
              <label> How Can We Help?</label>
              <Field as='textarea' name='message' autoComplete='off' />

              <button>SEND</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Contact
