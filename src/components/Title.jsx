import React from 'react';

export function Title({ children, id, className = '' }) {
  const combinedClassName = `mb-5 text-2xl font-bold underline decoration-4 underline-offset-8 text-stone-900 dark:text-white ${className}`;
  return (
    <h1 id={id} className={combinedClassName}>
      {children}
    </h1>
  );
}