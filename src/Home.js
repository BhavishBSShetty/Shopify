import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/GW/Heros/D24082897_IN_CEPC_Graphics_3000x12000.5x._CB664256932_.jpg"
          alt=""
          className="home_image"
        />

        <div className="home_row">
          <Product
            id="67556343"
            title="Sony Bravia 164 cm (65 inches) XR series 4K Ultra HD Smart OLED Google TV XR-65A80J (Black) (2021 Model) | with Alexa Compatibility"
            price={284990}
            image="https://images-na.ssl-images-amazon.com/images/I/81JfPnggb3S._SL1500_.jpg"
            rating={5}
          />

          <Product
            id="98676564"
            title="AmazonBasics 127cm (50 inch) Fire TV 4K Ultra HD Smart LED TV
            AB50U20PS (Black)"
            price={34999}
            image="https://images-na.ssl-images-amazon.com/images/I/61bXjE5ESwS._SL1240_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="2143545"
            title="Mi 11 Ultra 5G (Ceramic White, 12GB RAM, 256GB Storage) | Snapdragon 888 "
            price={69999}
            image="https://seller.shoponn.in/Item/Mi%2011%20Ultra%205G%2012GB%20256GB%20Ceramic%20Black%20A.jpg"
            rating={4}
          />
          <Product
            id="3425254"
            title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
            price={87999}
            image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
            rating={5}
          />
          <Product
            id="32446436"
            title="OnePlus 9 Pro 5G (Morning Mist, 12GB RAM, 256GB Storage)"
            price={69999}
            image="https://images-na.ssl-images-amazon.com/images/I/61LvUvbZGlL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="98785554"
            title="SAMSUNG 138 cm (55 inch) Ultra HD (4K) Curved LED Smart TV  (UA55KS9000KLXL)"
            price={284900}
            image="https://rukminim1.flixcart.com/image/416/416/television/b/u/x/samsung-ua55ks9000klxl-original-imaekc8hnfhsaumz.jpeg?q=70"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
