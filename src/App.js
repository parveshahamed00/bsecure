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
import WhyWe from "./components/WhyWe";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Hero></Hero>
        <VisionMission></VisionMission>
        <About></About>
        <Offers></Offers>
        <Services></Services>
        <LoanSolution></LoanSolution>
        <WhyWe/>
        <Process></Process>
        <br/>
        <Achievements></Achievements>
        <ClientReviews></ClientReviews>
        <Partners></Partners>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
