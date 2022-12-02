import bg from "./assets/milad-fakurian-aaSTQ-wY5DQ-unsplash.jpg";
import bg2 from "./assets/noita-digital-QZX8jbK1xEw-unsplash.jpg";
import "./App.css";
import test from "./assets/Hologram_Planet_by_nuva_preview.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Country, State, City }  from 'country-state-city';
// https://i.ibb.co/FYwxDgd/milad-fakurian-aa-STQ-w-Y5-DQ-unsplash.jpg
// https://i.pinimg.com/originals/20/ae/f2/20aef23d39a8dcb74bf663ed89ab08d6.gif
// https://i.pinimg.com/originals/e0/d6/35/e0d63599fce837f2a40ad8e877922188.gif
// https://i.pinimg.com/originals/cb/cb/13/cbcb134ed187d9c3fabf74bd3f4c3550.gif
// https://i.pinimg.com/originals/68/20/41/68204121c1625095e58b9307d071b94f.gif
// https://i.pinimg.com/originals/75/53/72/7553724d9fd1822101d626c4531d895a.gif
// https://i.pinimg.com/originals/ab/42/fe/ab42feda6037f4c6db541b6d30f4cb43.gif
function App() {
  // console.log(Country, State, City);
  // console.log(Country.getAllCountries())
  // // console.log(State.getStatesOfCountry('BD'))
  // console.log(City.getCitiesOfCountry('BD'));
  // console.log(City.getCitiesOfState('BD', 'B'))
  return (
    <div
      className={`App w-screen overflow-hidden bg-[url('https://i.pinimg.com/originals/20/ae/f2/20aef23d39a8dcb74bf663ed89ab08d6.gif')] text-slate-50 bg-container bg-center`}
    >
      
      <div className="bg-gradient-to-t from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.3)] min-h-screen">
        <Banner />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
export default App;
