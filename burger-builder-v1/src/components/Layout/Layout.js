import Aux from './../../hoc/Aux';
import classes from './Layout.module.css';
const layout = (props) => {
    return (
        <Aux>
            <div>
                Toobar ,SidRawer,Backdrop
        </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;