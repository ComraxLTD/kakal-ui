import { ThemePalette } from '@angular/material/core';

export declare type Theme = 'dark'

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

export type Color = { [key in Palette]: string };

export const palette: Color = {
  primary: '#01a7b4',
  accent: '#37c56b',
  warn: '#d83020',
  paper: '#fff',
  default: '#bababa',
  disable: ' rgba(0, 0, 0, 0.26)',
  disableButton: 'rgba(0, 0, 0, 0.12);',
  disableText: ' rgba(0, 0, 0, 0.26)',  table: '#f9f9f9',
  text: '#000000',
  success: '#59a437',
};

