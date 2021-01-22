import React from 'react';
import PropTypes from 'prop-types';

const Flight = (props) => {
  const {
    flight: {
      flight_number,
      mission_name,
      mission_id,
      launch_year,
      rocket: {
        first_stage,
      },
      launch_success,
      links: {
        mission_patch,
        mission_patch_small,
      },
    },
  } = props;
  return (
    <>
      <div className="flight-detail-container col-s-12 col-m-6 col-l-3">
        <div key={flight_number} className="row flight">
          <picture>
            <source srcSet={mission_patch_small} media="(max-width: 600px)" />
            <source srcSet={mission_patch} media="(min-width: 600px)" />
            <source srcSet="flight.jpg" />
            <img src={mission_patch} className="flight-img" alt={mission_name} />
          </picture>
          <div className="flight-body">
            <h5 className="flight-title">
              {mission_name}
              {' '}
              #
              {' '}
              {flight_number}
            </h5>
            <p className="flight-launch-year">
              Mission Ids:
              {' '}
              {mission_id && mission_id.map((id) => (
                <li>{id}</li>
              ))}
            </p>
            <p className="flight-launch-year">
              Launch Year:
              {' '}
              {launch_year}
            </p>
            <p className="flight-launch-year">
              Successful Launch:
              {' '}
              {String(launch_success)}
            </p>
            <p className="flight-launch-year">
              Successful Landing:
              {' '}
              {String(first_stage.cores[0].land_success)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
Flight.propTypes = {
  flight: PropTypes.objectOf,
};

Flight.defaultProps = {
  flight: '',
};
export default Flight;
