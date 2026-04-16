import { ComponentPropsWithoutRef, FC } from "react";
import { DrawerProps } from "@mui/material/Drawer";

/*-------------header-------------*/

type HeaderProps = ComponentPropsWithoutRef<"header"> & {
  variant?: "minimal";
  title: string;
  titleClassName?: string;
  logo: string;
  logoClassName?: string;
};

/*-------------menu-------------*/
type MenuProps = DrawerProps & {
  variant?: "minimal";
  navItems?: NavItemProps[];
  navGroupClassName?: string;
  itemClassName?: string;
};

type NavListProps = ComponentPropsWithoutRef<"ul"> & {
  items?: NavItemProps[];
  itemClassName?: string;
  navGroupClassName?: string;
};

type NavItemProps = ComponentPropsWithoutRef<"li"> & {
  title: string;
  href?: string;
  items?: NavItemProps[];
};

type HeaderType = FC<HeaderProps> & {
  Menu: FC<MenuProps>;
};

export { HeaderType, HeaderProps, MenuProps, NavListProps, NavItemProps };
