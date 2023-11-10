import React, {FC, useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {ShareProjectInterface} from './share-project.interface';
import {Header} from '@common/header';
import {ShareInfo} from './components/share-info';
import {ShareCta} from './components/share-cta';
import {Button, ButtonType, RightBarItemProps} from '@common/button';
import SvgShare from '@src/generated/assets/svgs/Share';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {Routes} from '@src/root/router/routes';
import {colors} from '@common/colors';
import {shadow} from '@common/shadow.styles';

export const ShareProject: FC<ShareProjectInterface> = props => {
  const nav = useNavigation();
  const onEditTap = useCallback(() => {
    nav.global.navigate({
      route: Routes.MORE,
      params: {
        source: 'shareScreen',
      },
    });
  }, [nav]);
  const rightBarItem = useMemo(() => {
    const editIcon = <SvgShare style={styles.shareImage} fill={'#fff'} />;
    const itemProps: RightBarItemProps = {child: editIcon};
    return (
      <Button
        type={ButtonType.RightBarItem}
        props={itemProps}
        onPress={onEditTap}
      />
    );
  }, [onEditTap]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Header title={'Share RCON'} rightBarItem={rightBarItem} />
        <ShareInfo />
        <ShareCta {...props} />
      </View>
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
