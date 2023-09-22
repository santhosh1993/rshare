import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {useCallback} from 'react';

export const useGoogleAuth = () => {
  const authenticate = useCallback(async () => {
    console.log('---->>> sing in started');
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
      const signInData = await GoogleSignin.signIn();
      const getTokens = await GoogleSignin.getTokens();
      const googleCredential = auth.GoogleAuthProvider.credential(
        signInData.idToken,
      );
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {authenticate};
};
