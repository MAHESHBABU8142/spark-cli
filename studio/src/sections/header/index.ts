import HeaderBase from "./components/header-base";
import Menu from "./components/menu";
import { HeaderType } from "./types";
export type {
  HeaderType,
  HeaderProps,
  MenuProps,
  NavListProps,
  NavItemProps,
} from "./types";

/**
 * ### A header component
 * - Wrapper for a ```header``` tag with support for branding, menu, and menu items
 *
 * @example
 * ```tsx
 * <Header title="Spark" logo="../../../../public/demo-logo.png">
 *   <Header.Menu
 *     itemClassName="lg:hover:text-blue-800 active:text-blue-800"
 *     navGroupClassName="lg:bg-white"
 *     navItems={[
 *       { title: "Home", href: "/" },
 *       {
 *         title: "Component Library",
 *         items: [
 *           { title: "Button", href: "/component-library/button" },
 *           { title: "Card", href: "/component-library/card" },
 *           { title: "Modal", href: "/component-library/modal" },
 *         ],
 *       },
 *       { title: "About", href: "/about" },
 ]}
 *   />
 * </Header>
 * 
 * ```
 */
const Header = Object.assign(HeaderBase, {
  Menu,
}) as HeaderType;

export default Header;
