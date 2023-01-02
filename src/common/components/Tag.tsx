import { HTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export default function Tag({
  className,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-bold ${
        VARIANTS[variant]
      } ${className ?? ''}`}
      {...props}
    />
  );
}

const VARIANTS: { [key in Variant]: string } = {
  primary: 'border-2',
  secondary: 'bg-black text-white',
};
