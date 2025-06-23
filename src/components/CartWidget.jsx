import carrito from "../assets/carrito.png";

let items = 5;

const CartWidget = () => {
  return (
    <div className="flex items-center gap-2 text-white">
      <img src={carrito} alt="carrito" className="w-6 h-6 filter invert" />
      <p>{items}</p>
    </div>
  );
};

export default CartWidget;
