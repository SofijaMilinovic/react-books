import './Body.css';
import { Switch, Route } from "react-router-dom";
import Home from './Home/Home.js';
import Books from './Books/Books.js';
import Cart from './Cart/Cart.js';

function Body(props) {


  return (
    <div className="Body">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/books">
          <Books addBookToCartProp={props.addBookToCartProp} removeBookFromCartProp={props.removeBookFromCartProp} />
        </Route>
        <Route exact path="/cart">
          <Cart cartProp={props.cartProp}
            addBookToCartProp={props.addBookToCartProp}
            removeBookFromCartProp={props.removeBookFromCartProp}
            clearCartProp={props.clearCartProp} />
        </Route>
      </Switch>
    </div>
  );
}

export default Body;
