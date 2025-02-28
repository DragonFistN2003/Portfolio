import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactPage() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bgry6yp', 'template_0gr3u0o', form.current, 'mnUUb6BGA6Nv0Y8vR')
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">Contact</h1>
            <p className="mb-8 text-lg">Feel free to reach out!</p>
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_name">
                        Name:
                    </label>
                    <input 
                        type="text" 
                        name="from_name" 
                        id="from_name" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
                        Email:
                    </label>
                    <input 
                        type="email" 
                        name="user_email" 
                        id="user_email" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message:
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    />
                </div>
                <div className="flex items-center justify-between">
                    <input 
                        type="submit" 
                        value="Send" 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    />
                </div>
            </form>
        </div>
    );
}

export default ContactPage;