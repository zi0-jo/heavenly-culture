import { PropsWithChildren } from 'react';

export default function Title({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <h3 className={`text-3xl font-bold ${className}`}>{children}</h3>;
}
