import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <div
      className={`inline-block px-4 py-2 border-solid border-1 rounded-md border-gray-600 ${className}`}
    >
      <input className="outline-none" {...props} />
    </div>
  );
}
