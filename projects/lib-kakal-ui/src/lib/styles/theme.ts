import { ThemePalette } from '@angular/material/core';

export declare type Theme = 'dark'

export declare type Palette =
  | ThemePalette
  | 'paper'
  | 'default'
  | 'disable'
  | 'table'
  | 'text'
  | 'success';

export type Color = { [color in Palette]: string };

export const palette: Color = {
  primary: '#d6a348',
  accent: '#ff6f2e',
  warn: '#d83020',
  paper: '#fff',
  default: '#bababa',
  disable: ' rgba(0, 0, 0, 0.26)',
  table: '#F8F8F8',
  text: '#000000',
  success: '#59a437',
};

