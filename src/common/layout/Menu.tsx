// import { getData } from 'common/context/data';
import { useData } from 'common/context/data';

export default function Menu() {
  const data = useData();

  return (
    <ul className="text-center md:text-left [&>*]:my-2">
      {data?.map(dep => (
        <li key={dep.name}>
          <button>{dep.name}</button>
        </li>
      ))}
    </ul>
  );
}
