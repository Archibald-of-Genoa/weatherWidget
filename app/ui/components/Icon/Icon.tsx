import * as assets from "./assets";

import { Props } from "./types";

export function Icon({ name, className = "size-12 cursor-pointer", tabIndex = 0, onKeyDown, onClick }: Props) {
  const IconComponent = assets[name] || null;

  if (!IconComponent) {
    console.error(
      new TypeError(
        `There is no icon with the given name ${name} in the asset library`,
      ),
    );
  }

  return (
    <div className={className} tabIndex={tabIndex} onKeyDown={onKeyDown} onClick={onClick}>
      <IconComponent  />
    </div>
  );
}
