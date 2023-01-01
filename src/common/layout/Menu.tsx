// import { getData } from 'common/context/data';
import { useData } from 'common/context/data';
import { Link } from 'react-router-dom';

export default function Menu() {
  const data = useData();

  return (
    <ul className="text-center md:text-left [&>*]:my-2">
      {data?.map(dep => (
        <li key={dep.name}>
          <Link to={`/${dep.id}`}>{dep.name}</Link>
        </li>
      ))}
    </ul>
  );
}
