import { useState } from "react";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Nav from "../Nav";

const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <Menu isMenuOpen={isMenuOpen} />
      <Nav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
