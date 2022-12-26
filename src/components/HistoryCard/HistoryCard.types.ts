export interface Link {
    reddit: string| null
    article: string | null
    wikipedia: string | null
}

export interface HistoryCardProperties {
    title: string
    subTitle?: string
    details?: string
    links: Link | null
    event_data_utc?: string
}