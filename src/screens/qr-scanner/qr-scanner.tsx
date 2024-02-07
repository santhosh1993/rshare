import React, { FC, useCallback, useEffect } from "react";
import { QRScannerInterface } from "./qr-scanner.interfaces";
import { StyleSheet, View } from "react-native";
import { styles } from "./qr-scanner.styles";
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera";

export const QRScanner: FC<QRScannerInterface> = () => {
    const { hasPermission, requestPermission } = useCameraPermission()
    console.log("---->>>> ", hasPermission)

    const requestForPermission = useCallback(async () => {
        console.log("--->>> userPermission test")
        const userPermission = await requestPermission()
        console.log("--->>> userPermission ", userPermission)
    }, [])

    useEffect(() => {
        if (!hasPermission) {
            requestForPermission()
        }
    }, [])

    if (hasPermission) {
        return <QRCamera />
    }
    
    return <View style={styles.container}/>
}

const QRCamera = () => {
    const device = useCameraDevice('back')
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
          console.log(`Scanned ${codes.length} codes!`)
        }
    })

    if (device == null) return <View />
    return (
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={false}
        codeScanner={codeScanner}
      />
    )
}