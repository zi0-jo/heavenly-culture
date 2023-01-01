import { useAuth } from 'common/context/auth';
import DataProvider from 'common/context/data';
import { PropsWithChildren } from 'react';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren<{}>) {
  const { authorized } = useAuth();
  return (
    <DataProvider>
      <main className="flex h-screen w-screen flex-col items-center justify-center md:flex-row">
        {authorized && <Header />}
        <div className="flex flex-1 justify-center">{children}</div>
      </main>
    </DataProvider>
  );
}
