import { useData } from 'common/context/data';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

export default function Content() {
  const { id = 'design' } = useParams();
  const { getContentById } = useData();

  const content = useMemo(() => {
    if (!id) return null;

    return getContentById(id);
  }, [id, getContentById]);

  return content ? (
    <div>
      <div className="flex h-screen flex-col justify-center">
        <p className="mb-5 font-nanum text-3xl font-bold">{content.bio}</p>
        <p className="whitespace-pre-line">{content.description}</p>
      </div>
    </div>
  ) : null;
}
