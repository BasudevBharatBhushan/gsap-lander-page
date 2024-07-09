import { useState } from "react";
import Hero from "./components/Hero";
import Brief from "./components/Brief";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Brief />
      <Client />
      <Footer />
    </>
  );
}

export default App;
