import {TextInput} from '@common/text-input';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';

export const DataInputView = memo(({name, phoneNo}:{name: string | undefined, phoneNo: string | undefined}) => {
  const [userName, setUserName] = useState(name)
  const [userPhoneNo, setUserPhoneNo] = useState(phoneNo)

  useEffect(() => {
    setUserName(name)
    setUserPhoneNo(phoneNo)
  }, [name, phoneNo])

  const onUserNameChange = useCallback((text: string) => {
    setUserName(text)
  }, [])
  const onUserPhoneNoChange = useCallback((text: string) => {
    setUserPhoneNo(text)
  }, [])

  return (
    <View>
      <TextInput label="Name" inputBarProps={{value: userName, onChangeText: onUserNameChange}}/>
      <TextInput label="Phone No" inputBarProps={{value: userPhoneNo, onChangeText: onUserPhoneNoChange, autoCorrect: false, spellCheck: false}}/>
    </View>
  );
});
