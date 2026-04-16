import Drawer from "@mui/material/Drawer";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import Brand from "./brand";
import { IoClose } from "react-icons/io5";
import { MenuProps } from "../types";
import NavList from "./nav-list";

const Menu = ({
  navItems,
  navGroupClassName,
  itemClassName,
  ...props
}: MenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*------------for desktop------------*/}
      <div className="hidden lg:block">
        <NavList
          items={navItems}
          navGroupClassName={navGroupClassName}
          itemClassName={itemClassName}
        />
      </div>

      {/*------------for mobile------------*/}
      <aside className="lg:hidden">
        <IoIosMenu size={35} onClick={() => setOpen(true)} />
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          anchor="right"
          sx={{ "& .MuiDrawer-paper": { width: "80%" } }}
          {...props}
        >
          <section className="flex h-full flex-col bg-black/10">
            <MenuTop setOpen={setOpen} />
            <NavList items={navItems} itemClassName={itemClassName} />
          </section>
        </Drawer>
      </aside>
    </>
  );
};
export default Menu;

//===========components====================

function MenuTop({ setOpen }: any) {
  return (
    <div className="flex items-center justify-between p-3">
      <Brand />
      <IoClose size={30} onClick={() => setOpen(false)} />
    </div>
  );
}
