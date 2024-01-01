import React from 'react';
import {StyleSheet, View} from 'react-native';
import { ShareProjectCardInterFace } from '../share-project.interface';
import QRCode from 'react-native-qrcode-svg';
import { Text } from '@common/text';
import { FontSize } from '@common/font';

export const ShareInfo = ({redirectionUrl, ...shareCard}: ShareProjectCardInterFace) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rconName}>{shareCard.rconName}</Text>
      <QRCode
      value={redirectionUrl}
      size={200}
      />
      <View style={styles.userContainer}>
        <Text style={styles.userText}>{shareCard.userName}</Text>
        <Text style={styles.userText}>{shareCard.phoneNo}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 16, paddingTop: 8,paddingBottom: 0, alignItems: 'center'},
  rconName: {fontSize: FontSize.xxlarge, paddingBottom: 12},
  userContainer: {flexDirection:'row', paddingTop: 4, justifyContent: 'space-between', width: '100%'},
  userText: {fontSize: FontSize.xlarge}
})
