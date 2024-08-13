import {useState} from 'react'
function Waitlist() {

    const [email,setEmail]=useState("");
  return (
    <>
      <div className="d-flex-column bg-white p-5 gap-4">
        <h2>Join The Waitlist</h2>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter email"
            value={email}
            aria-label="Recipient's email"
            aria-describedby="button-addon2"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button
            class="btn btn-secondary bg-black ms-1"
            type="button"
            id="button-addon2"
            onClick={()=>setEmail("")}
            >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default Waitlist;
