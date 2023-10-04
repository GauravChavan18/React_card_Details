import "./FrontCard.css";
function FrontDisplay(props) {
  let arr = [];
  function printnumber() {
    for (let i = 0; i < 16; i++) {
      if (i % 4 === 0) {
        arr.push(" ");
      }
      arr.push(props.data.number[i]);
    }
    return arr;
  }
  return (
    <div className="frontcard">
      <div className="circle"></div>
      <div className="small-circle"></div>
      {props.data.issubmit ? (
        <div>
          <p className="card-number">{printnumber()}</p>
          <p className="card-name">{props.data.name.toUpperCase()}</p>
          <p className="card-date">
            {props.data.month}/{props.data.year}
          </p>
        </div>
      ) : (
        <div>
          <p className="card-number">0000 0000 0000 0000</p>
          {/* <p className="card-name">JANE APPLESEED</p> */}
          <p className="card-date">00/00</p>
        </div>
      )}
    </div>
  );
}

export default FrontDisplay;
