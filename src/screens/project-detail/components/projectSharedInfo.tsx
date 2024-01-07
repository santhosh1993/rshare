import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FontWeight, Text} from '@common/text';
import { colors } from '@common/colors';
import SvgPhone from '@src/generated/assets/svgs/Phone';

export interface ProjectSharedInfo {
  userName: string;
  phoneNo?: string;
  rconDescription?: string;
}

export const ProjectSharedInfo = (props: ProjectSharedInfo) => {
  return (
    <View style={styles.container}>
      {props.rconDescription && <Text style={styles.description} fontWeight={FontWeight.MEDIUM}>{props.rconDescription}</Text>}
      <View style={styles.sharedUserInfo}>
        <Text style={styles.sharedUserText} fontWeight={FontWeight.MEDIUM}>For more details call {props.userName}</Text>
        <SvgPhone style={styles.sharedUserPhone}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', padding: 8, marginBottom: 4},
  description: {fontSize: 18, color: colors.text.medium},
  sharedUserInfo: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'},
  sharedUserText: {fontSize: 18, color: colors.text.medium, flexShrink: 1},
  sharedUserPhone: {flex:1, width:24, height:24, marginLeft: 8}
})
