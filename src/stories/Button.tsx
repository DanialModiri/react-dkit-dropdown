import React from "react";
import "./button.css";
import createDropdown from "../lib/components/Dropdown";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Dropdown = createDropdown();

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <div>
      <div style={{ wordBreak: 'break-all' }}>
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
      </div>
      <Dropdown
        anchor={({ close, toggle }) => {
          return <button onClick={toggle}>Open</button>;
        }}
      >
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
      </Dropdown>

      <div style={{ wordBreak: 'break-all' }}>
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
      </div>

      <div style={{ wordBreak: 'break-all' }}>
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
      </div>
      <div style={{ wordBreak: 'break-all' }}>
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
      </div>
      <div style={{ wordBreak: 'break-all' }}>
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
        'd like to detect a click inside or outside a div area. The tricky part
        is that the div will contain other elements and if one of the elements
        inside the div is clicked, it should be considered a click inside, the
        same way if an element from outside the div is clicked, it should be
        considered an outside click.
      </div>
    </div>
  );
};
