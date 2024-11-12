import { fiveDay } from "./assets";
import { forecast } from "./assets";
import { Props } from "./types";

export function Icon({ height = 20, name, width = 20 }: Props) {
  const IconSource = assets[name] || null;

  if (!IconSource) {
    console.error(
      new TypeError(
        `There is no icon with the given name ${name} in the asset library`,
      ),
    );
    return null;
  }

  return (
      <img src={IconSource} alt={name} height={height} width={width} />
  );
}
