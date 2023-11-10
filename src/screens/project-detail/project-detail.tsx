import {Header} from '@common/header';
import {View} from 'react-native';
import {styles} from './project-detail.styles';
import React, {FC, memo, useCallback, useMemo} from 'react';
import {ProjectDetailInterface} from './project-detail.interface';
import {ProjectSharedInfo} from './components/projectSharedInfo';
import {Routes} from '@src/root/router/routes';
import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {ProjectContent} from './components/project-content/project-content';
import {Button, ButtonType, RightBarItemProps} from '@common/button';
import SvgShare from '@src/generated/assets/svgs/Share';
import {useNavigation} from '@src/root/navigation/useNavigation';

const ProjectDetail: FC<ProjectDetailInterface> = memo(props => {
  const nav = useNavigation();
  const onShareTap = useCallback(() => {
    nav.global.navigate({route: Routes.SHARE_SCREEN, params: {}});
  }, [nav]);

  const rightBarItem = useMemo(() => {
    const shareIcon = <SvgShare style={styles.shareImage} fill={'#fff'} />;
    const itemProps: RightBarItemProps = {child: shareIcon};
    return (
      <Button
        type={ButtonType.RightBarItem}
        onPress={onShareTap}
        props={itemProps}
      />
    );
  }, [onShareTap]);

  return (
    <View style={styles.background}>
      <Header title={props.name} rightBarItem={rightBarItem} />
      <ProjectSharedInfo {...props} />
      <ProjectContent />
    </View>
  );
});

export const ProjectDetailComponent = withScreenLoadedEvent(
  Routes.PROJECTDETAIL,
  ({route: {params}}: {route: {params: ProjectDetailInterface}}) => {
    return <ProjectDetail {...params} />;
  },
);
