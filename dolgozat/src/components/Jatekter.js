import Elem from "./Elem";
import "./Jatekter.css";

function Jatekter(props) {
  function katt(szoveg) {
    console.log("jatekter");
    props.katt(szoveg);
  }
  return (
    <div className="jatekter">
      {props.lista.map((elem, index) => {
        return <Elem ertek={elem} katt={katt} key={index} index={index} />;
      })}
    </div>
  );
}
export default Jatekter;