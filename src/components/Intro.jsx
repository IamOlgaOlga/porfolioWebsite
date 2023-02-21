import React from "react";

function Intro() {
    return (
           <div class="flex justify-evenly pt-20 pb-6">
                <div className="border-2 border-stone-900 dark:border-stone-300 rounded-full w-36 h-36 overflow-hidden">
                        <img
                        src= "public/assets/IMG_9927.jpg"
                        alt="portfolio"
                        className="border-bottom-2 border-bottom-stone-900 dark:border-bottom-stone-300 w-36 h-36 md:h-48 object-cover cursor-pointer"
                        />
                </div>
                <div class="place-self-start">
                    <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Olga Ostrikova</h1>
                    <p className="text-base md:text-xl mb-3 font-medium">Software Engineer, <div class="pin"></div> Dubai, UAE</p>
                    <p className="text-sm md:text-sm mb-6 font-bold">Software Engineer with 7+ years of experience in international IT companies. Here is my{' '}
            <a href="https://www.linkedin.com/in/iamolgaostrikova" 
            target="_blank" 
            className="text-blue-500 dark:text-fuchsia-300 hover:underline underline-offset-2 decoration-2 decoration-fuchsia-300 dark:decoration-blue-300" rel="noreferrer noopener">
                LinkedIn profile</a>.
                </p>
                </div>
            </div>
    )
}

export default Intro;