import React from 'react';

export default ({flight}) => {
  return <>
  <div className="flight-detail-container col-s-12 col-m-6 col-l-3">
      <div key={flight.flight_number} className="row flight">
          <picture>
              <source srcSet={flight.links.mission_patch_small} media="(max-width: 600px)"></source>
              <source srcSet={flight.links.mission_patch} media="(min-width: 600px)"></source>
              <source srcSet="flight.jpg"></source>
              <img src={flight.links.mission_patch} className="flight-img" alt={flight.mission_name} />
            </picture>
            <div className="flight-body">
                <h5 className="flight-title">{flight.mission_name} # {flight.flight_number}</h5>
                <p className="flight-launch-year">
                   Mission Ids: {flight.mission_id&&flight.mission_id.map(id=>(
                        <li>{id}</li>
                    ))}
                 </p>
                 <p className="flight-launch-year">
                    Launch Year: {flight.launch_year}
                 </p>
                 <p className="flight-launch-year">
                    Successful Launch: {String(flight.launch_success)}
                 </p>
                 <p className="flight-launch-year">
                  Successful Landing: {String(flight.rocket.first_stage.cores[0].land_success)}
                 </p>
            </div>
        </div>
    </div>
  </>
};