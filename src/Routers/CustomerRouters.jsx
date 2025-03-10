import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Product from "../customer/components/Product/Product";
import HomePage from "../customer/pages/HomPage/HomePage";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Cart from "../customer/components/Cart/Cart";
import Checkout from "../customer/components/Checkout/Checkout";

const CustomerRouters = () => {
	return (
		<div>
			<div>
				<Navigation />
			</div>
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/:levelOne/:levelTwo/:levelThree' element={<Product />}></Route>
				<Route path='/product/:ProductId' element={<ProductDetails />}></Route>
				<Route path='/cart' element={<Cart />}></Route>
				<Route path='/checkout' element={<Checkout />}></Route>
				<Route path='/account/order' element={<Order />}></Route>
				<Route path='/account/order/:orderId' element={<OrderDetails />}></Route>
			</Routes>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default CustomerRouters;
