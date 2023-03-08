import "../styles/Information.css";

function Information(props) {
  return (
    <div className="information">
      <h1 className="header">{props.header}</h1>
      {props.children}
    </div>
  );
}

export default Information;