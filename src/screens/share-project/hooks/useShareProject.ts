import { endpoint } from "@common/constants"
import { useLocalStorage } from "@src/hooks/common/useLocalStorage"
import { useUser } from "@src/hooks/common/useUser"
import { FireStoreCollection } from "@src/hooks/firestore/firestore.collections"
import { useFireStore } from "@src/hooks/firestore/usefirestore"
import { useCallback } from "react"
import Toast from "react-native-toast-message"

export const useShareProject = () => {
    const {userId, userData} = useUser()
    const {getRcon, updateRcon} = useLocalStorage({source: 'shareProject'})
    const {doc} = useFireStore()
    const getUserData = useCallback(async ({rconId}: {rconId: string}) => {
        try {
            const data = await userData()
            const qrData = await getQRLink({rconId: rconId})
            return {...data, redirectionUrl: qrData}
        }
        catch (e) {
            Toast.show({
                text1: "Something went wrong. Please try again after sometime.",
                type: 'error',
              })
              return undefined
            }
    }, [])

    const getQRLink = useCallback(async ({rconId}: {rconId: string}) => {
        try {
            const rconData = getRcon({rconId: rconId})
            const currentUserId = await userId()
            if (rconData.sharedRconId == undefined) {
                const sharedDoc = doc(undefined, FireStoreCollection.SHARED_DOCS)
                await sharedDoc.create<FireStoreCollection.SHARED_DOCS>({docData: {
                  sourceUserId: rconData.rconData.sourceUserId,
                  userId: currentUserId.id,
                  docId: rconData.rconData.docId
                }})
                updateRcon({rconId: rconId, sharedRconId: sharedDoc.data.id})
                return endpoint() + sharedDoc.data.id
            }
            else {
                return endpoint() + rconData.sharedRconId
            }
        }
        catch (e) {
            throw e
        }
    }, [])

    return {getUserData}
}