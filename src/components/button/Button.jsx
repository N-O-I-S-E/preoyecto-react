import "./button.css";

export default function Button(props) {
  console.log(props);

  return (
    <button style={{ backgroundColor: props.color }} className="button-85">
      {props.text}
    </button>
  );
}

// named exports
export function ButtonChild(props) {
  console.log(props);

  return (
    <button style={{ backgroundColor: props.color }} className="button-85">
      {props.children}
    </button>
  );
}
