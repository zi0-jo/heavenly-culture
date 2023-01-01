import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <main className="h-screen w-screen flex items-center justify-center flex-col">
      {children}
    </main>
  );
}
