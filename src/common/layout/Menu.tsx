// import { getData } from 'common/context/data';
import { useData } from 'common/context/data';
import { Link } from 'react-router-dom';

interface Props {
  onSelect: () => void;
}

export default function Menu({ onSelect }: Props) {
  const { data } = useData();

  return (
    <ul className="text-center md:text-left [&>*]:my-2">
      {data?.map(dep => (
        <li key={dep.name}>
          <Link to={`/${dep.id}`} onClick={onSelect}>
            {dep.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
