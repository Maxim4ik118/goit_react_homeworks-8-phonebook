import React from 'react';

import PropTypes from 'prop-types';

import Input from '@mui/material/Input';
import { StyledFilter } from './Styled';

const Filter = ({filter, onChange}) => {
  return (
    <StyledFilter>
      <label className="input-group">
        <span className="name">Find contact by name</span>
        <Input type="text" value={filter} onChange={onChange} />
      </label>
    </StyledFilter>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
