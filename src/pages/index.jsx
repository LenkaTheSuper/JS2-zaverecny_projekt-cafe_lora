import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/1_Header/Header';
import { Banner } from '../components/2_Banner/Banner';
import { Menu } from '../components/3_Menu/Menu';
import { Gallery } from '../components/4_Gallery/Gallery';
import { Contact } from '../components/5_Contact/Contact';
import { Footer } from '../components/6_Footer/Footer';

const response = await fetch("http://localhost:4000/api/drinks")
const json = await response.json()
const drinks = json.data

console.log(drinks)

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <header>
      <Header showMenu={true}/>
    </header>
    <main>
      <Banner />
      <Menu drinks={drinks} />
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
  document.querySelector(".rollout-nav").classList.add("nav-closed")
))

const drinkControls = document.querySelectorAll(".drink__controls")
drinkControls.forEach((btn) => {
  btn.addEventListener("submit", async (e) => {
    e.preventDefault()
    const drinkId = e.target.dataset.id
    const ordered = e.target.dataset.ordered === "true"

    await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: !ordered }])
    })
    
    window.location.reload()
  })
})