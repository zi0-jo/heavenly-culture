// import { getData } from 'common/context/data';
import { useData } from 'common/context/data';
import { Link, useParams } from 'react-router-dom';

interface Props {
  onSelect: () => void;
}

export default function Menu({ onSelect }: Props) {
  const { data } = useData();
  const { id } = useParams();

  return (
    <ul className="text-center md:ml-[40px] md:text-left [&>*]:my-2">
      {data?.map((dep, index) => {
        const selected = (!id && index === 0) || id === dep.id;
        return (
          <li key={dep.name} className={selected ? 'text-yellow-500' : ''}>
            <Link to={`/${dep.id}`} onClick={onSelect}>
              {dep.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
