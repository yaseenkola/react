import "./Layout.css";

import Header from "./Header";
import Navbar from "./Navbar";
import MainSection from "./MainSection";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
