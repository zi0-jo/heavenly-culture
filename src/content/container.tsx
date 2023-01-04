import ScrollDown from 'common/components/ScrollDown.tsx';
import { useData } from 'common/context/data';
import useIntersection from 'common/hook/useIntersection';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Condition from './components/Condition';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Team from './components/Team';

export default function Content() {
  const { id } = useParams();
  const { getFirstData, getContentById } = useData();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const content = useMemo(() => {
    if (!id) return getFirstData();

    return getContentById(id);
  }, [id, getContentById, getFirstData]);

  useEffect(() => {
    containerRef.current?.scrollTo(0, 0);
  }, [content]);

  const bottomEl = useRef<HTMLDivElement>(null);

  const [hiddenScroll, setHiddenScroll] = useState<boolean>(false);

  const handler = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].intersectionRatio >= 0.5) {
      setHiddenScroll(true);
    } else {
      setHiddenScroll(false);
    }
  }, []);

  useIntersection(bottomEl, handler, { threshold: [0.5] });

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
        className="relative h-screen w-full overflow-scroll bg-black/50"
        id="content-container"
        ref={containerRef}
      >
        <div className="px-5 md:px-10">
          <Intro {...content} className="h-screen" />
          <div className="min-h-[130vh]">
            {!!content.teams && <Team {...content} className="pb-[30%]" />}
            {!!content.conditions && (
              <Condition {...content} className="pb-[30%]" />
            )}
          </div>
          <Footer hiddenScroll={hiddenScroll} {...content} />
        </div>

        <div ref={bottomEl} className="order-2 h-1 w-full" />
      </div>
    </div>
  ) : null;
}
