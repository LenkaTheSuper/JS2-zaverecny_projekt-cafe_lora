import { OrderItem } from "../7-1_OrderItem/OrderItem"

export const Order = ({items}) => (
    <div className="container order__content">
        <h1>Vaše objedávnka</h1>
        
        {items.length === 0 ?
        <p className="empty-order">Zatím nemáte nic objednáno</p>
        :
        <div className="order__items">
            {
                items.map((item) => (
                    <OrderItem name={item.name} image={item.image}/>
                ))
            }
        </div>
        }
        
    </div>
)