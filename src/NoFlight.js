import React from 'react';

export default (props) => {
    console.log("No flight props",props);
  return <>
  <div className="flight-detail-container col-s-12 col-m-12 col-l-12">
      <div className="row flight">
            <div className="flight-body">
                <h5 className="flight-title">No SpacEx Program matching the below criteria:</h5>
                <p className="flight-launch-year">
                    Launch Year: {props.launchYear}
                 </p>
                 <p className="flight-launch-year">
                    Successful Launch: {props.isLaunched}
                 </p>
                 <p className="flight-launch-year">
                  Successful Landing: {props.isLanded}
                 </p>
            </div>
        </div>
    </div>
  </>
};