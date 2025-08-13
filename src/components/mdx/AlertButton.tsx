'use client';

type Props = { message?: string; children?: React.ReactNode };

export default function AlertButton({ message = 'Ciao!', children }: Props) {
  return (
    <button
      onClick={() => alert(message)}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      {children ?? 'Cliccami'}
    </button>
  );
}
