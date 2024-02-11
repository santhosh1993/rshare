import {Header} from '@common/header';
import {View} from 'react-native';
import {styles} from './project-detail.styles';
import React, {FC, memo, useCallback, useEffect, useMemo} from 'react';
import {ProjectDetailInterface} from './project-detail.interface';
import {ProjectSharedInfo} from './components/projectSharedInfo';
import {Routes} from '@src/root/router/routes';
import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {ProjectContent} from './components/project-content/project-content';
import {Button, ButtonType, RightBarItemProps} from '@common/button';
import SvgShare from '@src/generated/assets/svgs/Share';
import {useNavigation} from '@src/root/navigation/useNavigation';
import {useProjectDetailStore} from './project-detail.store';
import {usePorjectDetail} from './hooks/useProjectDetail';
import {Loader} from '@common/Loader';
import {ErrorView} from '@common/error';

const ProjectDetail: FC<ProjectDetailInterface> = memo(props => {
  const {getProject} = usePorjectDetail();
  const updateData = useProjectDetailStore(s => s.updateData);
  const data = useProjectDetailStore(s => s.data);
  const isLoading = useProjectDetailStore(s => s.isLoading);
  const setIsLoading = useProjectDetailStore(s => s.setIsLoading);
  const updateRcon = useCallback(
    async (rconId: string) => {
      try {
        setIsLoading(true);
        updateData((await getProject(rconId)).configData.data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    },
    [getProject, updateData, setIsLoading],
  );
  useEffect(() => {
    updateRcon(props.id);
  }, [props.id, updateRcon]);
  const nav = useNavigation();
  const onShareTap = useCallback(() => {
    nav.global.navigate({
      route: Routes.SHARE_SCREEN,
      params: {
        rconId: props.id,
        rconName: props.rconName,
        phoneNo: props.phoneNo,
        userName: props.userName,
      },
    });
  }, [nav, props]);
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
      <Header
        title={isLoading ? '' : props.rconName}
        rightBarItem={isLoading ? null : rightBarItem}
      />
      {isLoading ? (
        <Loader title="Loading ..." />
      ) : data.length !== 0 ? (
        <>
          <ProjectSharedInfo {...props} />
          <ProjectContent />
        </>
      ) : (
        <ErrorView />
      )}
    </View>
  );
});

export const ProjectDetailComponent = withScreenLoadedEvent(
  Routes.PROJECTDETAIL,
  ({route: {params}}: {route: {params: ProjectDetailInterface}}) => {
    return <ProjectDetail {...params} />;
  },
);
