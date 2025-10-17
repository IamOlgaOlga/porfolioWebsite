import React from 'react';

export function Intro() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-4 pt-20 pb-6 md:flex-row">
      <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-stone-900 dark:border-stone-300">
        <img
          src="/assets/avatar.png"
          alt="Portrait of Olga Ostrikova"
          className="h-36 w-36 cursor-pointer object-cover"
        />
      </div>

      <div className="place-self-start space-y-4">
        <div>
          <h1 className="mb-1 text-4xl font-bold md:mb-3 md:text-7xl">Olga Ostrikova</h1>
        </div>
        <div className="mb-3 text-base font-medium md:text-xl">Software Engineer</div>

        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>iamolgaostrikova@gmail.com</span>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span>Lisbon, Portugal</span>
          </div>
        </div>

        <div className="mb-6 text-sm font-bold">
          Software Engineer with 7+ years of experience in international IT companies.
          <p className="mb-6 text-sm font-bold">
            Here is my{' '}
            <a
              href="https://www.linkedin.com/in/iamolgaostrikova"
              target="_blank"
              className="text-blue-500 underline decoration-2 underline-offset-2 dark:text-fuchsia-300 dark:decoration-blue-300 hover:underline"
              rel="noreferrer noopener"
            >
              LinkedIn profile
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}