import { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './Menu';

export default function Header() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div
      className={`fixed inset-0 flex w-full flex-col items-center px-4 md:static md:w-auto md:items-start md:px-10 ${
        opened ? 'z-30 h-full bg-black md:z-0' : ''
      }`}
    >
      <div className="flex h-[45px] w-full items-center justify-between">
        <button
          className="order-1 flex h-full w-[50px] items-center justify-center md:hidden"
          onClick={() => setOpened(!opened)}
        >
          <FontAwesomeIcon icon={opened ? faXmark : faBars} />
        </button>
        <div className="order-3 w-[50px] md:hidden" />
        <header className="order-2 text-xl font-bold">
          마태지파 하늘 문화부
        </header>
      </div>
      <div
        className={`w-full flex-1 md:block md:pt-0 ${opened ? '' : 'hidden'}`}
      >
        <Menu onSelect={() => setOpened(false)} />
      </div>
    </div>
  );
}
