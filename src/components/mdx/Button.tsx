'use client';

import * as React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className = "", ...props }: Props) {
  return (
    <button
      {...props}
      className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ${className}`}
    />
  );
}
