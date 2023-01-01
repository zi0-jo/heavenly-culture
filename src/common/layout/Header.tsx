import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Menu from './Menu';

export default function Header() {
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <div className="z-1 flex w-full flex-col items-center md:w-auto md:items-start">
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
        className={`fixed inset-0 mt-[45px] h-full w-full bg-black md:static md:block md:pt-0 ${
          opened ? '' : 'hidden'
        }`}
      >
        <Menu />
      </div>
    </div>
  );
}
