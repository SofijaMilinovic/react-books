import './Body.css';
import { Switch, Route } from "react-router-dom";
import Home from './Home/Home.js';
import Books from './Books/Books.js';
import Cart from './Cart/Cart.js';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import Admin from './Admin/Admin.js';
import BookDetails from './BookDetails/BookDetails';

function Body(props) {

  return (
    <div className="Body">
      <Switch>
        <Route exact path="/">
          <Home setCurrentActiveLinkProp={props.setCurrentActiveLinkProp}/>
        </Route>
        <Route exact path="/books">
          <Books addBookToCartProp={props.addBookToCartProp}
            removeBookFromCartProp={props.removeBookFromCartProp}
            setCurrentActiveLinkProp={props.setCurrentActiveLinkProp} />
        </Route>
        <Route exact path="/books/book-details">
          <BookDetails setCurrentActiveLinkProp={props.setCurrentActiveLinkProp}/>
        </Route>
        <Route exact path="/cart">
          <Cart cartProp={props.cartProp}
            addBookToCartProp={props.addBookToCartProp}
            removeBookFromCartProp={props.removeBookFromCartProp}
            clearCartProp={props.clearCartProp}
            setCurrentActiveLinkProp={props.setCurrentActiveLinkProp} />
        </Route>
        <Route exact path="/login">
          <Login setUserIdProp={props.setUserIdProp}
            setCurrentActiveLinkProp={props.setCurrentActiveLinkProp} />
        </Route>
        <Route exact path="/register">
          <Register setCurrentActiveLinkProp={props.setCurrentActiveLinkProp}/>
        </Route>
        <Route exact path="/admin">
          <Admin setCurrentActiveLinkProp={props.setCurrentActiveLinkProp}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Body;
