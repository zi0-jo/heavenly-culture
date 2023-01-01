/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    REACT_APP_ACCESS_CODE: string;
    REACT_APP_DATA_ENCRIPT_KEY: string;
  }
}
