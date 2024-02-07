import { ShareCardInterface } from "@src/components/shareCard/shareCard";
import { create } from "zustand";
import { useShareCenter } from "./hooks/useGetProjectList";

enum Filter {
    NoFilter = 0,
    Owned,
    Faviorate,
    Last30Days,
    Last90Days
}

interface ShareCenterStoreInterface {
    data: Array<ShareCardInterface>
    updateData: (data: Array<ShareCardInterface>) => void
}

export const useShareCenterStore = create<ShareCenterStoreInterface>((set) => {
    const {getList} = useShareCenter()
    return {
        data: getList(),
        updateData: () => {
            set({
                data: getList()
            })
        }
    }
});