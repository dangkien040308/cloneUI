import Nav from "./layoutComponents/Navigation/Nav"
import Hero from "./layoutComponents/Hero/Hero"
import Feature from "./layoutComponents/Feature/feature"
import Stories from "./layoutComponents/Stories/stories"
import Benefits from "./layoutComponents/Benefits/benefits"
import Pricing from "./layoutComponents/Pricing/pricing"
import FAQS from "./layoutComponents/FAQs/faqs"
import CTA from "./layoutComponents/CTA/cta"
function App() {


  return (
    <>
      <Nav/>
      <Hero />
      <Feature />
      <Stories />
      <Benefits />
      <Pricing />
      <FAQS />
      <CTA />
    </>
  )
}

export default App
