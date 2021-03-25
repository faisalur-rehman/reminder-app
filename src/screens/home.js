import React from "react";
import { range } from "lodash";

import SingleDay from "../components/single_day";
import Navbar from "../components/navbar";

const HomeScreen = () => {
  const days = range(1, 36);

  return (
    <div className="">
      <Navbar />

      <div className="container-fluid">
        <header>
          <h3 className="display-5 my-4 text-center">November 2017</h3>
          <div className="row d-none d-sm-flex p-1 bg-dark text-white">
            <h5 className="col-sm p-1 text-center">Sunday</h5>
            <h5 className="col-sm p-1 text-center">Monday</h5>
            <h5 className="col-sm p-1 text-center">Tuesday</h5>
            <h5 className="col-sm p-1 text-center">Wednesday</h5>
            <h5 className="col-sm p-1 text-center">Thursday</h5>
            <h5 className="col-sm p-1 text-center">Friday</h5>
            <h5 className="col-sm p-1 text-center">Saturday</h5>
          </div>
        </header>
        <div className="row border border-right-0 border-bottom-0">
          {days.map((d, i) => {
            if (i % 7 === 0) {
              console.log(i);
              return (
                <React.Fragment key={i}>
                  <div className="w-100"></div>
                  <SingleDay day={i + 1} />
                </React.Fragment>
              );
            } else {
              return <SingleDay day={i + 1} key={i} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
