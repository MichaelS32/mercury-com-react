import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section id="contact">
            <div className='container center'>
                <div className="card contact-card">
                    <div className="card-body">
                        <h1 className="card-title form-text-1">Contact Us</h1>
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='contact-field'>Name:</label>
                                <input type="text" name="name" className='form-input contact-field' defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className='contact-field'>Email address:</label>
                                <input type="email" name="email" className='form-input contact-field' defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="message" className='contact-field'>Message:</label>
                                <textarea name="message" rows="5" className='form-input contact-field' defaultValue={message} onBlur={handleChange} />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button data-testid="button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;