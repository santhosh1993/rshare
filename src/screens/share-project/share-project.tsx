import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ShareProjectCardInterFace, ShareProjectInterface} from './share-project.interface';
import {Header} from '@common/header';
import {ShareInfo} from './components/share-info';
import {ShareCta} from './components/share-cta';
import {Button, ButtonType, RightBarItemProps} from '@common/button';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Routes} from '@src/root/router/routes';
import {colors} from '@common/colors';
import {shadow} from '@common/shadow.styles';
import SvgEdit from '@src/generated/assets/svgs/Edit';
import { useShareProject } from './hooks/useShareProject';
import { Loader } from '@common/Loader';
import Toast from 'react-native-toast-message';

export const ShareProject: FC<ShareProjectInterface> = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<ShareProjectCardInterFace | undefined>(undefined)
  const {getUserData} = useShareProject()
  const nav = useNavigation();
  const onEditTap = useCallback(() => {
    nav.global.navigate({
      route: Routes.MORE,
      params: {
        source: 'shareScreen',
        onUnMount: onFocus
      },
    });
  }, [nav]);
  const rightBarItem = useMemo(() => {
    const editIcon = <SvgEdit style={styles.shareImage} fill={'#fff'} />;
    const itemProps: RightBarItemProps = {child: editIcon};
    return (
      <Button
        type={ButtonType.RightBarItem}
        props={itemProps}
        onPress={onEditTap}
      />
    );
  }, [onEditTap]);

  const onFocus = useCallback(async () => {
    try {
      setIsLoading(true)
      const userData = (await getUserData({rconId: props.rconId}))
      if (userData == undefined) {
        throw Error("user data undefined")
      }
      setUserData({...props, userName: userData.name, redirectionUrl: userData.redirectionUrl, phoneNo: userData.phoneNo})
      setIsLoading(false)
    }
    catch (e) {
      Toast.show({
        text1: "Something went wrong. Please try again after sometime.",
        type: 'error',
      });
      nav.global.goBack()
    }    
  } , [setIsLoading])

  useEffect(() => {
    onFocus()
  } , [onFocus])

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Header title={'Share RCON'} rightBarItem={rightBarItem} />
        {userData && (<><ShareInfo {...userData}/><ShareCta {...props} /></>)}
      </View>
      {isLoading && <Loader title="Preparing ..." />}
    </View>
  );
};

const styles = StyleSheet.create({
  shareImage: {width: 24, height: 24},
  container: {
    backgroundColor: colors.app.conentBackground,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    ...shadow.container,
  },
});
