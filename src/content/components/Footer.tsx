import Button from 'common/components/Button';
import { Department } from 'common/type';
import { useState } from 'react';
import QuestionPopup from './QuestionPopup';

type Props = Department;

export default function Footer({ name, formUrl, phone }: Props) {
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
      <div className="fixed bottom-10 right-10 flex w-full items-end justify-end">
        {!!phone && <Button onClick={() => setOpened(true)}>문의하기</Button>}
        <Button className="ml-3">
          <a href={formUrl} target="_blank" rel="noreferrer">
            지원하기
          </a>
        </Button>
      </div>
    </>
  );
}
