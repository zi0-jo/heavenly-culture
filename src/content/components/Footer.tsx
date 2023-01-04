import Button from 'common/components/Button';
import ScrollDown from 'common/components/ScrollDown.tsx';
import { Department } from 'common/type';
import { useState } from 'react';
import QuestionPopup from './QuestionPopup';

type Props = Department & { hiddenScroll: boolean };

export default function Footer({ hiddenScroll, name, formUrl, phone }: Props) {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      {opened && !!phone && (
        <QuestionPopup
          phone={phone}
          name={name}
          onClose={() => setOpened(false)}
        />
      )}
      <div className="fixed inset-x-0 bottom-0 z-10 flex h-[100px] w-full items-center justify-between bg-gradient-to-t from-black md:left-[260px] md:h-[110px] md:w-[calc(100%-260px)]">
        <div className="hidden w-[267px] md:block" />

        <div className="flex-1">{!hiddenScroll && <ScrollDown />}</div>
        <div>
          <Button onClick={() => setOpened(true)}>문의하기</Button>
          <Button className="mx-3">
            <a href={formUrl} target="_blank" rel="noreferrer">
              지원하기
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
