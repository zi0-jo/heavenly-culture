import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Props) {
  return (
    <div
      className={`inline-block rounded-md bg-white/30 px-4 py-2 ${className}`}
    >
      <input className="bg-transparent outline-none" {...props} />
    </div>
  );
}
