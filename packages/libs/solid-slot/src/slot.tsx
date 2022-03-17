import { children, Show } from "solid-js";
import type { Component, JSX } from "solid-js";

interface SlotProps extends JSX.HTMLAttributes<HTMLElement> {
  ref?: HTMLElement;
}

const SlotRoot: Component<SlotProps> = (props) => {
  /**
   * Get an instance of the children to work with
   */
  const _children = children(() => props.children);

  /**
   * Check to make sure there is only one child that is passed.
   */
  if (
    typeof _children() === "object" &&
    Object.keys(_children() as object).length > 1
  ) {
    throw new Error("[Slot]: Slot can only take one child");
  }

  /**
   * Check to make sure the provide child is a valid solid element
   */
  if (
    typeof _children() === "boolean" ||
    typeof _children() === "string" ||
    typeof _children() === "number" ||
    typeof _children() == null
  ) {
    throw new Error(
      "[Slot]: The provided child can only be a valid DOM node or Solid component"
    );
  }

  return _children();
};

export const Slot = SlotRoot;
