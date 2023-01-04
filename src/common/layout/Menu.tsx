// import { getData } from 'common/context/data';
import { useData } from 'common/context/data';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  onSelect: () => void;
}

export default function Menu({ onSelect }: Props) {
  const { data } = useData();
  const { pathname } = useLocation();
  const [selected, setSelected] = useState<number>(-1);

  useEffect(() => {
    const id = pathname.replace('/', '');
    setSelected(data?.findIndex(item => item.id === id) ?? -1);
  }, [data, pathname, selected]);

  return (
    <ul className="text-center md:ml-[40px] md:text-left [&>*]:my-2">
      {data?.map((dep, index) => {
        return (
          <li
            key={dep.name}
            className={selected === index ? 'text-yellow-500' : ''}
          >
            <Link to={`/${dep.id}`} onClick={onSelect}>
              {dep.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
