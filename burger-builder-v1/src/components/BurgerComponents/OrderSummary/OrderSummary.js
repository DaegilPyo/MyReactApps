import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import CustomButton from '../../UI/Button/Button';

class OrderSummary extends Component {
    //This could be functional component, dosen`t have to be class component


    //**
    componentDidUpdate() {
        console.log('[OrderSummary.js] componentDidUpdate');
    }
    //**
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey} ><span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}</li>
        });
        return (
            <Aux>
                <h3>
                    Your Order
            </h3>
                <p> A delicious burget with the following ingredients : </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price : $ <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
                <p> Would like you continue to check out ?  </p>
                <CustomButton btnType="Danger" onClick={this.props.cancelPurchase}> CANCEL </CustomButton>
                <CustomButton btnType="Success" onClick={this.props.continuePurchase}> CONTINUE </CustomButton>
            </Aux>
        );
    }
}

export default OrderSummary;

