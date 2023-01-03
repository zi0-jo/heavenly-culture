import Title from 'common/components/Title';
import { Department } from 'common/type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

interface Props extends Department {
  className?: string;
}

export default function Condition({ condition, className }: Props) {
  useEffect(() => {
    setAnimation();
  }, []);
  return (
    <div
      className={`flex w-full flex-col items-start justify-center md:flex-row ${className}`}
      id="condition-section"
    >
      <Title className="mr-5 w-[200px] py-4">지원자격</Title>
      <ul
        className={`text-md max-w-[650px] p-4 text-black [&>li]:mb-3 [&>li]:w-full [&>li]:rounded-full [&>li]:bg-yellow-400/80 [&>li]:py-2 [&>li]:px-5`}
      >
        {condition?.map(str => (
          <li>{str}</li>
        ))}
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
        // markers: true,
        scrub: true,
        trigger: '#condition-section',
        scroller: '#content-container',
      },
    })
    .add('first')
    .fromTo(
      '#condition-section li',
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1 },
    );
};
