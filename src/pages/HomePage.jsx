import React from "react";
import styles from "../styles/pages/HomePage.module.css";
import Header from "../components/Home/Middle";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";
import Top from "../components/Home/Top";
import Middle from "../components/Home/Middle";
import Bottom from "../components/Home/Bottom";
function App() {
  return (
    <div className={styles.homePage}>
      <Header />
      <Main />
      <Footer />
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
}

export default App;
