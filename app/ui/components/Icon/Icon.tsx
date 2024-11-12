import * as assets from "./assets";

import { Props } from "./types";

export function Icon({ height = 20, name, width = 20 }: Props) {
  const IconComponent = assets[name] || null;

  if (!IconComponent) {
    console.error(
      new TypeError(
        `There is no icon with the given name ${name} in the asset library`,
      ),
    );
  }

  return <IconComponent />; 
}
