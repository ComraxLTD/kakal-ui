import { ThemePalette } from '@angular/material/core';

export declare type Palette =
  | ThemePalette
  | 'paper'
  | 'default'
  | 'disable'
  | 'table'
  | 'text'
  | 'success';

export type Color = { [color in Palette]: string };

export interface Theme {
  palette: Color;
}

export const theme: Theme = {
  palette: {
    primary: '#d6a348',
    accent: '#ff6f2e',
    warn: '#d83020',
    paper: '#fff',
    default: '#bababa',
    disable: '#DBDBDB',
    table: '#F8F8F8',
    text: '#000000',
    success: '#59a437',
  },
};
