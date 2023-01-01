import { ChangeEvent, useState } from 'react';
import { useAuth } from 'common/context/auth';
import Button from 'common/components/Button';
import Input from 'common/components/Input';

export default function Auth() {
  const { authorize } = useAuth();
  const [code, setCode] = useState<string>('');

  const handleChangeCode = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  };

  const submit = () => {
    if (!authorize(code)) {
      alert('코드를 확인해주세요');
    }
  };

  return (
    <div>
      <Input onChange={handleChangeCode} />
      <Button className="ml-2" onClick={submit}>
        입력
      </Button>
    </div>
  );
}