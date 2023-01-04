import ScrollDown from 'common/components/ScrollDown.tsx';
import { Department } from 'common/type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface Props extends Department {
  className?: string;
}

export default function Intro({ name, bio, description, className }: Props) {
  useEffect(() => {
    setAnimation();
  }, []);

  return (
    <div
      className={`relative flex h-screen flex-col justify-center ${
        className ?? ''
      }`}
      id="intro-section"
    >
      <div
        id="info-section-bio"
        className="mb-5 w-[75%] font-nanum text-3xl md:w-[55%]"
      >
        <p>{bio}</p>
        <div className="bg-orange-400/80 text-right text-black">{name}</div>
      </div>
      <p id="info-section-desc" className="whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}

const setAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        start: 'top top',
        end: '120 top',
        scrub: true,
        trigger: '#intro-section',
        scroller: '#content-container',
      },
    })
    .add('first')
    .fromTo('#info-section-bio', { y: 100 }, { y: 0, opacity: 1 })
    .add('second')
    .fromTo(
      '#info-section-desc',
      { y: 100, opacity: 0.2 },
      { y: 0, opacity: 1 },
    );
};
