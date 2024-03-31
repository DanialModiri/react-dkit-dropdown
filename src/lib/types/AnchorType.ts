import { ReactNode } from "react";

export type AnchorEventType = {
  toggle: () // e: React.MouseEvent
  => void;
  open: () // e: React.MouseEvent
  => void;
  close: () => void;
};

export type AnchorType = (event: AnchorEventType) => ReactNode;
