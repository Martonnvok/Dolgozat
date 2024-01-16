import "./Elem.css";

function Elem(props) {
  function katt() {
    console.log("Elem");
    props.katt(props.index);
  }
  return (
    <div className="elem" onClick={katt}>
      <h2>{props.ertek}</h2>
    </div>
  );
}

export default Elem;