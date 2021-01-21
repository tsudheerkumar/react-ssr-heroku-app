import React from 'react';
import PropTypes from 'prop-types';

const NoFlight = (props) => {
  const {
    launchYear, isLaunched, isLanded,
  } = props;
  return (
    <>
      <div className="flight-detail-container col-s-12 col-m-12 col-l-12">
        <div className="row flight">
          <div className="flight-body">
            <h5 className="flight-title">No SpacEx Program matching the below criteria:</h5>
            <p className="flight-launch-year">
              Launch Year:
              {' '}
              {launchYear}
            </p>
            <p className="flight-launch-year">
              Successful Launch:
              {' '}
              {isLaunched}
            </p>
            <p className="flight-launch-year">
              Successful Landing:
              {' '}
              {isLanded}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
NoFlight.propTypes = {
  launchYear: PropTypes.string,
  isLaunched: PropTypes.string,
  isLanded: PropTypes.string,
};

NoFlight.defaultProps = {
  launchYear: '',
  isLaunched: '',
  isLanded: '',
};

export default NoFlight;
