import Button from 'common/components/Button';
import { MouseEvent } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  name: string;
  phone: string;
  onClose: () => void;
}

export default function QuestionPopup({ name, phone, onClose }: Props) {
  const handleClickClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-20 flex h-full w-full items-end justify-center bg-black/50 md:items-center"
      onClick={onClose}
    >
      <div className="rounded-t-md bg-white p-[30px] md:rounded-b-md">
        마태지파 문화부 {name}:{' '}
        <a
          className="border-b-1 border-blue-600 text-blue-600"
          href={`tel:${phone}`}
        >
          {phone}
        </a>
        <div className="mt-2 text-xs text-gray-500">
          번호를 클릭하시면 전화로 연결됩니다.
        </div>
        <div className="mt-[24px] flex justify-end">
          <Button variant="secondary" onClick={handleClickClose}>
            닫기
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')!,
  );
}
