import React, { Component } from "react";
import Product from "./Product";
import Navbar from "./Navbar";

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h3>Hello from ProductList</h3>
                <Product />
            </div>
        )
    }
}