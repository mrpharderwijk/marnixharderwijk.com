import React from 'react';
import PropTypes from 'prop-types';

import './SocialList.css';

const propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  })),
};

const defaultProps = {
  listItems: null,
};

const SocialList = ({ listItems }) => (
  <React.Fragment>
    {
      listItems && listItems.length
        ? (
          <ul className="list-group list-group--horizontal">
            {
              listItems.map(listItem => (
                <li className="list-group-item" key={listItem.id}>
                  <a href={listItem.href} className="btn btn-social" target="_blank" rel="noopener noreferrer" title={`${listItem.label} link`}>
                    <span className={`icon icon-${listItem.icon}`} />
                  </a>
                </li>
              ))
            }
          </ul>
        ) : ''
    }
  </React.Fragment>
);

SocialList.propTypes = propTypes;
SocialList.defaultProps = defaultProps;

export default SocialList;
