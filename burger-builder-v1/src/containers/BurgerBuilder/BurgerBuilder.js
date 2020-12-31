import { Component } from "react";
import Burger from "./../../components/BurgerComponents/Burger/Burger"
import Aux from "../../hoc/Aux";
import BuildControls from "./../../components/BurgerComponents/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BurgerComponents/OrderSummary/OrderSummary";
import axios from '../../axios-order';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErroHandler from "../../hoc/WithErroHandler/WithErroHandler";
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
        ingredients: null,
        totalPrice: 4,
        purchaseable: false,
        puchasing: false,
        loading: false,
        error: false
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
        this.setState({ puchasing: true }
        );

    purchaseCancelHandler = () => {
        this.setState({
            puchasing: false,
        });
    }
    purchaseContinueHandler = () => {
        // this.setState({ loading: true });
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: "Daegil",
        //         age: 27,
        //         address: {
        //             street: '77 Finch Ave East',
        //             zipCode: "M2N 6H8"
        //         },
        //         email: 'pyo920917@gmail.com'
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axios.post('/orders.json', order).then(response => {
        //     this.setState({ puchasing: false, loading: false, });
        // }).catch(err => {
        //     this.setState({ loading: false, puchasing: false, });
        // });
        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout/',
            search: '?' + queryString
        });
    }
    componentDidMount() {
        axios.get('https://react-my-burger-bcc79-default-rtdb.firebaseio.com/ingredients.json')
            .then(repose => {
                console.log(repose.data);
                this.setState({ ingredients: repose.data });
            }).catch(error => {
                this.setState({ error: true });
            })
    }
    // componentDidUpdate() {
    //     console.log('[BurgerBuilder.js] componentDidUpdate...');
    // }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = <OrderSummary
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients ? this.state.ingredients : {}}
            continuePurchase={this.purchaseContinueHandler}
            cancelPurchase={this.purchaseCancelHandler}
        />;
        if (this.state.loading) {
            orderSummary = <Spinner></Spinner>;
        }
        return (
            <Aux>
                {
                    <Modal show={this.state.puchasing} modalClose={this.purchaseCancelHandler}>
                        {orderSummary}
                    </Modal>
                }
                {this.state.ingredients ? <Burger ingredients={this.state.ingredients}></Burger> : (this.state.error ? <p style={{ textAlign: 'center' }}>Error</p> : null)}
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

export default withErroHandler(BurgerBuilder, axios);