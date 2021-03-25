import React from "react";

const SingleDay = ({ day }) => {
  return (
    <div className="day col-sm p-2 border border-left-0 border-top-0 text-truncate bg-light text-muted">
      <h5 className="row align-items-center">
        <span className="date col-1">{day}</span>
        <small className="col d-sm-none text-center text-muted">Sunday</small>
        <span className="col-1"></span>
      </h5>
      <p style={{ fontSize: 12 }}>No reminders ..</p>
    </div>
  );
};

export default SingleDay;
