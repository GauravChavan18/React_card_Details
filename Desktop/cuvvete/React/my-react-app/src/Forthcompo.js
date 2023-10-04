import { useState } from "react";

function Four() {
  const [newtitle, settitle] = useState("");
  const [newdate, setdate] = useState("");

  function titlechangehandler(event) {
    settitle(event.target.value);
  }

  function datechangehandler(event) {
    setdate(event.target.value);
  }

  function formsubmithandler(event) {
    event.preventDefault();

    const data = {
      title: newtitle,
      date: newdate,
    };

    console.log(data);
    settitle("");
    setdate("");
  }
  return (
    <form onSubmit={formsubmithandler}>
      <div>
        <div>
          <label>Title</label>
          <input
            type="text"
            onChange={titlechangehandler}
            value={newtitle}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            onChange={datechangehandler}
            value={newdate}
          ></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
export default Four;
