import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

import './Headlines.css';

const propTypes = {
  lines: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  })),
};

const defaultProps = {
  lines: null,
};

const Headlines = ({ lines }) => {
  const getCursorProps = () => ({
    hideWhenDone: true,
  });

  const getStartDelay = () => (1000);

  return (
    <Typist className="h-color--white h-align--center" startDelay={getStartDelay()} cursor={getCursorProps()}>
      {
        lines && lines.length
          ? (
            lines.map((headline, index) => (
              <span key={headline.id}>
                {headline.label}
                {
                  (index + 1) < lines.length
                    ? (
                      <Typist.Backspace count={headline.label.length} delay={1000} />
                    )
                    : ''
                }
              </span>
            ))
          )
          : ''
      }
    </Typist>
  );
};

Headlines.propTypes = propTypes;
Headlines.defaultProps = defaultProps;

export default Headlines;
