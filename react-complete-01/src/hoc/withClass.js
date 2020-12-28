// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );

const withClass = (WrappedComponent, className,) => {
    return props => (
        <div className={className}>
            <p>in the withClass</p>
            <WrappedComponent {...props} />
        </div>
    );
}
export default withClass;