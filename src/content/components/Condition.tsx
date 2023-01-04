import Title from 'common/components/Title';
import { Department } from 'common/type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

interface Props extends Department {
  className?: string;
}

export default function Condition({ conditions, className }: Props) {
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
        id="condition-list"
        className={`text-md max-w-[650px] rounded-lg bg-yellow-400/80 p-10 text-black md:text-lg`}
      >
        {conditions?.map((condition, index) => {
          if (typeof condition === 'string') {
            return (
              <li key={index} className={LI_CLASSNAME}>
                {condition}
              </li>
            );
          } else {
            return (
              <li key={index} className="mt-4 first-of-type:mt-0">
                <strong className="mb-2 text-xl">{condition.name}</strong>
                <ul>
                  {condition.conditions.map((s, i) => (
                    <li className={LI_CLASSNAME} key={`${condition.name}_${i}`}>
                      {s}
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

const setAnimation = () => {
  gsap
    .timeline({
      smoothChildTiming: true,
      scrollTrigger: {
        start: 'top bottom',
        end: 'center center',
        // markers: true,
        scrub: true,
        trigger: '#condition-section',
        scroller: '#content-container',
      },
    })
    .add('first')
    .fromTo('#condition-list', { y: 250, opacity: 0 }, { y: 0, opacity: 1 });
};

const LI_CLASSNAME = `relative mb-1 w-full pl-4 before:absolute before:top-[0.5em] before:left-0 before:block before:h-[3px] before:w-[3px] before:rounded-full before:bg-black before:content-[""]`;
