import { useData } from 'common/context/data';
import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Team from './components/Team';

export default function Content() {
  const { id = 'design' } = useParams();
  const { getContentById } = useData();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const content = useMemo(() => {
    if (!id) return null;

    return getContentById(id);
  }, [id, getContentById]);

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  }, [content]);

  return content ? (
    <div
      className="h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={
        content.images
          ? {
              backgroundImage: `url('images/${content.id}/${content.images?.[0]}')`,
            }
          : {}
      }
    >
      <div
        className="h-screen w-full overflow-scroll bg-black/50"
        id="content-container"
        ref={containerRef}
      >
        <div className="px-5 md:px-10">
          <Intro {...content} className="h-screen" />
          {!!content.teams && <Team {...content} className="mb-[50%]" />}
          <Footer {...content} />
        </div>
      </div>
    </div>
  ) : null;
}
