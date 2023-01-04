import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import lottieJson from 'home/lottie/home.json';
import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useData } from 'common/context/data';
import ScrollDown from 'common/components/ScrollDown.tsx';
import useIntersection from 'common/hook/useIntersection';

export default function Home() {
  const { data } = useData();
  const navigate = useNavigate();
  const bottomEl = useRef<HTMLDivElement>(null);
  const scrollEl = useRef<HTMLDivElement>(null);

  const handler = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!data) {
        return;
      }

      if (entries[0].intersectionRatio === 1) {
        setTimeout(() => {
          navigate(`/${data[0].id}`);
        }, 1000);
      }
    },
    [data, navigate],
  );

  useIntersection(bottomEl, handler, { threshold: 1 });

  useEffect(() => {
    scrollEl.current?.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-scroll" ref={scrollEl}>
      <div className="mb-5 flex h-screen w-full flex-col justify-center text-center font-nanum text-2xl md:text-3xl ">
        <div className="flex flex-1 flex-col justify-center">
          <div className="px-10">
            <Lottie loop animationData={lottieJson} play />
          </div>
          <div className="-mt-10 mb-10">
            약속의 목자의 뜻을 <br />
            문화로 이루어드리는 <strong>하늘문화부</strong>
          </div>
        </div>
        <ScrollDown />
      </div>
      <div ref={bottomEl} className="h-[20px] w-full bg-black" />
    </div>
  );
}
