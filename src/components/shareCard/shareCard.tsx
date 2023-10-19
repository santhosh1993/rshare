import {Text} from '@common/text';
import {Pressable, View} from 'react-native';
import {styles} from './shareCard.styles';
import {Routes} from '@src/root/router/routes';
import {useCallback} from 'react';
import {useNavigation} from '@src/root/navigation/useNavigation';

export const ShareCard = () => {
  const nav = useNavigation();
  const onPress = useCallback(() => {
    nav.global.navigate({
      route: Routes.PROJECTDETAIL,
      params: {
        name: 'Project 1',
        id: 'asdfsadf',
      },
    });
  }, [nav]);

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text>Santhosh </Text>
      </View>
    </Pressable>
  );
};
