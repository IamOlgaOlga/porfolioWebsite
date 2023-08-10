import React from "react";

function Intro() {
    return (
           <div class="flex flex-col md:flex-row items-center gap-4 justify-evenly pt-20 pb-6">
                <div className="border-2 border-stone-900 dark:border-stone-300 rounded-full w-36 h-36 overflow-hidden">
                        <img
                        src="/assets/avatar.png"
                        alt="portfolio"
                        className="border-bottom-2 border-bottom-stone-900 dark:border-bottom-stone-300 w-36 h-36 object-cover cursor-pointer"
                        />
                </div>
                <div class="place-self-start space-y-4">
                    <div>
                    <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Olga Ostrikova</h1></div>
                    <div className="text-base md:text-xl mb-3 font-medium">Software Engineer</div>
                    <div class="flex flex-col">
                        <div class="flex flex-col-2 gap-x-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 16" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg></div>
                            <div>iamolgaostrikova@gmail.com</div>
                        </div>
                        <div class="flex flex-col-2 gap-x-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg></div>
                            <div>Lisbon, Portugal</div>
                        </div>
                    </div>
                    <div className="text-sm md:text-sm mb-6 font-bold">Software Engineer with 7+ years of experience in international IT companies.
                        <p className="text-sm md:text-sm mb-6 font-bold">Here is my{' '}
                            <a href="https://www.linkedin.com/in/iamolgaostrikova" 
                                target="_blank" 
                                className="text-blue-500 dark:text-fuchsia-300 hover:underline underline-offset-2 decoration-2 decoration-fuchsia-300 dark:decoration-blue-300" rel="noreferrer noopener">
                            LinkedIn profile</a>.
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Intro;