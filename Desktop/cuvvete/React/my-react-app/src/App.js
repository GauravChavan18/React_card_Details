import "./App.css";
import BackDisplay from "./Components/BackCard";
import FrontDisplay from "./Components/FrontCard";
import CardFormDisplay from "./Components/CardInfoForm";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    number: "",
    cvvnumber: "",
    month: "",
    year: "",
  });
  function printdata(data) {
    setData(data);
  }

  return (
    <div className="App">
      <div className="leftside">
        <div className="Carddisplaydiv">
          <FrontDisplay data={data} />
          <BackDisplay cvvnumber={data.cvvnumber} issubmit={data.issubmit} />
        </div>
      </div>
      <div className="rightside">
        <div>
          <CardFormDisplay printdata={printdata} />
        </div>
      </div>
    </div>
  );
}

export default App;
