import { ReactNode, CSSProperties } from "react";

export type ComponentSize = "xs" | "sm" | "md" | "lg";

export interface BaseProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export type TypographyAlign = "left" | "center" | "right";
