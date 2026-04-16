import { twMerge } from "tailwind-merge";
import { HeaderProps } from "../types";
import Brand from "./brand";
import { HeaderContext } from "../header-context";

const HeaderBase = ({
  className,
  variant = "minimal",
  title = "App Name",
  titleClassName = "",
  logo,
  logoClassName = "",
  children,
  ...props
}: HeaderProps) => {
  return (
    <HeaderContext.Provider
      value={{
        title,
        logo,
        titleClassName,
        logoClassName,
      }}
    >
      <header
        className={twMerge(
          variant === "minimal" &&
            `fixed right-0 left-0 z-50 flex items-center justify-between px-5 py-3 text-black`,
          className,
        )}
        {...props}
      >
        <Brand />
        {children}
      </header>
    </HeaderContext.Provider>
  );
};

export default HeaderBase;
