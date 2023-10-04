import "./Secondcompo.css";
function Second(props) {
  const name = props.name;
  const age = props.age;
  const gender = props.gender;
  return (
    <div className="Container">
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{gender}</h2>
    </div>
  );
}

export default Second;
