import * as icons from "../_assets/icons";
import type { TSvgAssetProps } from "./SvgAsset";

export type TIcons = keyof typeof icons;
export type TIconProps = TSvgAssetProps & {
  name: TIcons;
};

const Icon = ({ name, className, ...props }: TIconProps) => {
  const Source = icons[name];

  return <Source className={className} {...props} />;
};

export default Icon;
