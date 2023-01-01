import { HTMLAttributes } from 'react';

type Variant = 'primary';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  className,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <button
      className={`px-8 py-2 rounded-full ${VARIANTS[variant]} ${className}`}
      {...props}
    />
  );
}

const VARIANTS: { [key in Variant]: string } = {
  primary: 'text-white bg-black',
};
