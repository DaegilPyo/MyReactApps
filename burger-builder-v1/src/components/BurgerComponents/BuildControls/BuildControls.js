import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { lable: 'Salad', type: 'salad' },
    { lable: 'Bacon', type: 'bacon' },
    { lable: 'Cheese', type: 'cheese' },
    { lable: 'Meat', type: 'meat' },
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <h1><strong>Total Price : ${props.totalPrice.toFixed(2)}</strong></h1>
        {
            controls.map((el, index) =>
                <BuildControl
                    disabledInfo={props.disabledInfo[el.type]}
                    label={el.lable}
                    key={index}
                    addIngredient={() => props.addIngredient(el.type)}
                    removeIndgredient={() => props.removeIndgredient(el.type)}
                />)
        }
        <button onClick={props.purchaseHandler} className={classes.OrderButton} disabled={!props.purchaseable}> ORDER NOW !</button>
    </div>
);

export default buildControls;