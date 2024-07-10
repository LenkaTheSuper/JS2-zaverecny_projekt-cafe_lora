import './Menu.css';
import { Drink } from '../3-1_Drink/Drink';

export const Menu = ({drinks}) => (
    <section id='menu' className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
              {
                drinks.map((item) => (
                  <Drink id={item.id} name={item.name} ordered={item.ordered} image={item.image} layers={item.layers}/>
                ))
              }
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
    </section>
)