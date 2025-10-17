import React from 'react';
import { Title } from './Title';

export function ContactForm() {
  return (
    <div className="mx-auto mb-10 flex flex-col">
      <div className="flex items-center justify-center">
        <form
          action="https://getform.io/f/a2365323-8cd9-4fa7-8f7c-c6a43c2b44f0"
          method="POST"
          className="flex w-full flex-col md:w-7/12"
        >
          <Title>Contact</Title>

          <label className="sr-only" htmlFor="userName">Name</label>
          <input
            id="userName"
            type="text"
            name="userName"
            placeholder="Name"
            autoComplete="name"
            required
            className="rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />

          <label className="sr-only" htmlFor="userEmail">Email</label>
          <input
            id="userEmail"
            type="email"
            name="userEmail"
            placeholder="Email"
            autoComplete="email"
            required
            className="my-2 rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />

          <label className="sr-only" htmlFor="userMessage">Message</label>
          <textarea
            id="userMessage"
            name="userMessage"
            placeholder="Message"
            rows={10}
            required
            className="mb-4 rounded-md border-2 bg-transparent p-2 focus:outline-none"
          />

          <button
            type="submit"
            className="inline-block w-max rounded-md bg-gradient-to-r from-amber-300 to-fuchsia-300 px-8 py-3 text-base font-medium text-white drop-shadow-md hover:opacity-90"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
}