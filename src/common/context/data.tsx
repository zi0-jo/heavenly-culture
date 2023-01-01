// import { Department } from 'common/type';

import { Department } from 'common/type';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAuth } from './auth';
import CryptoJS from 'crypto-js';

interface Data {
  data: Department[] | null;
}

const DataContext = createContext<Data>({ data: null });

export default function DataProvider({ children }: PropsWithChildren<{}>) {
  const { authorized } = useAuth();
  const [data, setData] = useState<Department[] | null>(null);

  useEffect(() => {
    if (!authorized) {
      return;
    }

    const fetchData = async () => {
      const list = await getData();
      setData(list);
    };

    fetchData();
  }, [authorized]);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
}

export const useData = () => {
  const { data } = useContext(DataContext);
  return data;
};

export const getData = (): Promise<Department[]> => {
  return fetch('./data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => {
      return JSON.parse(
        CryptoJS.AES.decrypt(
          res.data,
          process.env.REACT_APP_DATA_ENCRIPT_KEY,
        ).toString(CryptoJS.enc.Utf8),
      );
    });
};
