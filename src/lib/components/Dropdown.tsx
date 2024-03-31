import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnchorType } from "../types/AnchorType";
import { DropdownChildrenType } from "../types/DropdownChildrenType";
import { createPortal } from "react-dom";
import { portalDom } from "../constants/portal";

type Props = {
  dropdownType?: "portal" | "inside";
  /**
   * @param event { close, toggle, open }
   * @return {ReactNode}
   * @type {AnchorType}
   */
  anchor: AnchorType;
  /**
   * @type {ReactNode | ({ close, open, toggle }) => ReactNode}
   */
  children: DropdownChildrenType;
  /**
   * anchor custom className
   */
  anchorClassName?: string;
  /**
   * dropdown box custom className
   */
  dropdownClassName?: string;
};

const createDropdown = (_portalDom = portalDom) => {
  function Dropdown({
    dropdownType = "portal",
    anchor,
    children,
    anchorClassName,
    dropdownClassName,
  }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dropdownAnchorRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const close = useCallback(() => {
      setIsOpen(false);
    }, []);

    useEffect(() => {
      // to detect click outside of anchor or dropdown
      const mouseDownCallback = (event: MouseEvent) => {
        if (event.target && event.target instanceof HTMLElement) {
          if (
            dropdownAnchorRef.current?.contains(event.target) === false &&
            dropdownRef.current?.contains(event.target) === false
          ) {
            // click outside of the anchor
            close();
          }
        }
      };

      window.addEventListener("mousedown", mouseDownCallback);
      return () => {
        window.removeEventListener("mousedown", mouseDownCallback);
      };
    }, [close]);

    const determineDropdownPosition = useCallback(() => {
      if (isOpen && dropdownRef.current && dropdownAnchorRef.current) {
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const anchorRect = dropdownAnchorRef.current.getBoundingClientRect();
        console.log(
          "window.innerHeight",
          window.innerHeight,
          dropdownRect.bottom
        );
        // decide to open from top or bottom
        if (anchorRect.bottom + dropdownRect.height > window.innerHeight) {
          // this mean dropdown would not display completly and a section would be out of window
          // so we should open it from top of the anchor point

          dropdownRef.current.style.top = `${anchorRect.top - dropdownRect.height}px`;
        } else {
          // the regular wich dropdown would open at the bottom of anchor point
          dropdownRef.current.style.top = `${anchorRect.bottom}px`;
        }
        // after we decide the dropdown position we just make is visible
        dropdownRef.current.style.visibility = "visible";
      }
    }, [isOpen]);

    useEffect(() => {
      // to recalculate position of dropdown when user scroll the page
      const scroll = () => {
        // Note that, the only way it's work is when dropdown scroll container is window, in case of
        // using scroll: auto | scroll it's not gonna work
        determineDropdownPosition();
      };
      window.addEventListener("scroll", scroll);
      return () => {
        window.removeEventListener("scroll", scroll);
      };
    }, [determineDropdownPosition]);

    // three useEffect for a fucking dropdown, that's crazy :D
    useEffect(() => {
      // i just don't like use state for such a heavy computing thing like this
      // also it's hard to control re executing useEffect callback to pervent inifit loop
      // i use useEffect to calculate position of dropdown, maybe you say why we don't put it in the
      // open callback, the answer is simple, because when open callback fires dropdown not rendered yet
      // and dropdownRef.current would be undefined anyway, but useEffect callback fires when render just complete

      determineDropdownPosition();
    }, [determineDropdownPosition]);

    const open = useCallback(() => {
      if (isOpen === false) {
        // to decide wich place to put dropdown we need to temporary make it hidden
        if (dropdownRef.current) {
          dropdownRef.current.style.visibility = "hidden";
        }
      }
      setIsOpen(true);
    }, [isOpen]);

    const toggle = useCallback(() => {
      if (isOpen) {
        close();
      } else {
        open();
      }
    }, [open, close]);

    const dropdownContentChildren = (
      <div
        ref={dropdownRef}
        style={{ visibility: "hidden", position: "fixed" }}
        className={dropdownClassName}
      >
        {typeof children === "function"
          ? children({ close, open, toggle, isOpen })
          : children}
      </div>
    );

    return (
      <Fragment>
        <div ref={dropdownAnchorRef} className={anchorClassName}>
          {anchor({
            close,
            open,
            toggle,
          })}
        </div>
        {isOpen &&
          (() => {
            if (dropdownType === "portal")
              return createPortal(dropdownContentChildren, _portalDom);
            else return dropdownContentChildren;
          })()}
      </Fragment>
    );
  }
  return Dropdown;
};

export default createDropdown;
