import { createContext } from "react";
import { useContext } from "react";

export const HeaderContext = createContext({
  title: "App Name",
  logo: "",
  titleClassName: "",
  logoClassName: "",
});

export const useHeaderContext = () => useContext(HeaderContext);
