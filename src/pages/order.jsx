import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/1_Header/Header';
import { Footer } from '../components/6_Footer/Footer';
import { Order } from '../components/7_Order/Order';

const chosen = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image")
const json = await chosen.json()
const chosenDrinks = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
      <header>
        <Header />
      </header>

      <main className="order">
        <Order items={chosenDrinks}/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  </div>
);