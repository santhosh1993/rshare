import {Button, ButtonType} from '@common/button';
import {View} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Routes} from '@src/root/router/routes';
import {ShareProjectInterface} from '../share-project.interface';

export const ShareCta = ({rconId}: ShareProjectInterface) => {
  const nav = useNavigation();
  const onPreviewTap = useCallback(() => {
    nav.global.navigate({
      route: Routes.PROJECTDETAIL,
      params: {
        id: rconId,
        name: '',
        phoneNo: '',
      },
    });
  }, [nav.global, rconId]);

  const onShareTap = useCallback(() => {}, []);

  return (
    <View style={{flexDirection: 'row'}}>
      <Button
        type={ButtonType.SecondaryButton}
        props={{
          label: 'Preview',
          style: {marginHorizontal: 6, marginLeft: 12},
        }}
        style={{flex: 1}}
        onPress={onPreviewTap}
      />
      <Button
        type={ButtonType.PrimaryButton}
        props={{
          label: 'Share',
          style: {marginHorizontal: 6, marginRight: 12},
        }}
        style={{flex: 1}}
        onPress={onShareTap}
      />
    </View>
  );
};
