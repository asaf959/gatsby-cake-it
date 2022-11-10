import React, {useState} from "react";
import Hamburger from "../Hamburger/Hamburger";
import { GlobalStyle, Primary } from "./Layout.styles";


const Layout = ({children}) => {
const [menuOpen, setmenuOpen] = useState(false);
const handleOverlayMenu = () => setmenuOpen(prev => !prev)
  return (
    <>
    <GlobalStyle />
    <Hamburger handleOverlayMenu={handleOverlayMenu} />
    <Primary>{children}</Primary>
    </>
  )
}

export default Layout