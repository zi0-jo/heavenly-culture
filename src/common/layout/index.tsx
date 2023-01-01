import { useAuth } from 'common/context/auth';
import DataProvider from 'common/context/data';
import { PropsWithChildren } from 'react';
import Header from './Header';

export default function Layout({ children }: PropsWithChildren<{}>) {
  const { authorized } = useAuth();
  return (
    <DataProvider>
      <main className="relative flex h-full flex-col items-center justify-center bg-black text-white md:flex-row md:p-20">
        {authorized && <Header />}
        <div className="flex w-full flex-1 justify-center px-10 md:ml-[40px]">
          {children}
        </div>
      </main>
    </DataProvider>
  );
}
