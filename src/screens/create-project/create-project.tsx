import {withScreenLoadedEvent} from '@src/core/withScreenLoadedEvent';
import {Routes} from '@src/root/router/routes';
import {StyleSheet, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {CreateProjectInterface} from './create-project.interface';
import {Header} from '@common/header';
import {ProjectDetailsInput} from './components/project-details-input';
import {ProjectContent} from './components/project-content-container';
import {Button, ButtonType} from '@common/button';
import {FontWeight, Text} from '@common/text';
import {colors} from '@common/colors';
import {useFiles} from './hooks/useSaveFiles';

const CreateProject = () => {
  const {save} = useFiles();

  const onSaveTap = useCallback(() => {
    save();
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

  return (
    <View style={styles.container}>
      <Header title="Create RCON" rightBarItem={rightBarItem} />
      <ProjectDetailsInput />
      <ProjectContent />
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
