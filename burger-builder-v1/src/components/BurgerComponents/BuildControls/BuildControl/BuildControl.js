import classes from './BuildControl.module.css';




const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button onClick={props.removeIndgredient} disabled={props.disabledInfo} className={classes.Less} >Less</button>
        <button onClick={props.addIngredient} className={classes.More}>More</button>
    </div>
);

export default buildControl;