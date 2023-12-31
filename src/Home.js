import "./App.css";
import Component from "./Filter/Component";
import Dishes from "./Dishes/Dishes";
import Cart from "./Cart/Cart";

function Home() {
  return (
    <div>
      <div className="free">
          <img
            width="44"
            height="44"
            src="https://img.icons8.com/nolan/64/delivery.png"
            alt="delivery"
          />
         <h3 className="head">Free delivery from 30$</h3> 
          <img
            width="44"
            height="44"
            src="https://img.icons8.com/nolan/64/delivery.png"
            alt="delivery"
          />
        
      </div>

      <div className="app">
        <div className="container">
          <Component />
          <Cart />
        </div>
        <div className="container container-dishes">
          <Dishes />
        </div>
      </div>
    </div>
  );
}

export default Home;
