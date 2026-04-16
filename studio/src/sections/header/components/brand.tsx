import { twMerge } from "tailwind-merge";
import { useHeaderContext } from "../header-context";
import { ComponentPropsWithoutRef } from "react";

const Brand = ({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) => {
  const { title, logo, titleClassName, logoClassName } = useHeaderContext();
  return (
    <div className={twMerge("flex items-center gap-2", className)} {...props}>
      <img
        src={logo}
        className={twMerge(
          "h-10 w-10 rounded-xl lg:h-12 lg:w-12",
          logoClassName,
        )}
        alt="logo"
      />
      <h1
        className={twMerge("text-2xl font-medium lg:text-3xl", titleClassName)}
      >
        {title}
      </h1>
    </div>
  );
};

export default Brand;
