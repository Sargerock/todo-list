import React from 'react';
import PropTypes from 'prop-types';

const TodoFooter = ({tasksCount}) => {

    return (
        <div className='flexSpaceBetween'>
            <span>Total tasks: {tasksCount}</span>
        </div>
    )
};

TodoFooter.propTypes = {
   tasksCount: PropTypes.number.isRequired
};

export default TodoFooter;