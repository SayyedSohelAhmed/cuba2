import "./Input.css";
const Input = (props) => {

//   console.log(props);
  const classes = "input " +props.className;

  return (
    <>
      <input
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        className={classes}
      />
    </>
  );
};
export default Input;
