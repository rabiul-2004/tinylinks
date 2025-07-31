"use client"

import React, { useState } from "react"
import { Poppins, Roboto } from "next/font/google"
import { CheckCircle2 } from "lucide-react"

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: "800",
})

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
})

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [submitted, setSubmitted] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const raw = JSON.stringify(form)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        }

        fetch("http://localhost:3000/api/feedback", requestOptions)
            .then((res) => res.json())
            .then((result) => {
                setSubmitMessage(result.message)
                setSubmitted(true)
                setForm({ name: "", email: "", message: "" })
                setTimeout(() => {
                    setSubmitted(false)
                    setSubmitMessage("")
                }, 4000)
            })
            .catch((error) => console.error(error))
    }

    return (
        <div className="bg-white text-gray-800 py-10 px-6 md:px-16">
            {/* Header */}
            <h1 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${poppins.className}`}>
                Contact Us
            </h1>
            <p className={`text-center max-w-2xl mx-auto text-base md:text-lg text-gray-600 mb-10 ${roboto.className}`}>
                Got a question, idea, or issue? Reach out to us using the form below and we’ll get back to you as soon as possible.
            </p>

            {/* Form Section */}
            <div className="max-w-2xl mx-auto bg-blue-50 p-6 rounded-xl shadow-md">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="p-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="p-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="p-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="cursor-pointer bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>

                {/* Success Box */}
                {submitted && (
                    <div className="flex items-center gap-2 bg-green-100 text-green-800 mt-6 p-4 rounded-md shadow">
                        <CheckCircle2 size={22} /> <span className="text-sm">{submitMessage}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contact
