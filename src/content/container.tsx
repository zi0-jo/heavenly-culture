import { useData } from 'common/context/data';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Intro from './components/intro';

export default function Content() {
  const { id = 'design' } = useParams();
  const { getContentById } = useData();

  const content = useMemo(() => {
    if (!id) return null;

    return getContentById(id);
  }, [id, getContentById]);

  return content ? (
    <div>
      <Intro
        bio={content.bio}
        description={content.description}
        className="min-h-screen"
      />
    </div>
  ) : null;
}
