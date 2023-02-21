import React from "react";

function Intro() {
    return (
        <div className="flex item-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Olga Ostrikova</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software engineer, <div class="pin"></div> Dubai, UAE</p>
            <p className="text-sm md:text-sm mb-6 font-bold">Software Developer with 7+ years of experience in international IT companies. Here if my{' '}
            <a href="https://www.linkedin.com/in/iamolgaostrikova" 
            target="_blank" 
            className="text-blue-500 dark:text-fuchsia-300 hover:underline underline-offset-2 decoration-2 decoration-fuchsia-300 dark:decoration-blue-300" rel="noreferrer noopener">
                LinkedIn profile</a>{' '}.
                </p>
            </div>
    )
}

export default Intro;