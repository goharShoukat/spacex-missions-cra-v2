import { SecondStagePayloads } from "../../api";

export interface LaunchCardProperties {
    missionName: string
    payloads?: SecondStagePayloads[]
    launchNumber?: number
    details?: string
    date?: any
    links: any | null
}