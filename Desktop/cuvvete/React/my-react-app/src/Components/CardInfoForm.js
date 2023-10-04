import { useState } from "react";
import "./CardInfoForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CardFormDisplay(props) {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [cvcnumber, setcvcnumber] = useState("");
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");
  const [error, seterror] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [cvcError, setCvcError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [monthError, setMonthError] = useState(false);

  function namechangehandler(event) {
    setname(event.target.value);
  }

  function numberchangehandler(event) {
    setnumber(event.target.value);
  }

  function cvcchangehandler(event) {
    setcvcnumber(event.target.value);
  }

  function monthchangehandler(event) {
    const newMonth = event.target.value;
    setmonth(newMonth);
  }

  function yearchangehandler(event) {
    setyear(event.target.value);
  }
  function checknumberstaus(num, minlen, maxlen) {
    if (num.length !== maxlen || isNaN(num)) {
      return true;
    }
    return false;
  }

  function submithandler(event) {
    event.preventDefault();

    if (
      name.length === 0 ||
      checknumberstaus(number, 0, 16) ||
      !monthvalidatationstaus(month) ||
      checknumberstaus(year, 0, 2) ||
      checknumberstaus(cvcnumber, 0, 3)
    ) {
      setNameError(name.length !== 0);
      setNumberError(checknumberstaus(number, 0, 16));
      setCvcError(checknumberstaus(cvcnumber, 0, 3));
      setYearError(checknumberstaus(year, 0, 2));
      setMonthError(monthvalidatationstaus(month));
      seterror(true);
    }

    if (
      name.length > 0 &&
      number.length === 16 &&
      cvcnumber.length === 3 &&
      year.length === 2 &&
      month.length === 2 &&
      monthvalidatationstaus(month)
    ) {
      const data = {
        name: name,
        number: number,
        month: month,
        year: year,
        cvvnumber: cvcnumber,
        issubmit: true,
      };

      props.printdata(data);
      toast("data submitted");

      setname("");
      setnumber("");
      setmonth("");
      setyear("");
      setcvcnumber("");
      seterror(false);
      setNameError(true);
      setNumberError(true);
      setCvcError(true);
      setYearError(true);
      setMonthError(true);
    }
  }
  const arr = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  function monthvalidatationstaus(month) {
    if (arr.includes(month) && (month.length === 2 || isNaN(month))) {
      return true;
    }
    return false;
  }

  return (
    <form onSubmit={submithandler}>
      <div className="form-div">
        <label>CARDHOLDER NAME</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          value={name}
          onChange={namechangehandler}
          style={{
            width: "400px",
            height: "40px",
            borderRadius: "5px",
            paddingLeft: "20px",
            fontSize: "20px",
            color: "rgba(187, 185, 188, 1)",
          }}
        ></input>

        {error && !nameError ? (
          <label className="error-label">Cardholder name required</label>
        ) : (
          <label></label>
        )}
      </div>
      <div className="form-div">
        <label>CARD NUMBER</label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={numberchangehandler}
          value={number}
          style={{
            width: "400px",
            height: "40px",
            borderRadius: "5px",
            paddingLeft: "20px",
            fontSize: "20px",
            color: "rgba(187, 185, 188, 1)",
          }}
        ></input>
        {error && numberError ? (
          <label className="error-label">Card number required</label>
        ) : (
          <label></label>
        )}
      </div>
      <div className="form-div2">
        <div>
          <label>EXP.DATE (MM/YY)</label>
          <div>
            <input
              onChange={monthchangehandler}
              placeholder="MM"
              value={month}
              style={{
                width: "60px",
                height: "40px",
                borderRadius: "5px",
                paddingLeft: "20px",
                margin: "10px 10px 0px 0px",
                fontSize: "20px",
                color: "rgba(187, 185, 188, 1)",
              }}
            ></input>

            <input
              onChange={yearchangehandler}
              placeholder="YY"
              value={year}
              style={{
                width: "60px",
                height: "40px",
                borderRadius: "5px",
                paddingLeft: "20px",
                fontSize: "20px",
                color: "rgba(187, 185, 188, 1)",
              }}
            ></input>
          </div>
          {error && !monthError ? (
            <label className="error-label">Month required</label>
          ) : (
            <label></label>
          )}
          {error && yearError ? (
            <label className="error-label">Year required</label>
          ) : (
            <label></label>
          )}
        </div>
        <div>
          <label style={{ marginLeft: "30px" }}>CVC</label>
          <div>
            <input
              placeholder="e.g. 123"
              type="text"
              value={cvcnumber}
              onChange={cvcchangehandler}
              style={{
                width: "200px",
                height: "40px",
                borderRadius: "5px",
                paddingLeft: "20px",
                fontSize: "20px",
                margin: "10px 0px 0px 25px",
                color: "rgba(187, 185, 188, 1)",
              }}
            ></input>
          </div>
          {error && cvcError ? (
            <label className="error-label" style={{ marginLeft: "25px" }}>
              CVC must be numeric
            </label>
          ) : (
            <label></label>
          )}
        </div>
      </div>
      <div>
        <button>Confirm</button>
        <ToastContainer />
      </div>
    </form>
  );
}

export default CardFormDisplay;
