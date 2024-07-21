export interface PlanetI {
  name: string;
  overview: Overview;
  structure: Overview;
  geology: Overview;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
}

export type OverviewKeys = 'overview' | 'structure' | 'geology'

export interface Images {
  planet: string;
  internal: string;
  geology: string;
}

export interface Overview {
  content: string;
  source: string;
}

export interface DetailsParamsI {
  name: string;
}
