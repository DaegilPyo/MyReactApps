import React from "react";
import Burger from "../../BurgerComponents/Burger/Burger";
import CustomButton from "../../UI/Button/Button";
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{ width: "100%", margin: 'auto' }}>
                <Burger ingredients={props.ingredient} />
            </div>
            <CustomButton onClick={props.checkoutCancelled} btnType="Danger">CANCEL</CustomButton>
            <CustomButton onClick={props.checkoutContinued} btnType="Success">CONTINUE</CustomButton>
        </div>
    )

}

export default checkoutSummary;