import { ButtonRoot, ButtonIcon, ButtonContextProvider } from "./Button";
import type { ButtonRootProps, ButtonIconProps, ButtonContextProviderProps } from "./Button";
import { ButtonText } from "./ButtonText";
import type { ButtonTextProps } from "./ButtonText";

export default {
  Context: ButtonContextProvider,
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText
};

export type { ButtonRootProps, ButtonContextProviderProps, ButtonIconProps, ButtonTextProps };