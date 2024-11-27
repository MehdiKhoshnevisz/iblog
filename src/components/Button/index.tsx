import { useMemo } from "react";
import { ButtonProps } from "./types";
import { Link } from "react-router";
import { BUTTON_COLOR } from "@/types/enums";

const Button = (props: ButtonProps) => {
  const {
    href = "",
    children = <></>,
    color = BUTTON_COLOR.default,
    ...otherProps
  } = props;

  const colorClass = useMemo(() => {
    switch (color) {
      case BUTTON_COLOR.default:
        return "text-slate-950 hover:text-white bg-slate-100 hover:bg-slate-950";

      case BUTTON_COLOR.primary:
        return "text-white bg-slate-950 hover:opacity-80";

      case BUTTON_COLOR.error:
        return "text-white bg-red-500 hover:opacity-80";

      case BUTTON_COLOR.success:
        return "text-white bg-green-500 hover:opacity-80";
    }
  }, [color]);

  const classes = `min-h-9 text-center px-4 py-2 font-black ${colorClass} transition-all duration-300`;

  return href ? (
    <Link to={href} className={classes}>
      {children}
    </Link>
  ) : (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
