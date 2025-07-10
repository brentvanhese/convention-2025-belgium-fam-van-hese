/* eslint-disable @typescript-eslint/no-unused-vars */
import type { SVGProps } from "react";

export type TSvgAssetProps = Omit<SVGProps<SVGSVGElement>, "aria-hidden"> &
  (
    | {
        title?: never;
        "aria-hidden"?: true | "true";
      }
    | {
        title?: string;
        "aria-hidden"?: never;
      }
  );

const SvgAsset = ({ title, xmlns, children, ...props }: TSvgAssetProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};

export default SvgAsset;
