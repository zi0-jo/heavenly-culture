// import { getData } from 'common/context/data';
import { useData } from 'common/context/data';

export default function Menu() {
  const data = useData();

  return (
    <ul className="text-left">
      {data?.map(dep => (
        <li key={dep.name}>{dep.name}</li>
      ))}
    </ul>
  );
}
