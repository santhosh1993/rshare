import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useCallback} from 'react';

export const useGoogleAuth = () => {
  const authenticate = useCallback(async () => {
    try {
      const scopes = ['https://www.googleapis.com/auth/drive.file'];

      GoogleSignin.configure({
        webClientId:
          '568104290400-b5kbfso8hih9okfffc50vvsvtnllp4qb.apps.googleusercontent.com',
        scopes: scopes,
      });
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      let signInData = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(
        signInData.idToken,
      );

      await auth().signInWithCredential(googleCredential);
      
      return signInData.user;
    } catch (e) {
      throw e;
    }
  }, []);

  return {authenticate};
};
