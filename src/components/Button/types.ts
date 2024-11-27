import type { BUTTON_COLOR } from "@/types/enums";
import { ReactNode, ButtonHTMLAttributes } from "react";

// export type UNION_BUTTON_COLOR = "default" | "primary" | "error" | "success";

type UNION_BUTTON_COLOR = keyof typeof BUTTON_COLOR;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  color?: UNION_BUTTON_COLOR;
  children?: ReactNode;
}
