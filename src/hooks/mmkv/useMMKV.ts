import {useCallback} from 'react';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const useMMKV = () => {
  const set = useCallback((key: string, value: boolean | number | string) => {
    storage.set(key, value);
  }, []);

  const getString = useCallback((key: string) => {
    return storage.getString(key);
  }, []);

  const getNumber = useCallback((key: string) => {
    return storage.getNumber(key);
  }, []);

  const getBoolean = useCallback((key: string) => {
    return storage.getBoolean(key);
  }, []);

  return {set, getString, getBoolean, getNumber};
};
