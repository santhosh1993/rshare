import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {Routes} from '@src/root/router/routes';
import {StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useMemo} from 'react';
import {CreateProjectInterface} from './create-project.interface';
import {Header} from '@common/header';
import {ProjectDetailsInput} from './components/project-details-input';
import {ProjectContent} from './components/project-content-container';
import {Button, ButtonType} from '@common/button';
import {FontWeight, Text} from '@common/text';
import {colors} from '@common/colors';
import {useFiles} from './hooks/useSaveFiles';
import {useCreateProjectStore} from './create-project.store';
import {Loader} from '@common/Loader';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@src/root/navigation/useNavigation';

const CreateProject = () => {
  const {save} = useFiles();
  const nav = useNavigation();

  const onSaveTap = useCallback(async () => {
    try {
      const rconId = await save("create-project");
      Toast.show({
        text1: "RCON is successfully created",
        type: 'success',
      });
      nav.global.goBack()
      nav.global.navigate({route: Routes.SHARE_SCREEN, params: {
        rconId: rconId
      }})
    }
    catch (e) {
      Toast.show({
        text1: "Could not able to create RCON. Please try again after sometime.",
        type: 'error',
      });
    }
  }, [save]);

  const rightBarItem = useMemo(() => {
    return (
      <Button type={ButtonType.Button} onPress={onSaveTap}>
        <Text style={styles.saveButton} fontWeight={FontWeight.BOLD}>
          SAVE
        </Text>
      </Button>
    );
  }, [onSaveTap]);

  const isLoading = useCreateProjectStore(s => s.isLoading);
  const reset = useCreateProjectStore(s => s.reset);

  useEffect(() => {
    return () => {
      reset()
    }
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Create RCON" rightBarItem={rightBarItem} />
      <ProjectDetailsInput />
      <ProjectContent />
      {isLoading && <Loader title="Creating ..." />}
    </View>
  );
};

export const CreateProjectCompomnent = withScreenLoadedEvent(
  Routes.CreateProject,
  ({route: {params}}: {route: {params: CreateProjectInterface}}) => {
    return <CreateProject {...params} />;
  },
);

const styles = StyleSheet.create({
  saveButton: {
    paddingRight: 8,
    alignSelf: 'center',
    color: colors.text.light,
  },
  container: {flex: 1},
});
