import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
}

export default Layout;
