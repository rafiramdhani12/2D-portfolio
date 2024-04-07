import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Work from "./component/Work";
import {ThemeProvider} from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <Work />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
