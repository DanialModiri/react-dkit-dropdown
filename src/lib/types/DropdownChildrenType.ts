import { ReactNode } from "react";
import { AnchorEventType } from "./AnchorType";

export type DropdownChildrenInputType = AnchorEventType & { isOpen: boolean };
export type DropdownChildrenType = ((props: DropdownChildrenInputType) => ReactNode) | ReactNode;