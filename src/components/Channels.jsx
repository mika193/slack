import React from 'react';
import { connect } from 'react-redux';
import { channelsSelector } from '../selectors';

const mapStateToProps = (state) => {
  const channels = channelsSelector(state);
  return { channels };
};

const Channels = ({ channels }) => (
  <ul className="list-group col-3">
    {channels.map(({ id, name }) => (
      <li className="list-group-item list-group-item-action" key={id}>
        <button type="button" className="btn btn-link">{name}</button>
      </li>
    ))}
  </ul>
);

export default connect(mapStateToProps)(Channels);
