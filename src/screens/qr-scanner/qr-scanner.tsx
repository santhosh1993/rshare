import React, { FC } from "react";
import { QRScannerInterface } from "./qr-scanner.interfaces";
import { View } from "react-native";
import { styles } from "./qr-scanner.styles";

export const QRScanner: FC<QRScannerInterface> = () => {
    return <View style={styles.container}/>
}