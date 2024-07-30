import About from "./components/About";
import Achievements from "./components/Achievements";
import Hero from "./components/Hero";
import LoanSolution from "./components/LoanSolution";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Process from "./components/Process";
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
        <Achievements></Achievements>
        <LoanSolution></LoanSolution>
        <Process></Process>
      </header>
    </div>
  );
}

export default App;
