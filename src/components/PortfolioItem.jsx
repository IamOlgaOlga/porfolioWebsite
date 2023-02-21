import React from "react";

function PortfolioItem({title, imgUrl, imgUrlDark, stack, link }) {
    return (
        <div className="border-2 border-stone-900 dark:border-stone-300 rounded-md overflow-hidden">
            {document.documentElement.classList.contains('dark') ? (
                <img
                src= {imgUrl}
                alt="portfolio"
                className="border-bottom-2 border-bottom-stone-900 dark:border-bottom-stone-300 w-full h-36 md:h-48 object-cover cursor-pointer"
                />
            ) : (
                <img
                src= {imgUrlDark}
                alt="portfolio"
                className="border-bottom-2 border-bottom-stone-900 dark:border-bottom-stone-300 w-full h-36 md:h-48 object-cover cursor-pointer"
                />
            )
            }
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-300 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem;