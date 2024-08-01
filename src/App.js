import About from "./components/About";
import Achievements from "./components/Achievements";
import ClientReviews from "./components/ClientReviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LoanSolution from "./components/LoanSolution";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Partners from "./components/Partners";
import Process from "./components/Process";
import Services from "./components/Services";
import VisionMission from "./components/VisionMission";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Hero></Hero>
        <Offers></Offers>
        <About></About>
        <VisionMission></VisionMission>
        <Services></Services>
        <Achievements></Achievements>
        <LoanSolution></LoanSolution>
        <Process></Process>
        <ClientReviews></ClientReviews>
        <Partners></Partners>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
