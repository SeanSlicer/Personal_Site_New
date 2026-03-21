import classNames from "classnames";
import type { DetailedHTMLProps, HTMLAttributes, FC } from "react";

type Props = {
  className?: string;
  variant?: keyof typeof variants;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const variants = {
  padding: "w-11/12 lg:max-w-5xl lg:w-4/6 sm:w-5/6 m-auto md:p-5 py-7 md:py-14",
};

const Column: FC<Props> = (props) => {
  const { children, className, variant = "padding" } = props;

  return (
    <div className={classNames(variants[variant], className)}>{children}</div>
  );
};

export default Column;
