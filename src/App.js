import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { productsList } from "../components/ProductList";
import { classification } from "./pages/classification";
import { member } from "./pages/member";
import { favorite } from "./pages/favorite";
import { time_limit } from "./pages/time_limit";
import { new_product } from "./pages/new_product";
import { authorize_T } from "./pages/authorize_T";
import { pants } from "./pages/pants";
import { sports } from "./pages/sports";
import { productDetail } from "./pages/productDetail";
import { checkOut } from "./pages/checkOut";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">

      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/classification" component={classification} />
          <Route path="/member" component={member} />
          <Route path="/favorite" component={favorite} />
          <Route path="/checkout" component={checkOut} />

          <Route path="/time_limit" component={time_limit} />
          <Route path="/new_product" component={new_product} />
          <Route path="/authorize_T" component={authorize_T} />
          <Route path="/pants" component={pants} />
          <Route path="/sports" component={sports} />
          <Route path="/productDetail" component={productDetail} />
          {/* <Route path="/productsList" component={productsList} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
