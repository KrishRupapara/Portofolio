import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <div className="relative h-full bg-bgPrimary text-primary">
      <Nav />
      <main className="z-0 w-11/12 mx-auto">
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
