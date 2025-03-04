import "./App.css";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/pages/HomPage/HomePage.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import Product from "./customer/components/Product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
			<BrowserRouter >
				<div className=''>
					<Navigation />
					{/* <HomePage /> */}
					{/* <Product /> */}
					{/* <ProductDetails /> */}
					{/* <Cart /> */}
					<Checkout />
					<Footer />
				</div>
			</BrowserRouter >
	);
}

export default App;
