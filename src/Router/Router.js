import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../components/Home'
import UpComingList from '../components/UpComingList'
import Music from '../components/Music'
import Movie from '../components/Movies'
import News from '../components/News'
import NewsPage from '../components/Newspage'
import Merch from '../components/Merch'
import Merchpage from '../components/Merchpage'
import Footer from '../components/Footer'
import ProductScreen from '../components/ProductOverView';
import Login from '../Authentication/Login';
import CartScreen from '../components/CartScreen';
import AddToCart from '../components/AddtoCart';

export default function AppRouter() {
    return (
        <Router >
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={UpComingList} />
            <Route exact path="/" component={Music} />
            <Route exact path="/" component={Movie} />
            <Route exact path="/" component={News} />
            <Route exact path="/" component={Merch} />
            <Route exact path="/" component={Footer} />
            <Route exact path="/news-page" component={NewsPage} />
            <Route exact path="/merch-page" component={Merchpage} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/add-to-cart/:id" component={AddToCart} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/auth" component={Login} />
        </Router>
    )
}