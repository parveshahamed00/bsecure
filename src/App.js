
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Hero></Hero>
        <Offers></Offers>
        <About></About>
        <Services></Services>

      </header>
    </div>
  );
}

export default App;
