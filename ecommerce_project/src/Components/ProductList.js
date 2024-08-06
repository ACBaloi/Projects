import React, { Component } from "react";
import Title from "./Title";

export default class ProductList extends Component {
    state= {
        products:[]
    }
    render() {
        return (
            <div>
              <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Nossos" title="produtos" />

                        <div className="row">

                        </div>
                    </div>
                </div>
              </React.Fragment>
            </div>
        )
    }
}