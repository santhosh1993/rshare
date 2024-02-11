import {
  RconConfigInterface,
  useLocalStorage,
} from '@src/hooks/common/useLocalStorage';
import {useCallback} from 'react';

export const usePorjectDetail = () => {
  const {getRcon, storeRcon} = useLocalStorage({source: 'projectDetail'});
  const getProject = useCallback(async (rconId: string) => {
    let rcon: RconConfigInterface | null = null;
    try {
      rcon = getRcon({rconId: rconId});
    } catch (e) {}

    if (rcon) {
      return rcon;
    }

    try {
      await storeRcon({rconId: rconId});
      rcon = getRcon({rconId: rconId});
    } catch (e) {
      throw e;
    }

    return rcon;
  }, []);

  return {getProject};
};
