import { Switch, Route } from "react-router-dom";

import { Toolbar } from "@material-ui/core";
import { HomePage } from "./pageComponents/HomePage/HomePage";
import { MenuPage } from "./pageComponents/MenuPage/MenuPage";
import { OrderPage } from "./pageComponents/OrderPage/OrderPage";
import { AboutPage } from "./pageComponents/AboutPage/AboutPage";
import { ContactPage } from "./pageComponents/ContactPage/ContactPage";
import { CoreNav } from "./SiteCoreChildren/CoreNav";
import { Footer } from "./SiteCoreChildren/Footer";

const SiteCore: React.FC = () => {
  return (
    <>
      <CoreNav />
      <Toolbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/menu">
          <MenuPage />
        </Route>
        <Route path="/online-order">
          <OrderPage />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
        <Route path="/contact-us">
          <ContactPage />
        </Route>
        <Route
          path="/lezgo-chingling-bby"
          component={() => (
            <div>
              <h1>Itz chingling's site baby</h1>
              <p>
                LETS GO. ITS THE CHINGLING SITE. TIME TO EAT WANMIN FOOOOOOOOD
              </p>
            </div>
          )}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default SiteCore;
