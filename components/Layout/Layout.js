import Footer from "../Footer/Footer";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
