import {ShareCardInterface} from '@src/components/shareCard/shareCard';
import {useLocalStorage} from '@src/hooks/common/useLocalStorage';
import {useCallback} from 'react';

export const useShareCenter = () => {
  const {getRconList, getRcon} = useLocalStorage({source: 'ShareCenter'});
  const getList = useCallback(() => {
    const rconList = getRconList();
    let rconConfigList: Array<ShareCardInterface> = [];
    for (let i = 0; i < rconList.length; i++) {
      try {
        const rconDate = rconList[i];
        const rconConfig = getRcon({rconId: rconDate.rconId});

        const shareCardRconConfig: ShareCardInterface = {
          images: rconConfig.configData.data
            .map(data => data.content.map(content => content.url))
            .flat(),
          rconName: rconConfig.configData.details.title,
          rconDescription: rconConfig.configData.details.descrption,
          phoneNo: rconConfig.configData.sharedUserDetails?.phoneNo ?? '',
          userName: rconConfig.configData.sharedUserDetails?.name ?? '',
          rconId: rconDate.rconId,
        };
        rconConfigList.push(shareCardRconConfig);
      } catch (e) {
        console.log(e, 'Errorrrr');
      }
    }
    return rconConfigList;
  }, [getRconList, getRcon]);

  return {getList};
};
