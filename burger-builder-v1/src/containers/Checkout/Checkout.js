import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route } from 'react-router-dom';
class Checkout extends Component {
    state = {
        totalPrice: 0,
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            mear: 0,
        }
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = 0;
        for (let param of query.entries()) {
            if (param[0] !== 'price') {
                ingredients[param[0]] = +param[1];
            }
            else {
                totalPrice = param[1];
            }
        }
        console.log(ingredients);
        console.log(this.state.ingredient);
        this.setState({ ingredient: ingredients, totalPrice: totalPrice });
        console.log(this.state.ingredient);
    }
    render() {
        return <div>
            <CheckoutSummary
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}
                ingredient={this.state.ingredient} />
            {/* <Route path={this.props.match.path + '/contact-data'} component={ContactData}></Route> */}
            <Route path={this.props.match.path + '/contact-data'} render={(props) => (
                <ContactData totalPrice={this.state.totalPrice} ingredients={this.state.ingredient} {...props}></ContactData>)
            }></Route>
        </div>
    }

}

export default Checkout;