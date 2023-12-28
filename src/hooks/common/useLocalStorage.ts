import { useCallback } from "react"
import { useFireStore } from "../firestore/usefirestore"
import { FireStoreCollection } from "../firestore/firestore.collections"
import { EventKey } from "@src/root/analytics/analytics.Keys"
import { useAnalytics } from "@src/root/analytics/useAnalytics"
import { useMMKV } from "../mmkv/useMMKV"
import axios from "axios"
import { FireStoreCollectionShareDocInterface, FireStoreCollectionUsersInterFace } from "../firestore/firestore.collections.Interface"
import { SectionData } from "@src/screens/project-detail/project-detail.interface"

interface RconListObjectInterface {
    rconId: string
    rconData: FireStoreCollectionShareDocInterface
    timeStamp: number
}

export interface RconConfigDateInterface  {
    data: Array<SectionData>,
    tabs: Array<string>,
    details: RconDetails,
    sharedRconId?: string,
    sharedUserDetails?: FireStoreCollectionUsersInterFace
}

export interface RconConfigInterface {
    configData: RconConfigDateInterface,
    rconData: FireStoreCollectionShareDocInterface
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
            const configData = await doc(sharedRconData.sourceUserId, FireStoreCollection.USERS).doc(sharedRconData.docId, FireStoreCollection.USER_CREATED_DOCS).read()
            const sharedUserData = await doc(sharedRconData.userId, FireStoreCollection.USERS).read()
            if (configData === undefined || sharedUserData === undefined) {
                notValidRconId({rconId: rconId, source: source, type: "storeRcon_configData"})
                throw Error("Not a valid rcon Id")
            }
            
            const rconConfig: RconConfigDateInterface = (await axios.get(configData.configUrl)).data
            const storedRconConfig = getString(rconId)
            if (sharedRconData.sourceId == sharedRconData.userId) {
                rconConfig.sharedRconId = rconId
            }
            rconConfig.sharedUserDetails = sharedUserData as FireStoreCollectionUsersInterFace

            if (storedRconConfig) {
                const storedRconConfigJson: RconConfigDateInterface = JSON.parse(storedRconConfig)
                rconConfig.sharedRconId = storedRconConfigJson?.sharedRconId
            }
            set(rconId, JSON.stringify({configData: rconConfig, rconData: sharedRconData}))
            const storedData: RconListObjectInterface = {rconId: rconId, rconData: sharedRconData as FireStoreCollectionShareDocInterface, timeStamp: Date.now()}

            let rconList : Array<RconListObjectInterface> = getRconList()
            
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

    const getRcon = useCallback(({rconId}: {rconId: string}): RconConfigInterface => {
        try {
            const rconData = getString(rconId)
            if (rconData) {
                return JSON.parse(rconData) as RconConfigInterface
            }
            notValidRconId({rconId: rconId, source: source, type: "getRcon"})
            throw Error("Not a valid rcon Id")
        }
        catch (e) {
            emitOnError({errorMessage: e, data: {rconId: rconId}, source: source, type: "getRcon"})
            throw e
        }
    }, [])

    const updateRcon = useCallback(({rconId, sharedRconId}: {rconId: string, sharedRconId: string}) => {
        try {
            const rconData = getRcon({rconId: rconId})
            rconData.configData.sharedRconId = sharedRconId
            set(rconId, JSON.stringify(rconData))
        }
        catch (e) {
            emitOnError({errorMessage: e, data: {rconId: rconId}, source: source, type: "getRcon"})
            throw e
        }
    }, [])

    const getRconList: () => Array<RconListObjectInterface> = useCallback(() => {
        try {
            return JSON.parse(getString("rconList") ?? "") ?? [] as Array<RconListObjectInterface>
        }
        catch (e) {
            return []
        } 
    }, [getString])

    const setRconList = useCallback((list: Array<RconListObjectInterface>) => {
        set("rconList", JSON.stringify(list))
    }, [set])

    return {storeRcon, getRcon, getRconList, updateRcon}
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