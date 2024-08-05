import React, { useState } from "react";

const ContactForm = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        // Basic form validation
        if (!fullname || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullname, email, message }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFullname("");
                setEmail("");
                setMessage("");
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }
    };

    if (submitted) {
        return (
            <div className="mt-4 mb-4 max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold text-green-600">Thank you for your message!</h2>
                <p>I'll get back to you as soon as possible.</p>
            </div>
        );
    }

    return (
        <div className="mt-4 mb-4 max-w-3xl mx-auto">
            <form 
                onSubmit={handleSubmit}
                className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
                <h1 className="text-2xl font-bold dark:text-gray-50">Ready to Start a Project Together?</h1>
                <p><br />I would love to work with you. Fill out the form below to tell me more.</p>
                
                {error && <p className="text-red-500 mt-4">{error}</p>}

                <label htmlFor="fullname" className="font-bold mt-8 dark:text-gray-50">Full name <span className="text-red-500 dark:text-gray-50">*</span></label>
                <input 
                    type="text" 
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    name="fullname" 
                    placeholder="J Doe" 
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" 
                />

                <label htmlFor="email" className="font-bold mt-4 dark:text-gray-50">E-mail <span className="text-red-500">*</span></label>
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email" 
                    placeholder="j.doe@gmail.com" 
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" 
                />

                <label htmlFor="message" className="font-bold mt-4 dark:text-gray-50">Tell me about your project <span className="text-red-500">*</span></label>
                <textarea 
                    name="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Mike, I have got a website that needs delivering professionally, on time and on budget." 
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                ></textarea>

                <div className="mt-4 flex flex-row items-center justify-start">
                    <button  
                        type="submit"
                        className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                            border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark'
                    >
                        Send
                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-500 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;