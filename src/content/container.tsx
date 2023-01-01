import { useData } from 'common/context/data';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './components/Footer';
import Intro from './components/Intro';

export default function Content() {
  const { id = 'design' } = useParams();
  const { getContentById } = useData();

  const content = useMemo(() => {
    if (!id) return null;

    return getContentById(id);
  }, [id, getContentById]);

  return content ? (
    <div className="w-full overflow-y-scroll px-5 md:px-10">
      <Intro {...content} className="min-h-screen" />
      <Footer {...content} />
    </div>
  ) : null;
}
