import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    act ion="https://getform.io/f/a2365323-8cd9-4fa7-8f7c-c6a43c2b44f0" 
                    method="POST"
                    className="flex flex-col w-full md:w-7/12">
                    <Title>Contact</Title>
                    <input
                        type="text"
                        name="userName"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
                    <input
                        type="text"
                        name="userEmail"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
                    <textarea
                        name="userMessage"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"/>
                    <button
                        type="button"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-amber-300 to-fuchsia-300 drop-shadow-md hover:stroke-white">
                        Work With Me
                    </button>
                </form>
            </div>    
        </div>
    )
}

export default Contact;