import { useUser } from "@src/hooks/common/useUser"
import { useCallback } from "react"
import Toast from "react-native-toast-message"

export const useShareProject = () => {
    const {userData} = useUser()
    const getUserData = useCallback(async () => {
        try {
            const data = await userData()
            return data
        }
        catch (e) {
            Toast.show({
                text1: "Something went wrong. Please try again after sometime.",
                type: 'error',
              })
              return undefined
            }
    }, [])

    return {getUserData}
}