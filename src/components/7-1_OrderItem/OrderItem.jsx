export const OrderItem = ({name, image}) => (
    <div className="order-item">
        <img
        src={`http://localhost:4000${image}`}
        className="order-item__image"
        />
        <div className="order-item__name">
        {name}
        </div>
    </div>
)