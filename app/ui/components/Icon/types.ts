import * as assets from "./assets";

export type IconName = keyof typeof assets;

export type Props = {
  name: IconName;
  className?: string;
};
