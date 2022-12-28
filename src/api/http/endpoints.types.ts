// START Launches Payloads 
export type LaunchesResponse = {
  crew: null
  details: string
  flight_number: number
  is_tentative: boolean
  last_date_update: string
  last_ll_launch_date: null
  last_ll_update: null
  last_wiki_launch_date: string
  last_wiki_revision: string
  last_wiki_update: string
  launch_date_local: string
  launch_date_source: string
  launch_date_unix: number
  launch_date_utc: string
  launch_site: LaunchSite
  launch_success: true
  launch_window: null
  launch_year: string
  links: Links
  mission_id: []
  mission_name: string
  rocket: Rocket
  ships: [string, string, string, string]
  static_fire_date_unix: number
  static_fire_date_utc: string
  tbd: boolean
  telemetry: { flight_club: null }
  tentative_max_precision: string
  timeline: null
  upcoming: boolean
}

type LaunchSite = {
  site_id: string
  site_name: string
  site_name_long: string
}

type Links = {
  article_link: string
  flickr_images: string[]
  mission_patch: string
  mission_patch_small: string
  presskit: null
  reddit_campaign: string
  reddit_launch: string
  reddit_media: null
  reddit_recovery: null
  video_link: string
  wikipedia: string
  youtube_id: string
}

type Rocket = {
  fairings: Fairings
  first_stage: FirstStage
  rocket_id: string
  rocket_name: string
  rocket_type: string
  second_stage: SecondStage
}

type FirstStage = {
  cores: FirstStageCores[]
}

type FirstStageCores = {
  block: number
  core_serial: string
  flight: number
  gridfins: true
  land_success: null
  landing_intent: true
  landing_type: string
  landing_vehicle: null
  legs: true
  reused: true
}

type SecondStage = {
  block: number
  payloads: SecondStagePayloads[]
}

export type SecondStagePayloads = {
  customers: string[]
  manufacturer: string
  nationality: string
  norad_id: any[]
  orbit: string
  orbit_params: {
    [key: string]: string | number | null
  }
  payload_id: string
  payload_mass_kg: number
  payload_mass_lbs: number
  payload_type: string
  reused: boolean
}

type Fairings = {
  reused: boolean
  recovery_attempt: boolean
  recovered: boolean
  ship: any
}
// END Launches Payloads

// START Rockets Payload
export type RocketsResponse = {
  id: number,
  active: boolean,
  stages: number,
  boosters: number,
  cost_per_launch: number,
  success_rate_pct: number,
  first_flight: string,
  country: string,
  company: string,
  height: {
    meters: number,
    feet: number
  },
  diameter: {
    meters: number,
    feet: number
  },
  mass: {
    kg: number,
    lb: number
  },
  payload_weights: PayloadWeight[],
  first_stage: {
    reusable: boolean,
    engines: number,
    fuel_amount_tons: number,
    burn_time_sec: number,
    thrust_sea_level: {
      kN: number,
      lbf: number
    },
    thrust_vacuum: {
      kN: number, 
      lbf: number
    }
  },
  second_stage: {
    reusable: boolean, 
    engines: number,
    fuel_amount_tons: number,
    burn_time_sec: number,
    thrust: {
      kN: number,
      lbf: number
    },
    payloads: {
      option_1: string,
      composite_fairing: {
        height: {
          meters: number,
          feet: number
        },
        diameter: {
          meters: number,
          feet: number
        }
      }
    }
  }, 
  engines: {
    number: number,
    type: string,
    version: string,
    layout: string,
    isp: {
      sea_level: number,
      vacuum: number
    },
    engine_loss_max: number,
    propellant_1: string,
    propellant_2: string,
    thrust_sea_level: {
      kN: number,
      lbf: number
    },
    thrust_vacuum: {
      kN: number,
      lbf: number
    },
    thrust_to_weight: number
  },
  landing_legs: {
    number: number,
    material: null
  },
  flickr_images: string[],
  wikipedia: string,
  description: string,
  rocket_id: string,
  rocket_name: string,
  rocket_type: string
}

export type PayloadWeight = {
  id: string, 
  name: string,
  kg: number,
  lb: number,
}