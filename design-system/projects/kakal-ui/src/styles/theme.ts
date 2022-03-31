import { ThemePalette } from '@angular/material/core';

export declare type Theme = 'dark';

export declare type Palette =
  | Exclude<ThemePalette, undefined>
  | 'paper'
  | 'default'
  | 'disable'
  | 'disableButton'
  | 'disableText'
  | 'table'
  | 'text'
  | 'success'
  | 'graylight'
  | 'tableActionsGray'
  | 'darkGray';

export type Color = { [key in Palette]: string };

export const palette: Color = {
  primary: 'var(--p-500)',
  accent: 'var(--a-500)',
  warn: '#d83020',
  paper: '#fff',
  default: '#bababa',
  disable: ' rgba(0, 0, 0, 0.26)',
  disableButton: 'rgba(0, 0, 0, 0.12);',
  disableText: ' rgba(0, 0, 0, 0.26)',
  table: '#f9f9f9',
  text: '#000000',
  success: '#59a437',
  graylight: '#e2e1e1',
  tableActionsGray: '#a0a0a0',
  darkGray: '#747474',
};

export const palletteClassesMap = {
  primary: 'mat-primary',
  accent: 'mat-accent',
  warn: 'mat-warn',
  disable: 'mat-disable',
  success: 'kkl-success',
};

