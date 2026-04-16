import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { Collapse } from "@mui/material";
import { NavItemProps, NavListProps } from "../types";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
function NavList({
  items = [],
  itemClassName,
  className,
  navGroupClassName,
  ...props
}: NavListProps) {
  return (
    <ul className={twMerge("lg:flex lg:text-lg", className)} {...props}>
      {items.map((item: NavItemProps, index) => (
        <>
          {!item.items && (
            <NavItem key={index} className={itemClassName} {...item} />
          )}
          {item.items && (
            <MenuItemGroup
              navGroupClassName={navGroupClassName}
              itemClassName={itemClassName}
              key={index}
              {...item}
            />
          )}
        </>
      ))}
    </ul>
  );
}

function NavItem({ title, href = "", className, ...props }: NavItemProps) {
  return (
    <li className={twMerge("py-3 pl-5", className)} {...props}>
      <Link to={href}>{title}</Link>
    </li>
  );
}

function MenuItemGroup({
  title,
  items,
  navGroupClassName,
  itemClassName,
  ...props
}: NavItemProps & { navGroupClassName?: string; itemClassName?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="relative" {...props}>
      <div className="flex items-center justify-between gap-1 pr-7 lg:pr-0">
        <NavItem
          title={title}
          className={itemClassName}
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        />
        {open ? (
          <FaChevronUp className={twMerge("", itemClassName)} />
        ) : (
          <FaChevronDown className={itemClassName} />
        )}
      </div>
      <Collapse
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        in={open}
        timeout="auto"
        unmountOnExit
        className={twMerge(
          "top-14 left-0 z-100 w-full lg:absolute lg:rounded lg:shadow-lg lg:shadow-black/5",
          navGroupClassName,
        )}
      >
        {items && (
          <NavList
            items={items}
            itemClassName={itemClassName}
            className="flex-col pl-4 lg:pl-0"
          />
        )}
      </Collapse>
    </li>
  );
}

export default NavList;
