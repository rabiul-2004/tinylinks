"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { LinkIcon, Copy, CheckCircle2, AlertCircle } from 'lucide-react'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [copied, setCopied] = useState(false)
    const [status, setStatus] = useState(null) // "success" | "error"
    const [message, setMessage] = useState("")

    const generate = () => {
        if (!url.trim() || !shorturl.trim()) {
            setStatus("error")
            setMessage("Both fields are required.")
            return
        }

        try {
            new URL(url) // throws if invalid
        } catch {
            setStatus("error")
            setMessage("Please enter a valid URL.")
            return
        }

        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const raw = JSON.stringify({ url, shorturl })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch("/api/generate", requestOptions)
            .then((res) => res.json())
            .then((result) => {
                setMessage(result.message)

                if (result.status === "Success") {
                    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                    setStatus("success")
                    setCopied(false)
                    setUrl("")
                    setShorturl("")
                } else {
                    setGenerated("") // clear previous link if error
                    setStatus("error")
                }
            })
            .catch(() => {
                setMessage("Something went wrong. Please try again later.")
                setGenerated("")
                setStatus("error")
            })
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generated)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className='flex flex-col items-center gap-6 py-6 mt-8 mb-8 md:w-[70%] md:mx-auto rounded-lg mx-1 px-4 bg-blue-300'>
            {/* Guide box */}
            <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-md text-sm">
                <h2 className="text-lg font-semibold mb-2">How it works</h2>
                <ol className="list-decimal list-inside space-y-1">
                    <li>Enter a long URL (e.g. https://example.com/page123456).</li>
                    <li>Enter a preferred short ID (e.g. mylink123).</li>
                    <li>Click <strong>Generate</strong>.</li>
                    <li>You’ll get a short link like <code>https://tinylinks.site/mylink123</code>.</li>
                    <li>Copy & share it with anyone!</li>
                </ol>
            </div>

            {/* Heading */}
            <h1 className='font-bold text-3xl text-center flex items-center gap-2'>
                <LinkIcon size={28} /> Generate your clean URLs
            </h1>

            {/* Input form */}
            <div className='flex flex-col gap-4 w-full max-w-md md:max-w-full'>
                <input
                    className='p-2 bg-amber-50 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
                    type="text"
                    value={url}
                    placeholder='Enter your long URL'
                    onChange={(e) => setUrl(e.target.value)}
                />
                <div className='w-full flex flex-col md:flex-row md:gap-2 gap-6'>
                    <input
                        className='p-2 bg-amber-50 rounded-full w-full md:w-3/4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        type="text"
                        value={shorturl}
                        placeholder='Enter preferred URL'
                        onChange={(e) => setShorturl(e.target.value)}
                    />
                    <button
                        className='bg-blue-800 text-white hover:bg-blue-600 cursor-pointer px-3 py-2 rounded-full w-full md:w-1/4'
                        onClick={generate}
                    >
                        Generate
                    </button>
                </div>
            </div>

            {/* Status Message Box */}
            {status && (
                <div
                    className={`p-4 rounded-md shadow-md w-full max-w-md mt-4 ${status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                >
                    <div className="flex items-center gap-2 mb-2 font-semibold">
                        {status === "success" ? (
                            <>
                                <CheckCircle2 size={20} /> Short URL created successfully!
                            </>
                        ) : (
                            <>
                                <AlertCircle size={20} /> Failed to create short URL
                            </>
                        )}
                    </div>
                    <div className="text-sm">{message}</div>
                    {status === "success" && (
                        <div className="flex items-center justify-between bg-blue-50 rounded p-2 mt-3">
                            <Link href={generated} target="_blank" className="text-blue-800 underline break-all">
                                {generated}
                            </Link>
                            <button onClick={copyToClipboard} className="hover:text-blue-600">
                                {copied ? <span className="text-sm">Copied!</span> : <Copy size={18} />}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Shorten
