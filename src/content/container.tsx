import { useParams } from 'react-router-dom';

export default function Content() {
  const { id } = useParams();

  return <div>{id}</div>;
}
