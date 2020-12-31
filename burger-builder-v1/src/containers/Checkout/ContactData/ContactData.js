import React, { Component } from "react";
import CustomButton from "../../../components/UI/Button/Button";
import classes from './ContactData.module.css';
import axios from '../../../axios-order';
import Spinner from "../../../components/UI/Spinner/Spinner";
import CustomInput from "../../../components/UI/Input/CustomInput";
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 10
                },
                isValid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your email'
                },
                value: '',
                validation: {
                    required: true,
                },
                isValid: false,
                touched: false

            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: '',
                validation: {
                    required: true,
                },
                isValid: false,
                touched: false

            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your zipCode'
                },
                value: '',
                validation: {
                    required: true,
                },
                isValid: false,
                touched: false

            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: '',
                validation: {
                    required: true,
                },
                isValid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "fastest", displayValue: "Fastest" },
                        { value: "cheapest", displayValue: "Cheapest" }
                    ],
                },
                validation: {
                },
                value: 'fastest',
                isValid: true,
                touched: false
            },
        },
        loading: false,
        formIsValid: false,

    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData
        }
        axios.post('/orders.json', order).then(response => {
            console.log(response);
            this.setState({ puchasing: false, loading: false, });
            this.props.history.push('/');
        }).catch(err => {
            console.log(err);
            this.setState({ loading: false, puchasing: false, });
        });


    }

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        return isValid;
    }


    onChangeHandler = (event, inputIdentifier) => {
        let updatedOrderForm = { ...this.state.orderForm }
        const updatedFormEl = updatedOrderForm[inputIdentifier];
        updatedFormEl.value = event.target.value;
        updatedFormEl.isValid = this.checkValidity(updatedFormEl.value, updatedFormEl.validation);
        updatedFormEl.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormEl;
        let formIsValid = true;
        for (let inputIdentifiers in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifiers].isValid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {
        const formElementArray = [];
        for (let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map((formElement =>
                    <CustomInput
                        shouldValidate={formElement.config.validation}
                        isValid={formElement.config.isValid}
                        changed={(event) => this.onChangeHandler(event, formElement.id)}
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        touched={formElement.config.touched}
                    />))}
                {/* <CustomInput inputtpe="input" label="Name" placeholder="Your Name" />
                <CustomInput inputtpe="input" label="Email" placeholder="Your Email" />
                <CustomInput inputtpe="input" label="Street" placeholder="Your Street" />
                <CustomInput inputtpe="input" label="Postal" placeholder="Your Postal" /> */}
                <CustomButton disabled={!this.state.formIsValid} btnType="Success" >ORDER</CustomButton>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner></Spinner>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}

            </div>
        );
    }

}

export default ContactData;