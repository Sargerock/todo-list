import React from 'react';
import PropTypes from 'prop-types';

const TodoHeader = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
};

TodoHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default TodoHeader;