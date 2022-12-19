import "./Button.css"
const Button=(props)=>{
    const classes= 'btn '+props.className
    return(
        <>
        <div>
            <button className={classes} onClick={props.onClick}>{props.children}</button>
        </div>
        </>
    )
}
export default Button;