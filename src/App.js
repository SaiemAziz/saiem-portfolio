import bg from './assets/milad-fakurian-aaSTQ-wY5DQ-unsplash.jpg'
import bg2 from './assets/noita-digital-QZX8jbK1xEw-unsplash.jpg'
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Banner from './components/Banner';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className={`App bg-[url('https://i.ibb.co/FYwxDgd/milad-fakurian-aa-STQ-w-Y5-DQ-unsplash.jpg')] w-screen overflow-hidden text-slate-50 bg-fixed bg-cover`}>
      <div className='bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.8)] min-h-screen'>
        <Banner/>
        <Projects/>
        <Footer/>
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
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
export default App;
