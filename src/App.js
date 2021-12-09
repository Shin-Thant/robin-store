import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CartPage } from "./pages/cart/CartPage";
import { DetailsPage } from "./pages/detailpage/DetailsPage";
import { ProductPage } from "./pages/product/ProuctPage";
import { HomePage } from "./pages/home/HomePage";
import { Scroll } from "./components/Scroll";

function App() {
    return (
        <Router>
            <Navbar />
            <Scroll />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" component={ProductPage} />
                <Route path="/product/:id" component={DetailsPage} />
                <Route path="/cart" exact component={CartPage} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
