import React, {FC, useCallback, useEffect} from 'react';
import {QRScannerInterface} from './qr-scanner.interfaces';
import {StyleSheet, View} from 'react-native';
import {styles} from './qr-scanner.styles';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export const QRScanner: FC<QRScannerInterface> = () => {
  const {hasPermission, requestPermission} = useCameraPermission();

  const requestForPermission = useCallback(async () => {
    await requestPermission();
  }, [requestPermission]);

  useEffect(() => {
    if (!hasPermission) {
      requestForPermission();
    }
  }, [hasPermission, requestForPermission]);

  if (hasPermission) {
    return <QRCamera />;
  }

  return <View style={styles.container} />;
};

const QRCamera = () => {
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });

  if (device == null) {
    return <View />;
  }
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />
  );
};
