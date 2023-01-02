import { useAuth } from 'common/context/auth';
import { PropsWithChildren } from 'react';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren<{}>) {
  const { authorized } = useAuth();
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center bg-black text-white md:flex-row">
      <div className="order-1 flex w-full flex-1 justify-center">
        {children}
      </div>
      {authorized && <Header />}
    </main>
  );
}
