import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Menu from './Menu';

export default function Header() {
  const [opened, setOpened] = useState<boolean>(true);

  return (
    <>
      <div className="fixed flex h-screen w-full flex-col items-center bg-white md:static md:w-auto md:items-start">
        {!opened && (
          <button
            className="absolute left-0 top-0 p-3 md:hidden"
            onClick={() => setOpened(!opened)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
        <header className="px-8 py-2 text-xl font-bold">
          마태지파 문화부 인재모집
        </header>
        {opened && (
          <div className="h-full w-screen md:w-auto">
            <button
              className="absolute right-0 top-0 p-3 md:hidden"
              onClick={() => setOpened(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <Menu />
          </div>
        )}
      </div>
    </>
  );
}
