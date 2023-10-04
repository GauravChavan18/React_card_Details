import "./BackCard.css";
function BackDisplay(props) {
  return (
    <div className="backcard">
      <div className="black-rectangle"></div>

      <div className="cvv-div">
        {props.issubmit ? (
          <p className="cvv-number">{props.cvvnumber}</p>
        ) : (
          <p className="cvv-number">000</p>
        )}
      </div>
    </div>
  );
}

export default BackDisplay;
