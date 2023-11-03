import {useCallback} from 'react';

const useMMKV = () => {
  const set = useCallback(() => {}, []);

  const get = useCallback(() => {}, []);

  return {set, get};
};
