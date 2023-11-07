import React, { useState } from 'react'
import '../../CSS-SCSS/Main/ContactForm/ContactForm.css'
import { useFormik } from 'formik'

const ContactForm = () => {

    const [errorMessage, setErrorMessage] = useState('');

    const form = useFormik({
        initialValues: {

            name: '',
            email: '',
            message: ''

        },

        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            switch (result.status){
                case 200:
                    console.log('Meddelandet gick iväg')
                    break;
                case 400:
                    setErrorMessage('Något gick fel..')
                    break;
                default:
                    console.log('Ohanterat felmeddelande', result.status)
            }
        }

    })


  return (
    <section className="message-form-class">
        <div className="container">
            <h2>Leave us a message for any information.</h2>
            <p className='errorMessage'>{errorMessage}</p>

            <form onSubmit={form.handleSubmit} id="messageform" noValidate >

                {/* <!-- Tabindex = If a user wants to navigate the site through tab, lower number equals first tab -->
                <!-- autocomplete = Lets the user choose to autocomplete a previous input --> */}
                
                <div className="mb-3 mt-4">
                    <input className="form-input" value={form.values.name} onChange={form.handleChange} type="text" name="name" id="name" title="Name" placeholder="Name" tabIndex="1" autoComplete="name" />
                </div>

                <div className="mb-3">
                    <input className="form-input" value={form.values.email} onChange={form.handleChange} type="text" name="email" id="email" title="Email" placeholder="Email" tabIndex="2" autoComplete="email" />
                </div>

                <div className="mb-5">
                    <textarea className="form-input" value={form.values.message} onChange={form.handleChange} type="text" name="message" id="message" title="Message" placeholder="Message" tabIndex="3" autoComplete="message" ></textarea>
                </div>

                <div className="d-grid">
                    <button className="btn-theme" type="submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
                </div>

            </form>

        </div>
    </section>
  )
}

export default ContactForm