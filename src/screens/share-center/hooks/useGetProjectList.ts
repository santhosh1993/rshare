import {ShareCardInterface} from '@src/components/shareCard/shareCard';
import {useLocalStorage} from '@src/hooks/common/useLocalStorage';
import {useCallback} from 'react';

export const useShareCenter = () => {
  const {getRconList, getRcon} = useLocalStorage({source: 'ShareCenter'});
  //const updateData = useShareCenterStore(s => s.updateData)
  const getList = useCallback(() => {
    const rconList = getRconList();
    console.log("---->>>   rconConfig.configData.isEditEnabled", rconList)
    let rconConfigList: Array<ShareCardInterface> = [];
    for (let i = 0; i < rconList.length; i++) {
      try {
        const rconDate = rconList[i];
        const rconConfig = getRcon({rconId: rconDate.rconId});
        console.log("---->>>   rconConfig.configData.isEditEnabled", rconConfig)
        const shareCardRconConfig: ShareCardInterface = {
          images: rconConfig.configData.data
            .map(data => data.content.map(content => content.url))
            .flat(),
          rconName: rconConfig.configData.details.title,
          rconDescription: rconConfig.configData.details.descrption,
          phoneNo: rconConfig.configData.sharedUserDetails?.phoneNo ?? '',
          userName: rconConfig.configData.sharedUserDetails?.name ?? '',
          rconId: rconDate.rconId,
          showEdit: rconConfig.configData.isEditEnabled,
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
