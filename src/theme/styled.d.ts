/* eslint-disable @typescript-eslint/no-empty-interface */
import {} from 'styled-components';
import { ThemeType } from './index';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
