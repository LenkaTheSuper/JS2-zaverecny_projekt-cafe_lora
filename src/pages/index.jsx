import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/1_Header/Header';
import { Banner } from '../components/2_Banner/Banner';
import { Menu } from '../components/3_Menu/Menu';
import { Gallery } from '../components/4_Gallery/Gallery';
import { Contact } from '../components/5_Contact/Contact';
import { Footer } from '../components/6_Footer/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <header>
      <Header />
    </header>
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
  );

document.querySelector(".nav-btn").addEventListener("click", () => (
  document.querySelector(".rollout-nav").classList.toggle("nav-closed")
))

document.querySelector(".rollout-nav").addEventListener("click", () => (
  document.querySelector(".rollout-nav"). classList.add("nav-closed")
))