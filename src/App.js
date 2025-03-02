import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/pages/HomPage/HomePage.jsx";
import Footer from "./customer/components/Footer/Footer.jsx";
import Product from "./customer/components/Product/Product.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
			<BrowserRouter >
				<div className=''>
					<Navigation />
					{/* <HomePage /> */}
					<Product />
					<Footer />
				</div>
			</BrowserRouter >
	);
}

export default App;
