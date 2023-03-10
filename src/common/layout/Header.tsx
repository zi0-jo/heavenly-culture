import { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Header() {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div
      className={`fixed top-0 left-0 flex w-full flex-col items-center md:static md:w-auto md:items-start  ${
        opened ? 'z-30 h-full bg-black md:z-0' : ''
      }`}
    >
      <div className="flex h-[45px] w-full items-center justify-between bg-black/50 px-4 md:bg-transparent md:px-10">
        <button
          className="order-1 flex w-[50px] items-center justify-center md:hidden"
          onClick={() => setOpened(!opened)}
        >
          <FontAwesomeIcon icon={opened ? faXmark : faBars} />
        </button>
        <div className="order-3 w-[50px] md:hidden" />
        <header className="order-2 text-xl font-bold">
          <Link to="/">마태지파 하늘 문화부</Link>
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
