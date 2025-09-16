import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsStars } from "react-icons/bs";
import { TbSend } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
            setStatusMessage('Please fill in all required fields.');
            return;
        }

        setIsLoading(true);
        setStatusMessage('');

        try {
            console.log('Sending email with data:', formData);

            // Replace these with your actual EmailJS credentials
            const result = await emailjs.send(
                'service_0qlx1nr',     // Replace with your Service ID
                'template_t0tdxk8',    // Replace with your Template ID
                {
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    to_name: 'Imane'
                },
                'CtXs5u3xNbelEIz9i'      // Replace with your Public Key
            );

            console.log('Email sent successfully:', result);
            setStatusMessage('Message sent successfully! I\'ll get back to you soon.');

            // Clear form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });

        } catch (error) {
            console.error('Error sending email:', error);
            setStatusMessage('Failed to send message. Please try again or contact me directly.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id="contact" className='font-syne flex flex-col pt-[10vh]'>

            <motion.div
                className='flex items-center gap-2 border border-[#d2d6e1] dark:border-[#303033] bg-[#E6EBF4] dark:bg-[#111111] text-[#424550] dark:text-[#C7C6D3] text-[13px] font-bold rounded-3xl px-4 py-2 w-fit'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <BsStars />
                <p>Contact</p>
            </motion.div>

            <motion.div
                className='md:pt-5 pt-2'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
            >
                <p className='md:text-[38px] text-[30px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                    Let's make something awesome together!
                </p>
            </motion.div>

            {/* form */}
            <motion.form
                onSubmit={handleSubmit}
                className='md:py-16 py-10 flex flex-col gap-10'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
            >
                {/* Status Message */}
                {statusMessage && (
                    <div className={`p-4 rounded-lg ${statusMessage.includes('successfully')
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                        {statusMessage}
                    </div>
                )}

                {/* 1 */}
                <div className='flex flex-col md:flex-row md:gap-0 gap-y-10 justify-between'>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false }} className='md:w-[48%] w-[100%]'>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder='Your First Name*'
                            className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]'
                        />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false }} className='md:w-[48%] w-[100%]'>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder='Your Last Name*'
                            className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]'
                        />
                    </motion.div>
                </div>

                {/* 2 */}
                <div className='flex flex-col md:flex-row md:gap-0 gap-y-10 justify-between '>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false }} className='md:w-[48%] w-[100%]'>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Email Address*'
                            className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]'
                        />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false }} className='md:w-[48%] w-[100%]'>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder='Phone Number*'
                            className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]'
                        />
                    </motion.div>
                </div>

                {/* 3 */}
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }} className='w-[100%]'>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder='A Few Words*'
                        rows={4}
                        className='text-[18px] font-bold w-full text-[#424550] dark:text-[#C7C6D3] bg-transparent border-0 border-b-2 border-[#abb1c4]/25 placeholder:text-[#abb1c4] placeholder:dark:text-[#57575d] placeholder:text-[18px] placeholder:font-bold p-4 focus:outline-none focus:border-[#8f56cc] dark:focus:border-[#E1BAC5]'
                    />
                </motion.div>

                {/* btn */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#aa70e0] to-[#7059e2] dark:from-[#E4B8BF] dark:to-[#CEC4EF] text-white dark:text-[#22232c] font-semibold hover:scale-105 transition-transform duration-300 shadow-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isLoading ? 'Sending...' : 'Send Message'} <TbSend />
                    </button>
                </motion.div>
            </motion.form>

            {/* social */}
            <motion.div
                className='flex gap-x-4'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <div className="hover:scale-105 flex items-center justify-center bg-transparent border-[1px] md:w-[11vw] w-[43vw] h-[19vh] p-6 rounded-3xl border-[#d1d5e0] hover:border-[#abb1c4] dark:border-[#303033] transition duration-300 cursor-pointer group">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <a href="https://www.linkedin.com/in/imane-el-ouannane/">
                            <FaLinkedinIn className="md:text-[50px] text-[40px] text-[#abb1c4] dark:text-[#7a7a80] group-hover:text-[#424550] dark:group-hover:text-[#C7C6D3] transition duration-300" />
                        </a>
                    </div>
                </div>

                <div className="hover:scale-105 flex items-center justify-center bg-transparent border-[1px] md:w-[11vw] w-[43vw] h-[19vh] p-6 rounded-3xl border-[#d1d5e0] hover:border-[#abb1c4] dark:border-[#303033] transition duration-300 cursor-pointer group">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <a href="https://github.com/imanee11">
                            <FaGithub className="md:text-[50px] text-[40px] text-[#abb1c4] dark:text-[#7a7a80] group-hover:text-[#424550] dark:group-hover:text-[#C7C6D3] transition duration-300" />
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='py-10 md:w-[80%]'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
            >
                <p className='md:text-[27px] text-[25px] font-bold bg-clip-text text-transparent bg-gradient-light dark:bg-gradient-dark'>
                    Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.
                </p>
            </motion.div>

            {/* info */}
            <motion.div
                className='border-t border-[#d1d5e0] dark:border-[#303033]'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
            >
                <div className='py-10 flex flex-col md:flex-row gap-x-[10vw] gap-y-5'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false }}>
                        <p className='text-[#22232C] dark:text-[#E9E9F1] font-bold'>Location</p>
                        <p className='text-[#666A79] dark:text-[#A1A1AF] hover:dark:text-[#E9E9F1] transition duration-300 cursor-pointer'>Casablanca, Morocco</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false }}>
                        <p className='text-[#22232C] dark:text-[#E9E9F1] font-bold'>Phone</p>
                        <a href="tel:+212633149429">
                            <p className='text-[#666A79] dark:text-[#A1A1AF] hover:dark:text-[#E9E9F1] transition duration-300 cursor-pointer'>06 33 14 94 29</p>
                        </a>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: false }}>
                        <p className='text-[#22232C] dark:text-[#E9E9F1] font-bold'>Email</p>
                        <a href="mailto:imaneelouannane@gmail.com">
                            <p className='text-[#666A79] dark:text-[#A1A1AF] hover:dark:text-[#E9E9F1] transition duration-300 cursor-pointer'>imaneelouannane@gmail.com</p>
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;