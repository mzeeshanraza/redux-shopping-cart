import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showUser } from "../features/userDetailsSlice";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <UserModal
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
          setShow={setShow}
          id={id}
        />
        <div className="d-flex justify-content-between align-items-center mx-4">
          <h1>All Users</h1>
          <div className="d-flex gap-2">
            <div>
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                checked={radioCheck === ""}
                onChange={(e) => setRadioCheck("")}
              />
              <label class="form-check-label">All</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value="Male"
                checked={radioCheck === "Male"}
                onChange={(e) => setRadioCheck(e.target.value)}
              />
              <label class="form-check-label">Male</label>
            </div>
            <div>
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value="Female"
                checked={radioCheck === "Female"}
                onChange={(e) => setRadioCheck(e.target.value)}
              />

              <label class="form-check-label">Female</label>
            </div>
          </div>
        </div>

        {data?.users
          .filter((item) => {
            if (data.searchData.length === 0) {
              return item;
            } else {
              return item.name
                .toLowerCase()
                .includes(data.searchData.toLowerCase());
            }
          })
          .filter((item) => {
            if (radioCheck === "") {
              return item;
            } else if (radioCheck === "Male") {
              return item.gender === radioCheck;
            } else if (radioCheck === "Female") {
              return item.gender === radioCheck;
            }
          })
          .map((ele) => (
            <div key={ele.id} className="card w-75 mx-auto my-2">
              <div className="card-body">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{ele.gender}</h6>

                <button
                  type="button"
                  class="btn btn-primary"
                  //onClick={() => setId(ele.id) && handleShow()}
                  onClick={() => [setId(ele.id), handleShow(true)]}
                >
                  View
                </button>

                <Link
                  onClick={() => dispatch(deleteUser(ele.id))}
                  className="card-link mx-2"
                >
                  Delete
                </Link>
                <Link to={`/edit/${ele.id}`}>
                  <span className="card-link mx-2">Edit</span>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Read;
