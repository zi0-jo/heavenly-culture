import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  className,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <button
      className={`rounded-full px-8 py-2 text-sm font-bold ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}

const VARIANTS: { [key in Variant]: string } = {
  primary: 'border-2',
  secondary: 'bg-black text-white',
};
