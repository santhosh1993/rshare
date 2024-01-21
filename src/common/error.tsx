import { FC } from "react";
import { View } from "react-native";

export interface ErrorInterface {
    onRetry?: () => void
}

export const ErrorView : FC<ErrorInterface> = (props) => {
    return <View style={{flex: 1, backgroundColor: 'red'}}/>
}