import './Drink.css';
import { Layer } from '../3-2_Layer/Layer';

export const Drink = ({id, name, ordered, image, layers}) => (
    <div className="drink">
        <div className="drink__product">
            <div className="drink__cup">
                <img src={`http://localhost:4000${image}`} />
            </div>
            <div className="drink__info">
                <h3>{name}</h3>
                {
                    layers.map((item) => (
                        <Layer color={item.color} label={item.label}/>
                    ))
                }
            </div>
        </div>
        <form data-id={id} data-ordered={ordered} className="drink__controls">
            <button className={ordered ? "order-btn" : "order-btn order-btn--ordered"}>
                {
                   ordered ? "Zrušit" : "Objednat"
                }
            </button>
        </form>
    </div>
)

/*
const orderId = document.querySelector(".order-id").value
if (orderId === True) {
    document.querySelector(".drink_controls button").textContent = "Zrušit"
} else {
    document.querySelector(".drink_controls button").textContent = "Objednat"
}

const orderBtns = document.querySelectorAll(".order-btn")
orderBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
        const postId = e.target.dataset.id

        const orderId = document.querySelector(".order-id").value
        if (orderId === True) {
            document.querySelector(".drink_controls button").textContent = "Zrušit"
            orderId = False

        } else {
            document.querySelector(".drink_controls button").textContent = "Objednat"
            orderId = True
        }
    })
})
*/