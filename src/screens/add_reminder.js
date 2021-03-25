import React from "react";

import Navbar from "./../components/navbar";

const AddReminderScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <h4>Add New Reminder</h4>

        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="remember">What do you want to remember?</label>
                <input
                  type="text"
                  className="form-control"
                  name="remember"
                  id="remember"
                  placeholder="e.g. Buy milk .."
                />
              </div>

              <label htmlFor="date">When?</label>
              <div className="row">
                <div className="col-md-9">
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      id="date"
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <input type="time" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Where?</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  id="location"
                  placeholder="e.g. New York City"
                />
              </div>

              <input type="submit" className="btn btn-primary" value="Save" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReminderScreen;
