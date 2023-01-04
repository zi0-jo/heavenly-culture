import { HTMLAttributes, PropsWithChildren } from 'react';

export default function Title({
  children,
  className,
  ...props
}: PropsWithChildren<{ className?: string }> &
  HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-3xl font-bold ${className}`} {...props}>
      {children}
    </h3>
  );
}
