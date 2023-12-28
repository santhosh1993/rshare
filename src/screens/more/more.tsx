import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {styles} from './more.styles';
import {View} from 'react-native';
import {FeedBackButton} from './components/Feedback';
import {Header} from '@common/header';
import {UpdateButton} from './components/UpdateButton';
import { useMore } from './hooks/useMore';
import { Loader } from '@common/Loader';
import { FireStoreCollectionUsersInterFace } from '@src/hooks/firestore/firestore.collections.Interface';
import { TextInput } from '@common/text-input';
import { withScreenLoadedEvent } from '@src/core/withScreenLoadedEvent';
import { Routes } from '@src/root/router/routes';
import { useLocalStorage } from '@src/hooks/common/useLocalStorage';

export interface MoreInterface {
  source: string;
  hideBackButton?: boolean;
  onUnMount?: () => void;
}

export const MoreComponent: FC<MoreInterface> = props => {
  const {storeRcon} = useLocalStorage({source: 'scan'})
  useEffect(() => {
    storeRcon({rconId: 'YxDPmAdpYbrH4Q2Q9zle'})
  }, [])
  const {getUserData, updateUserData, validateUserData} = useMore()
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState<FireStoreCollectionUsersInterFace | undefined>(undefined)

  const onMount = useCallback(async () => {
    setIsLoading(true)
    setUserData(await getUserData())
    setIsLoading(false)
  }, [])
 
  useEffect(() => {
    onMount()
    return () => {
      props.onUnMount?.()
    }
  }, [props])

  const [userName, setUserName] = useState<string | undefined>(undefined)
  const [userPhoneNo, setUserPhoneNo] = useState<string | undefined>(undefined)

  useEffect(() => {
    setUserName(userData?.name)
    setUserPhoneNo(userData?.phoneNo)
  }, [userData])

  const onUserNameChange = useCallback((text: string) => {
    setUserName(text)
  }, [])
  const onUserPhoneNoChange = useCallback((text: string) => {
    setUserPhoneNo(text)
  }, [])

  const onUpdatePress = useCallback(async () => {
    if (validateUserData({name: userName, phoneNo: userPhoneNo})) {
      setIsLoading(true)
      await updateUserData({name: userName!, phoneNo: userPhoneNo!})
      setIsLoading(false)
    }
  }, [userName, userPhoneNo])

  const dataInputView = useMemo(() => { return (
    <View>
      <TextInput label="Name" inputBarProps={{value: userName, onChangeText: onUserNameChange}}/>
      <TextInput label="Phone No" inputBarProps={{value: userPhoneNo, onChangeText: onUserPhoneNoChange, autoCorrect: false, spellCheck: false}}/>
    </View>
  )}, [userName, userPhoneNo]);

  return (
    <View style={styles.moreContainer}>
      <View style={styles.nonLoginParent}>
        <Header title={'More'} hideBackButton={props.hideBackButton} />
        {dataInputView}
        <UpdateButton onPress={onUpdatePress}/>
      </View>
      <FeedBackButton />
      {isLoading && <Loader title="Loading ..." />}
    </View>
  );
};

export const More = withScreenLoadedEvent(
  Routes.MORE,
  ({route: {params}}: {route: {params: MoreInterface}}) => {
    return <MoreComponent {...params} />;
  },
);
