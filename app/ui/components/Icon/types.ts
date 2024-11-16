import * as assets from "./assets";
import { ChangeEvent } from 'react';

export type IconName = keyof typeof assets;

export type Props = {
  name: IconName;
  className?: string;
  tabindex?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
};
