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
    <form className="flex items-center" onSubmit={submit}>
      <Input
        className="shrink"
        onChange={handleChangeCode}
        placeholder="코드 입력"
      />
      <Button className="ml-2 shrink-0" type="submit">
        입력
      </Button>
    </form>
  );
}
