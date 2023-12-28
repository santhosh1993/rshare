import { ShareCardInterface } from "@src/components/shareCard/shareCard"
import { useLocalStorage } from "@src/hooks/common/useLocalStorage"
import { useCallback } from "react"

export const useShareCenter = () => {
    const {getRconList, getRcon} = useLocalStorage({source: 'ShareCenter'})
    const getList = useCallback(() => {
        const rconList = getRconList()
        let rconConfigList: Array<ShareCardInterface> = []
        for(let i = 0; i < rconList.length; i++) {
            try {
                const rconDate = rconList[i]
                const rconConfig = getRcon({rconId: rconDate.rconId})
                const shareCardRconConfig: ShareCardInterface = {
                    images: rconConfig.data.map((data) => data.content.map((content) => content.url)).flat(),
                    rconName: rconConfig.details.title,
                    rconDescription: rconConfig.details.descrption,
                    phoneNo: rconConfig.sharedUserDetails?.phoneNo ?? "",
                    userName: rconConfig.sharedUserDetails?.name ?? "",
                    rconId: rconDate.rconId
                } 
                rconConfigList.push(shareCardRconConfig)
            }
            catch (e) {

            }
        }
        return rconConfigList
    }, [])

    return {getList}
}