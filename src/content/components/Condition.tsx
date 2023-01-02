import { Department } from 'common/type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

interface Props extends Department {
  className?: string;
}

export default function Condition({ className }: Props) {
  useEffect(() => {
    setAnimation();
  }, []);
  return (
    <div
      className={`flex w-full items-start justify-center ${className}`}
      id="condition-section"
    >
      <ul
        className={`text-md max-w-[650px] p-4 text-black [&>li]:mb-3 [&>li]:w-full [&>li]:rounded-full [&>li]:bg-yellow-400/80 [&>li]:py-2 [&>li]:px-5`}
      >
        <li>공통: 신천지 하늘문화행사 스텝 1회 참석한 성도 </li>
        <li>캐드 작업 가능자 및 관심 있는 성도 </li>
        <li>엑셀, PPT 작업 가능자 및 관심 있는 성도</li>
        <li>조명 및 미디어아트 경력자 및 관심 있는 성도</li>
      </ul>
    </div>
  );
}

const setAnimation = () => {
  gsap
    .timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        start: 'center bottom',
        end: 'bottom center',
        markers: true,
        scrub: true,
        trigger: '#condition-section',
        scroller: '#content-container',
      },
    })
    .add('first')
    .fromTo(
      '#condition-section li',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
    );
};
