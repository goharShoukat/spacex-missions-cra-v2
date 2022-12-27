export type LaunchesResponse = {
    fairings: Fairings
    links: Links
    static_fire_date_utc: string
    static_fire_date_unix: number
    window: number
    net: boolean
    rocket: string
    success: boolean
    failures: Failure
    details: string
    crew: string[]
    ships: string[]
    capsules: string[]
    payloads: [string]
    launchpad: string
    flight_number: number
    name: string
    date_utc: string
    date_unix: number
    date_local: string
    date_precision: string
    upcoming: boolean
    cores: Cores
    auto_update: boolean
    tbd: boolean
    launch_library_id: null
    id: string
}

type Fairings = {
    reused: boolean
    recovery_attempt: boolean
    recovered: boolean
    ships: null
}

type Flickr = {
    small: string[]
    original: string[]
}
type Reddit = {
    campaign: null
    launch: null
    media: null
    recovery: null
}

type Patch = {
    small: string
    large: string
}

export type Links = {
    patch: Patch
    reddit: Reddit
    flickr: Flickr
    presskit: null
    webcast: string
    youtube_id: string
    article: string
    wikipedia: string
}

type Cores = {
    core: string
    flights: number
    gridfins:boolean
    legs: boolean
    reused: boolean
    landing_attempt: boolean
    landing_success: null
    landing_type: null
    landpad: null

}

type Failure = {
    time: number
    altitude: null
    reason: string
}