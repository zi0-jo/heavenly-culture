import { Department } from 'common/type';

interface Props extends Department {
  className?: string;
}

export default function Intro({ bio, description, className }: Props) {
  return (
    <div className={`flex flex-col justify-center ${className ?? ''}`}>
      <p className="mb-5 font-nanum text-3xl font-bold">{bio}</p>
      <p className="whitespace-pre-line">{description}</p>
    </div>
  );
}
