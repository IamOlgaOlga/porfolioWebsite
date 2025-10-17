import React from 'react';

export function PortfolioItem({ title, imgUrl, imgUrlDark, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="overflow-hidden rounded-md border-2 border-stone-900 dark:border-stone-300"
    >
      {/* Light image */}
      <img
        src={imgUrl}
        alt={title}
        className="h-36 w-full cursor-pointer object-cover border-b-2 border-stone-900 dark:hidden md:h-48"
      />
      {/* Dark image */}
      <img
        src={imgUrlDark}
        alt={title}
        className="hidden h-36 w-full cursor-pointer object-cover border-b-2 border-stone-300 dark:block md:h-48"
      />

      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">{title}</h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs md:text-sm">
          {stack.map((item) => (
            <span key={item} className="inline-block rounded-md border-2 border-stone-900 px-2 py-1 font-semibold dark:border-stone-300">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}