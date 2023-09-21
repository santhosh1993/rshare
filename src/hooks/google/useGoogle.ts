import {useCallback, useEffect} from 'react';
import {useGoogleStore} from './store/googleStore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const useGoogle = () => {
  const data = useGoogleStore(s => s);
  const onAuthStateChanged = useCallback(user => {
    console.log(user);
  }, []);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);
  const authenticate = useCallback(async () => {
    console.log('---->>> sing in started');
    try {
      GoogleSignin.configure({
        webClientId:
          '568104290400-b5kbfso8hih9okfffc50vvsvtnllp4qb.apps.googleusercontent.com',
      });
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // Get the users ID token
      const signInData = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        signInData.idToken,
      );

      // Sign-in the user with the credential
      console.log(await auth().signInWithCredential(googleCredential));
    } catch (e) {
      console.log(e);
    }
  }, []);
  return {authenticate};
};
