import { useCallback } from "react"
import { useFireStore } from "../firestore/usefirestore"
import { FireStoreCollection } from "../firestore/firestore.collections"
import { EventKey } from "@src/root/analytics/analytics.Keys"
import { useAnalytics } from "@src/root/analytics/useAnalytics"
import { useMMKV } from "../mmkv/useMMKV"
import axios from "axios"
import { FireStoreCollectionShareDocInterface } from "../firestore/firestore.collections.Interface"
import { SectionData } from "@src/screens/project-detail/project-detail.interface"

interface RconListObjectInterface {
    rconId: string
    rconData: FireStoreCollectionShareDocInterface
    timeStamp: number
}

interface RconConfigInterface  {
    data: Array<SectionData>,
    tabs: Array<string>,
    details: RconDetails,
    sharedRconId?: string
}

interface RconDetails {
    title: string, 
    descrption: string, 
    keywords: string
}

export const useLocalStorage = ({source} : {source: string}) => {
    const {doc} = useFireStore()
    const {notValidRconId, emitOnError} = useLocalStorageEvents()
    const {set, getString} = useMMKV()

    const storeRcon = useCallback(async ({rconId}: {rconId: string}) => {
        try {
            const sharedRconData = await doc(rconId, FireStoreCollection.SHARED_DOCS).read()
            if (sharedRconData === undefined) {
                notValidRconId({rconId: rconId, source: source, type: "storeRcon"})
                throw Error("Not a valid rcon Id")
            }
            const configData = await doc(sharedRconData.sourceId, FireStoreCollection.USERS).doc(sharedRconData.sourceId, FireStoreCollection.USER_CREATED_DOCS).read()

            if (configData === undefined) {
                notValidRconId({rconId: rconId, source: source, type: "storeRcon_configData"})
                throw Error("Not a valid rcon Id")
            }
            
            const rconConfig: RconConfigInterface = (await axios.get(configData.configUrl)).data
            const storedRconConfig = getString(rconId)
            if (storedRconConfig) {
                const storedRconConfigJson: RconConfigInterface = JSON.parse(storedRconConfig)
                rconConfig.sharedRconId = storedRconConfigJson?.sharedRconId
            }
            set(rconId, JSON.stringify(rconConfig.data))
            const storedData: RconListObjectInterface = {rconId: rconId, rconData: sharedRconData as FireStoreCollectionShareDocInterface, timeStamp: Date.now()}

            let rconList : Array<any> = getRconList()
            
            for (let i = 0; i < rconList.length; i++) {
                if (rconList[i].rconId == rconId) {
                    rconList.splice(i,1)
                    break
                }
            }

            rconList.unshift(storedData)

            setRconList(rconList)
        }
        catch (e) {
            emitOnError({errorMessage: e, data: {rconId: rconId}, source: source, type: "storeRcon"})
            throw e
        }
    }, [])

    const getRcon = useCallback(({rconId}: {rconId: string}) => {
        try {
            const rconData = getString(rconId)
            if (rconData) {
                return JSON.parse(rconData)
            }
            notValidRconId({rconId: rconId, source: source, type: "getRcon"})
            throw Error("Not a valid rcon Id")
        }
        catch (e) {
            emitOnError({errorMessage: e, data: {rconId: rconId}, source: source, type: "getRcon"})
            throw e
        }
    }, [])

    const getRconList = useCallback(() => {
        try {
            return JSON.parse(getString("rconList") ?? "") ?? []
        }
        catch (e) {
            return []
        } 
    }, [getString])

    const setRconList = useCallback((list: Array<any>) => {
        set("rconList", JSON.stringify(list))
    }, [set])

    return {storeRcon, getRcon, getRconList}
}

const useLocalStorageEvents = () => {

    const notValidRconId = useAnalytics({
        name: EventKey.LocalStorageInValidRCON,
        params: {
          rconId: '',
          source: '',
        },
      })

    const emitOnError = useAnalytics({
        name: EventKey.LocalStorageError,
        params: {
            errorMessage: '',
            source: ''
        }
    })
      
    return {notValidRconId, emitOnError}
}