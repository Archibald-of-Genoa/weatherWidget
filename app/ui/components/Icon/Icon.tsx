import * as assets from "./assets";

import { Props } from "./types";

export function Icon({ name, className = "size-12" }: Props) {
  const IconComponent = assets[name] || null;

  if (!IconComponent) {
    console.error(
      new TypeError(
        `There is no icon with the given name ${name} in the asset library`,
      ),
    );
  }

  return (
    <div className={className}>
      <IconComponent />
    </div>
  );
}
