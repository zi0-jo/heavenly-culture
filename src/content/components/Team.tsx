import Tag from 'common/components/Tag';
import { Department } from 'common/type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface Props extends Department {
  className?: string;
}

export default function Team({ teams, className }: Props) {
  return (
    <div className={`flex w-full items-start justify-center ${className}`}>
      <div
        className={`grid max-w-[650px] grid-cols-5 items-center gap-y-4 gap-x-3 rounded-md bg-black/50 p-4`}
      >
        {teams?.map(team => (
          <>
            <div className="col-span-2 flex items-start">
              <Tag>{team.name}</Tag>
            </div>
            <div className="col-[3/-1]">{team.description}</div>
          </>
        ))}
      </div>
    </div>
  );
}
