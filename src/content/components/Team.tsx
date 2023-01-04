import Tag from 'common/components/Tag';
import Title from 'common/components/Title';
import { Department } from 'common/type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Fragment, useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

interface Props extends Department {
  className?: string;
}

export default function Team({ teams, className }: Props) {
  useEffect(() => {
    setAnimation();
  }, []);

  return (
    <div
      className={`flex w-full flex-col items-start justify-center md:flex-row ${className}`}
      id="team-section"
    >
      <Title className="mr-5 w-[200px] shrink-0 py-4">팀소개</Title>
      <div
        id="team-list"
        className={`grid max-w-[650px] grid-cols-5 items-center gap-y-4 gap-x-3 rounded-md bg-black/50 p-4`}
      >
        {teams?.map(team => (
          <Fragment key={team.name}>
            <div className="col-span-2 flex items-start">
              <Tag>{team.name}</Tag>
            </div>
            <div className="col-[3/-1] whitespace-pre-line">
              {team.description}
            </div>
          </Fragment>
        ))}
      </div>
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
        trigger: '#team-section',
        scroller: '#content-container',
      },
    })
    .add('first')
    .fromTo('#team-list', { y: 250, opacity: 0 }, { y: 0, opacity: 1 });
};
