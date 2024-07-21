import { OverviewKeys } from '../types';

export const infoButtons: { label: OverviewKeys }[] = [
  {
    label: 'overview',
  },
  {
    label: 'structure',
  },
  {
    label: 'geology',
  },
];

export const planetColors: PlanetColorsI = {
  mercury: '#419EBB',
  venus: '#EDA249',
  earth: '#6D2ED5',
  mars: '#D14C32',
  jupiter: '#D83A34',
  saturn: '#CD5120',
  uranus: '#1EC1A2',
  neptune: '#2D68F0',
};

export interface PlanetColorsI {
  mercury: string;
  venus: string;
  earth: string;
  mars: string;
  jupiter: string;
  saturn: string;
  uranus: string;
  neptune: string;
}
