import React from 'react';
import PropTypes from 'prop-types';

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

const Headlines = ({ lines }) => (
  <React.Fragment>
    {
      lines && lines.length
        ? (
          <ul className="list-group list-group-headline">
            {
              lines.map(headline => (
                <li className="list-group-item list-group-item--animate" key={headline.id}>
                  {headline.label}
                </li>
              ))
            }
          </ul>
        ) : ''
    }
  </React.Fragment>
);

Headlines.propTypes = propTypes;
Headlines.defaultProps = defaultProps;

export default Headlines;
