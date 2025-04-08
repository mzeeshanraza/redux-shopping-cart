import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";

const Create = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user data...", data);
    dispatch(createUser(data));
    // navigate("/");
  };

  return (
    <div>
      <h2>Enter the data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            onChange={updateData}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            onChange={updateData}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="enter age"
            onChange={updateData}
          />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            // checked={updateData.gender === "Female"}
            value="Male"
            onChange={updateData}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            // checked={this.state.selectedOption === "Female"}
            value="Female"
            onChange={updateData}
          />
          <label>Famale</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
