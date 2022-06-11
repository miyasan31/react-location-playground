import type { LinkProps } from "@tanstack/react-location";
import { Link as ReactLocationLink } from "@tanstack/react-location";
import type { FC } from "react";

export const Link: FC<LinkProps> = (props) => {
  return <ReactLocationLink {...props} />;
};
