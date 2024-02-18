import {endpoint} from '@common/constants';
import {useLocalStorage} from '@src/hooks/common/useLocalStorage';
import {useUser} from '@src/hooks/common/useUser';
import {FireStoreCollection} from '@src/hooks/firestore/firestore.collections';
import {useFireStore} from '@src/hooks/firestore/usefirestore';
import {useCallback} from 'react';
import {Platform} from 'react-native';
import Toast from 'react-native-toast-message';
import {ShareProjectCardInterFace} from '../share-project.interface';
import Share, {ShareOptions} from 'react-native-share';

export const useShareProject = () => {
  const {userId, userData} = useUser();
  const {getRcon, updateRcon} = useLocalStorage({source: 'shareProject'});
  const {doc} = useFireStore();

  const getQRLink = useCallback(
    async ({rconId}: {rconId: string}) => {
      try {
        const rconData = getRcon({rconId: rconId});
        const currentUserId = await userId();
        if (rconData.configData.sharedRconId === undefined) {
          const sharedDoc = doc(undefined, FireStoreCollection.SHARED_DOCS);
          await sharedDoc.create<FireStoreCollection.SHARED_DOCS>({
            docData: {
              sourceUserId: rconData.rconData.sourceUserId,
              userId: currentUserId.id,
              docId: rconData.rconData.docId,
            },
          });
          updateRcon({rconId: rconId, sharedRconId: sharedDoc.document.id});
          return endpoint() + sharedDoc.document.id;
        } else {
          return endpoint() + rconData.configData.sharedRconId;
        }
      } catch (e) {
        throw e;
      }
    },
    [updateRcon, getRcon, doc, userId],
  );

  const getUserData = useCallback(
    async ({rconId}: {rconId: string}) => {
      try {
        const data = await userData();
        const qrData = await getQRLink({rconId: rconId});
        return {...data, redirectionUrl: qrData};
      } catch (e) {
        Toast.show({
          text1: 'Something went wrong. Please try again after sometime.',
          type: 'error',
        });
        return undefined;
      }
    },
    [userData, getQRLink],
  );

  const shareRcon = useCallback(
    async ({
      props,
      image,
    }: {
      props: ShareProjectCardInterFace;
      image: string;
    }) => {
      const url = props.redirectionUrl;
      const title = props.rconName;
      const message = props.rconName;
      const options: ShareOptions = Platform.select({
        ios: {
          activityItemSources: [
            {
              // For sharing url with custom title.
              placeholderItem: {type: 'url', content: url},
              item: {
                default: {type: 'url', content: url},
              },
              subject: {
                default: title,
              },
            },
            {
              // For sharing url with custom title.
              placeholderItem: {type: 'url', content: image},
              item: {
                default: {type: 'url', content: image},
              },
              subject: {
                default: title,
              },
            },
          ],
        },
        default: {
          title,
          subject: title,
          message: `${message} \n\n${url}`,
          url: image,
        },
      });

      try {
        const ShareResponse = await Share.open(options);
        console.log('Result =>', ShareResponse);
      } catch (error) {
        console.log('Error =>', error);
      }
    },
    [],
  );

  return {getUserData, shareRcon};
};
