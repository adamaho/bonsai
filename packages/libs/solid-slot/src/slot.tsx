import { children, mergeProps, splitProps } from "solid-js";
import type { Component, JSX } from "solid-js";

import { Dynamic } from "solid-js/web";

/**
 * What is the purpose of this component? 
 * 
 * We want to be able to spread props on the child when we need to and render the element in the slot
 * 
 * Support things like:
 * 
 * <Button asChild onClick type="button">
 *  <div>
 *    hello
 *  </div>
 * </Button>
 * 
 * <Slot>
 *  <div onClick type="button">
 *  </div>
 * </Slot>
 * 
 * 
 */

interface SlotProps extends JSX.HTMLAttributes<HTMLElement> {
  children?: any;
  ref?: HTMLElement;
}

const SlotRoot: Component<SlotProps> = (props) => {

  /**
   * separate the local props from the external ones
   */
  const [local, rest] = splitProps(props, ["children", "ref"]);

  console.log(rest["aria-label"]);

  /**
   * Get an instance of the children to work with
   */
  const _children = children(() => local.children);

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
    !(_children() instanceof Element)
  ) {
    throw new Error(
      "[Slot]: The provided child can only be a valid DOM node or Solid component"
    );
  }

  return (
    <Dynamic component={_children} {...mergeProps(rest)} ref={local.ref} />
  );
};

export const Slot = SlotRoot;
