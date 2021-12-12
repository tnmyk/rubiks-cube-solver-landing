import { useState } from "react";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Nav from "../Nav";

const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <Nav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      <div style={{ minHeight: "70vh" }}>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
