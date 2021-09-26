import { ThemePalette } from '@angular/material/core';

export const theme = {
  colors: {
    primary: '#448ecd',
    accent: '#d220ba',
    warn: '#d83020',
    default: '#bababa',
    paper: '#fff',
    text: '#000000',
    success: '#37c563',
  }
}
export declare type Palette =
  | ThemePalette
  | 'paper'
  | 'default'
  | 'disable'
  | 'table'
  | 'text'
  | 'success';