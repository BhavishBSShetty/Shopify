import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Nireeksh/IBD14July/D25597164_IN_HETV_IndusInd-_July-14th_Bank-event_ILM_640x45._CB664759036_.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h3>{user ? "Hello " + user.email.split("@")[0] : "Hello Guest"}</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/* CheckoutProduct */}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
