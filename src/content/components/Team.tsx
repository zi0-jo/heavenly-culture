import Tag from 'common/components/Tag';
import Title from 'common/components/Title';
import { Department } from 'common/type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Fragment } from 'react';
gsap.registerPlugin(ScrollTrigger);

interface Props extends Department {
  className?: string;
}

export default function Team({ teams, className }: Props) {
  return (
    <div
      className={`flex w-full flex-col items-start justify-center md:flex-row ${className}`}
    >
      <Title className="mr-5 w-[200px] py-4">팀소개</Title>
      <div
        className={`grid max-w-[650px] grid-cols-5 items-center gap-y-4 gap-x-3 rounded-md bg-black/50 p-4`}
      >
        {teams?.map(team => (
          <Fragment key={team.name}>
            <div className="col-span-2 flex items-start">
              <Tag>{team.name}</Tag>
            </div>
            <div className="col-[3/-1]">{team.description}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
