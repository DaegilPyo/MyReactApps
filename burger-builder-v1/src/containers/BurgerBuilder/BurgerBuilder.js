import { Component } from "react";
import Burger from "./../../components/BurgerComponents/Burger/Burger"
import Aux from "../../hoc/Aux";
import BuildControls from "./../../components/BurgerComponents/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BurgerComponents/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.2,
    cheese: 0.5,
    bacon: 0.3,
    meat: 0.7,
}
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            salad: 0,
            bacon: 0,
        },
        totalPrice: 4,
        purchaseable: false,
        puchasing: false,
    }

    updatePurchaseState(updatedIngredients) {
        const ingredients = updatedIngredients;
        const sum = Object.keys(ingredients).map((igKey) => {
            return ingredients[igKey];
        }).reduce((sum, el) => sum + el, 0);
        this.setState({
            purchaseable: sum > 0,
        });
    }
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        });
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;
            this.setState({
                ingredients: updatedIngredients,
                totalPrice: newPrice,
            });
            this.updatePurchaseState(updatedIngredients);
        }
    }
    purchaseHandler = () =>
        this.setState({ puchasing: true });

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                {this.state.puchasing ? <Modal show={this.state.puchasing}><OrderSummary ingredients={this.state.ingredients} /></Modal> : null}
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls totalPrice={this.state.totalPrice}
                    disabledInfo={disabledInfo}
                    addIngredient={this.addIngredientHandler}
                    removeIndgredient={this.removeIngredientHandler}
                    purchaseable={this.state.purchaseable}
                    purchaseHandler={this.purchaseHandler}
                />
            </Aux>
        );
    };
}

export default BurgerBuilder;