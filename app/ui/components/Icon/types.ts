import * as assets from "./assets";

export type IconName = keyof typeof assets;

export type Props = {
  height?: number;
  name: IconName;
  width?: number;
};
