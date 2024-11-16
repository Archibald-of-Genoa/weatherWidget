import * as assets from "./assets";

export type IconName = keyof typeof assets;

export type Props = {
  name: IconName;
  className?: string;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  onClick?: (event: React.KeyboardEvent | React.MouseEvent) => void;
};
