import Header from "./Header";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import RegisterPage from "./RegisterPage";
import Navbar from "./Navbar";

// Route refers to one URL in your app
// Switch can store many routes
import { Route, Switch } from 'wouter'


export default function App() {
  return <>

    <Navbar />
    <Header />

    {/* the area of the visible component that changes depending on the url
is the switch */}
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/products" component={ProductPage} />
      <Route path="/register" component={RegisterPage} />
    </Switch>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>

  </>
}